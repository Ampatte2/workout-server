import {ADD_WORKOUT, NEXT_DAY, NEXT_WEEK, PREV_DAY, PREV_WEEK, ERROR_MESSAGE, LOGOUT} from "../actions"

const initialState = {user: "", month: [], day:0, week:0, thisDay:[], error:false, authenticated: false}

const workout = (state=initialState, action) =>{
    switch(action.type){ 
        case ADD_WORKOUT:
            return Object.assign({}, state, {
                user: action.user,
                month: [ action.data], 
                day: 0,
                week: 0,
                thisDay: action.data[0][0],
                error: false,
                authenticated:true
            })
        case NEXT_DAY:
            return Object.assign({}, state, { 
                day: state.day + 1,
                week: state.week,
                thisDay: state.month[0][state.week][state.day+1]
            })
        case NEXT_WEEK:
            return Object.assign({}, state, { 
                day: 0,
                week: state.week + 1,
                thisDay: state.month[0][state.week+1][0]
            })
        case PREV_DAY:
            return Object.assign({}, state, { 
                day: state.day -1,
                week: state.week,
                thisDay: state.month[0][state.week][state.day-1]
            })
        case PREV_WEEK:
            return Object.assign({}, state, { 
                day: 3,
                week: state.week -1,
                thisDay: state.month[0][state.week-1][3]  
            })
        case ERROR_MESSAGE:
            return Object.assign({},state,{
                error:true
            })
        case LOGOUT:
            return Object.assign({}, state, initialState)
        default:
            return state
    }
}

export default workout