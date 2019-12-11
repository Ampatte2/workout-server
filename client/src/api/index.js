import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000/api",
})


export const register = payload => api.post(`/register`, payload).then((response)=>{return response}).catch((error)=>{
    console.log(error)
})
export const login = payload => api.post(`/login`, payload).then((response)=>{return response})
export const newWorkout = payload => api.post(`/newworkout`, payload).then((response)=>{return response})

const apis ={
    register,
    login,
    newWorkout
}
export default apis