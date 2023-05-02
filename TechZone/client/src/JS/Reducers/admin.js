import { CLEAR_ERRORSA, CLEAR_SUCCESSA, CURRENT_ADMIN, FAIL_ADMIN, GET_ALLUSERS, LOAD_ADMIN, LOGIN_ADMIN, LOGOUT_ADMIN, REGISTER_ADMIN} from '../ActionsTypes/admin'



const InitialState = 
{
admin : null , 
loadAdmin : false , 
errors: [] , 
isAdmin : false,
isAuthAdmin : false,
listusers : [],
}



const adminReducer = ( state = InitialState , {type,payload}) => {
    switch (type) {
        case REGISTER_ADMIN:
            localStorage.setItem("token" , payload.token) 
            break  
        case LOAD_ADMIN:
            return {...state, loadAdmin : true}
        case LOGIN_ADMIN :
            localStorage.setItem("token" , payload.token)
            return{...state , loadAdmin : false , admin : payload.admin ,isAuthAdmin : true, isAdmin : true } 
        case CURRENT_ADMIN : 
             return {...state , admin:payload , isAdmin : true, isAuthAdmin : true , loadAdmin: false}  
         case GET_ALLUSERS : 
             return {...state , listusers:payload , isAdmin : true, isAuthAdmin : true , loadAdmin: false}       
        case LOGOUT_ADMIN :
            localStorage.removeItem("token")
            return { admin : null , 
                loadAdmin : false , 
                errors: [] , 
                isAdmin : false , 
                isAuthAdmin : false ,  
                listusers : [],         
            }      
        case FAIL_ADMIN : 
            return {...state , loadAdmin : false , errors : payload}      
            case CLEAR_ERRORSA :
                return {...state , errors : null }   
            case CLEAR_SUCCESSA : 
                 return { ...state , success : null}       
        default:
            return state
    }
}


export default adminReducer