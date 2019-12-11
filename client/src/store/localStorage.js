export const loadState =()=>{
    try{
        const serializedState = localStorage.getItem("state");
        
        if(serializedState===null){
            return {user: "", month: [], day:0, week:0, thisDay:[], error:false, authenticated: false};
        }
        return JSON.parse(serializedState);
    }catch(err){
        return undefined
    }
}

export const saveState = (state) =>{
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState)
    }catch(err){

    }
}