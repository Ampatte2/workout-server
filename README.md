# Workout Mixer

This is a excersize application that is built to randomize a month's worth of workouts into seperate weeks.
Users can create a new account and then cycle through the server stored workout plan that is randomly generated for them.
Each week comprises of 4 days and 4 excersizes per 6 muscle groups with pairings being either 2 of [bicep,tricep,shoulder,back]
or 1 of [legs, chest]

This uses Mongoose and Atlas MongoDB database where the schema is:

```
const User = new Schema({
    username : {type: String, unique: true, required: true},
    hash: {type:String, required: true},
    sampleWorkout:{type: Array},
    monthlyWorkout:{type: Array},
    defaultWorkout: {type: Boolean},
})
```

When a user registers their password is hashed by BCrypt and saved in the database. The server calls the database and finds the
entry with the defaultWorkout property of true and copies it to the new Users entry to have the base sampleworkout for that 
individual. This allows for future improvements to add addtional functionality such as customization.

The heart of the randomizer is an array shuffler function which completely shuffles the entire sample workout

let workoutShuffler = (workout)=>{
        let sampleWorkout = workout;


        ```let weekArray = [["chest"], ["legs"]];
        let dArray = ["bicep", "tricep", "back", "shoulder"]
        let monthArray = [];
        let thisMonth = [];
        let c=0;

        //define shuffler
        let arrayShuffler = function(array){

            for(let i = array.length - 1; i > 0; i--){
                  const j = Math.floor(Math.random() * i)
                  const temp = array[i]
                  array[i] = array[j]
                  array[j] = temp
            }
        }

        //shuffle monthArray
        let shuffleMonth =function(){
        
        let i=0;
        while(i<4){
            let thisWeek = [...weekArray];
            let dWeek = [...dArray];
            arrayShuffler(dWeek);
            thisWeek.push(dWeek.slice(0,2));
            thisWeek.push(dWeek.slice(2,4));
            arrayShuffler(thisWeek);
            monthArray.push(thisWeek);
            i++;
            }
        }
        //call shuffleMonth to shuffle monthArray
        shuffleMonth();

        let shuffleSampleIndex = ["chest", "legs","bicep", "tricep", "back", "shoulder"];

        let shuffleSampleWorkout = () =>{
            shuffleSampleIndex.forEach(item=>{
                for(let y=0;y<sampleWorkout[item].length; y++){
                    arrayShuffler(sampleWorkout[item][y]);
                }
            })

        }
        shuffleSampleWorkout();
    
    monthArray.forEach(elem =>{
        let thisWeek = [];
        //takes each element from monthly array at week level and initializes a new week
        
        elem.forEach(work=>{
            //individual workout level
                let thisDay = [];
                if(work.length > 1){
                    let workSection1 = [work[0]]
                    let workSection2 = [work[1]]
                    for(let d=0; d<4;d++){
                     workSection1.push(sampleWorkout[work[0]][d][c]);
                     workSection2.push(sampleWorkout[work[1]][d][c]);
                           }
                    thisDay.push([workSection1, workSection2]);
                    
                }else{
                    let workSection = [work[0]]
                    for(let d=0; d<4;d++){
                        workSection.push(sampleWorkout[work[0]][d][c]);
                        
                              }
                    thisDay.push([workSection]);
                }
                thisWeek.push(thisDay);
            })
       c++
       thisMonth.push(thisWeek)
       thisWeek =[];
    })
    return thisMonth};```


It shuffles the muscle groups, the individual excersizes, and generates four weeks of completely random order while maintaining
the above mentions 2 of and 1 of muscle groups of [bicep,tricep,shoulder,back] and [legs, chest].

This shuffler is called when a new user registers and at the end of the month when a new workout needs to be generated.

Interaction with the server from react is done using react thunk middleware, axios, and react-redux to manage the state of the application.

To keep persistant state the user information and authentication state are managed with redux. No password information is held 
in the local storage.

The users workout is stored in localstorage and the redux store.


