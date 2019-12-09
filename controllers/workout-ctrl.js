

const User = require("../Models/workout-model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const workoutShuffler = require("./workout-shuffler")
const bodyParser = require("body-parser");




register = async (req, res) =>{
    console.log(req.body)
    let password, sampleWorkout, error;
    const body = req.body;
    let dataBaseUser, thisMonthWorkout;
    //find User Promise
    const findUser =  await User.findOne({defaultWorkout: true}, function(err, docs){
        
        if(err){
        console.log(err);
        }else{
            sampleWorkout = docs._doc.sampleWorkout;
            thisMonthWorkout = workoutShuffler.workoutShuffler(sampleWorkout[0]);
        }
    })

    //encrypt password Promise
    const encrypt =  await new Promise((resolve, reject)=>{bcrypt.genSalt(saltRounds, function(err,salt){
        bcrypt.hash(body.password, salt, function(err, hash){
            password = hash;
            
            if(err) reject(err)
            resolve(password)
            })
        })
    });


    //wait for both encrypt and find user

    //uses sample workout Data, shuffles returns workout for the month in array
    
    

    //creates new user from workout-model
    const user = new User({
                    username : body.username,
                    hash : password,
                    sampleWorkout: sampleWorkout,
                    monthlyWorkout: thisMonthWorkout,
                })
    //saves new user to database
    
    // ********Need to make async function to confirm no duplicate users ****** //
    const saveUser = await user.save(function(err, docs){

        if(err===null){
            dataBaseUser = docs.monthlyWorkout
            res.status(201).send(dataBaseUser) 
            
        }else if(err.driver){
            
            res.status(202).send({error: true})
        }
    })
    
}

login = async (req, res) =>{
    let body = req.body;
    let user = body.username;
    let password = body.password;
    let dataBaseUser;
    


    //finds the user in the database and sets user to databaseUser variable
    let findUser = User.findOne({username: user}, function(error, docs){
        if(docs ===null){
            return res.status(201).send({failure:true})
        }else{
            dataBaseUser = docs._doc;
        }
    })

    //comparse the request password with the databaseUser stored hash with bcrypt
    await findUser.then((user)=>{
        if(user ===null){
            return {failure:true}
        }
        bcrypt.compare(password, user.hash).then(function(response){
            if(response ==true){
                return res.status(201).send(dataBaseUser)
            }else{
                return res.send(false)
            }
        })
    
        
    }).catch((error)=>{
        console.log(error)
    })

    

}

newWorkout = async(req, res)=>{
    let body = req.body;
    let user = body.username;
    let dataBaseUser, thisMonth;
    
    let findUser = await User.findOne({username: user}, function(error, docs){
        console.log(docs._doc.username)
        if(docs ===null){
            
            return res.status(201).send({failure:true})
        }else{
            
            dataBaseUser = docs._doc.sampleWorkout;
        }
    }).then((res)=>{
        thisMonth = workoutShuffler.workoutShuffler(res.sampleWorkout[0])
    })
    
    

    let updateUser = await User.updateOne({username: user}, {$set:{monthlyWorkout: thisMonth}} ).then(function(response){
        if(response.n===1){
            
            return res.status(201).send(thisMonth)
        }else{
            return res.send(false);
        }
    })
}


module.exports = {
    register,
    login,
    newWorkout
}