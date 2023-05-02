import axios from 'axios'
import { REGISTER_ADMIN,CURRENT_ADMIN, GET_ALLUSERS, LOAD_ADMIN,  LOAD_USERS,  LOGIN_ADMIN, LOGOUT_ADMIN, FAIL_ADMIN, CLEAR_ERRORSA,CLEAR_SUCCESSA} from '../ActionsTypes/admin'

export const registerAdmin = (newAdmin) => async (dispatch) => {
    dispatch ({type : LOAD_ADMIN})
    try {
        let result = await axios.post("/api/admin/registerAdmin" , newAdmin)
        dispatch({type : REGISTER_ADMIN , payload : result.data})
    } catch (error) {
        dispatch ({type : FAIL_ADMIN , payload : error.response.data.errors})
        
    }
}

export const loginAdmin = (admin) => async (dispatch) => {
    dispatch ({type : LOAD_ADMIN})
    
    try {
        let result = await axios.post("/api/admin/loginAdmin" , admin)
        dispatch ( { type : LOGIN_ADMIN , payload : result.data})
        
    } catch (error) {

        console.log(error)
    }
}


export const currentAdmin = () => async (dispatch) => {
dispatch ({ type : LOAD_ADMIN})

try {
 const config = {
     headers : {
         authorization : localStorage.getItem("token")
     }
 }
 let result = await axios.get("/api/admin/currentAdmin" , config)
 dispatch ({ type : CURRENT_ADMIN , payload : result.data})
} catch (error) {
    console.log(error)
    
}

}

export const logoutAdmin = () => async (dispatch) => {
    dispatch ({ type : LOGOUT_ADMIN})
}

export const getallusers = () => async (dispatch) => {
    dispatch ({type : LOAD_USERS})
    try {
        let result = await axios.get('/api/admin/allusers')
        dispatch ({ type : GET_ALLUSERS, payload : result.data.listusers})
    } catch (error) {
        console.log(error)
    }
   

}
export const clearErrorsA = () => {
    return {
        type : CLEAR_ERRORSA
    }
}


export const  clearSuccessA = () => {
    return {
        type : CLEAR_SUCCESSA
    }
}