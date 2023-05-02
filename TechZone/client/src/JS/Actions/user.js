// imporrtation

import axios from 'axios'
import { CURRENT_USER, FAIL_USER, LOAD_USER,  LOGIN_USER, LOGOUT_USER, REGISTER_USER ,EDIT_USER, GET_USER, EDIT_USERPASSWORD, CLEAR_ERRORS, CLEAR_SUCCESS } from '../ActionsTypes/user'


// register user 

export const register = (newUser) => async (dispatch) => {
    dispatch ({type : LOAD_USER})
    try {
        let result = await axios.post("/api/user/register" , newUser)
        dispatch({type : REGISTER_USER , payload : result.data})
    } catch (error) {
        dispatch ({type : FAIL_USER , payload : error.response.data.errors})
        
    }
}


export const login = (user) => async (dispatch) => {
    dispatch ({type : LOAD_USER})
    
    try {
        let result = await axios.post("/api/user/login" , user)
        dispatch ( { type : LOGIN_USER , payload : result.data})
        
    } catch (error) {

        dispatch ({type : FAIL_USER , payload : error.response.data.errors})
    }
}


export const current = () => async (dispatch) => {
dispatch ({ type : LOAD_USER})

try {
 const config = {
     headers : {
         authorization : localStorage.getItem("token")
     }
 }
 let result = await axios.get("/api/user/current" , config)
 dispatch ({ type : CURRENT_USER , payload : result.data})
} catch (error) {
    dispatch ({type : FAIL_USER , payload : error.response.data.errors})
    
}}



export const logout = () => async (dispatch) => {
    dispatch ({ type : LOGOUT_USER})
}


export const edituser = (id,newUser)=> async (dispatch) =>{
    dispatch ({type : LOAD_USER})
  try {
     let result = await axios.put(`/api/user/${id}`,newUser)
      dispatch (  { type : EDIT_USER , payload : result.data})
  } catch (error) {
    dispatch ({type : FAIL_USER , payload : error.response.data.errors})
  }
}



export const edituserpassword = (id,newUser)=> async (dispatch) =>{
    dispatch ({type : LOAD_USER})
  try {
     let result = await axios.put(`/api/user/password/${id}`,newUser)
      dispatch ({ type : EDIT_USERPASSWORD , payload : result.data})
  } catch (error) {
    dispatch ({type : FAIL_USER , payload : error.response.data.errors})
  }
}

export const getUser =(id)=> async (dispatch) =>{
    dispatch ({type : LOAD_USER})

    try {
        let result = await axios.get(`/api/user/${id}`)
        dispatch ({ type : GET_USER , payload : result.data.userToGet })
        
    } catch (error) {
        dispatch ({type : FAIL_USER , payload : error.response.data.errors})
        
    }
}

export const clearErrors = () => {
    return {
        type : CLEAR_ERRORS
    }
}


export const  clearSuccess = () => {
    return {
        type : CLEAR_SUCCESS
    }
}


