import api from "../api"
export const ADD_WORKOUT = "ADD_WORKOUT"
export const AUTHENTICATE = "AUTHENTICATE"
export const NEXT_DAY = "NEXT_DAY"
export const NEXT_WEEK = "NEXT_WEEK"
export const PREV_DAY = "PREV_DAY"
export const PREV_WEEK = "PREV_WEEK"
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const LOGOUT = "LOGOUT"



export function fetchWorkout (user, pass){
    return function (dispatch){
        return api.login({username: user, password: pass}).then((res)=>{
            //call the dispatch function here passing in correct data
            
            if(res.data === false){
                dispatch(errorMessage());
                return false
            }else{
                
                dispatch(addWorkout(res.data.monthlyWorkout, user))
                return true
            }
        }).catch((error)=>{
            
            return false;
            
        })
    }
}

export function newWorkout (user){
    return function(dispatch){
        api.newWorkout({username:user}).then((res)=>{
            console.log(res)
            dispatch(addWorkout(res.data, user))
            
        }).catch((error)=>{
            return false
        })
    }
}

export function registerUser(user, pass){
    return function (dispatch){
        return api.register({username: user, password:pass}).then((res)=>{
            
            if(res === undefined || res.data.error){
                dispatch(errorMessage());
            }else{
                
                dispatch(addWorkout(res.data, user))
            }
            
        })
    }
}
export function addWorkout(data, user){
    
    return {type: ADD_WORKOUT, data, user}

}
export function logOut(){
    return {type: LOGOUT}
}

export function errorMessage(){
    return {type: ERROR_MESSAGE}
}

export function authenticate (){
    return {type: AUTHENTICATE}
}

export function nextDay (){
    return {type: NEXT_DAY}
}
export function nextWeek (){
    return {type: NEXT_WEEK}
}
export function prevDay (){
    return {type: PREV_DAY}
}
export function prevWeek (){
    return {type: PREV_WEEK}
}