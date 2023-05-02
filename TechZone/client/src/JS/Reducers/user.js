import { CURRENT_USER, FAIL_USER, LOAD_USER,  LOGIN_USER, LOGOUT_USER, REGISTER_USER , EDIT_USER, GET_USER, EDIT_USERPASSWORD, CLEAR_ERRORS, CLEAR_SUCCESS} from "../ActionsTypes/user"



const initialState = 
{
user : null , 
loadUser : false , 
errors: null , 
isAuth : false ,
userToGet : {} ,
success : null ,


}



const userReducer = ( state = initialState , {type,payload}) => {
    switch (type) {
        case LOAD_USER:
            return {...state, loadUser : true}
        case REGISTER_USER:
            localStorage.setItem("token" , payload.token)  
            break  
        case LOGIN_USER :
            localStorage.setItem("token" , payload.token )
            return{...state , loadUser : false , user : payload.user , isAuth : true , success : payload.success } 
        case CURRENT_USER : 
             return {...state , user:payload , isAuth : true , loadUser : false}  
        case EDIT_USER:    
            return {...state , loadUser : false , user : payload.user, isAuth : true , success : payload.success}   
        case EDIT_USERPASSWORD:         
            return {...state , loadUser : false , user : payload.user , isAuth : true , success : payload.success} 
        case GET_USER:
            return {...state , userToGet :payload , loadUser:false}
        
        case LOGOUT_USER :
            localStorage.removeItem("token")
            return { user : null , 
                loadUser : false , 
                errors: null , 
                isAuth : false ,
                userToGet : {},
                success : null,     
            }      
        case FAIL_USER : 
            return {...state , loadUser : false , errors : payload}    
        case CLEAR_ERRORS :
            return {...state , errors : null }   
        case CLEAR_SUCCESS : 
             return { ...state , success : null}             
        default:
            return state
    }
}


export default userReducer







