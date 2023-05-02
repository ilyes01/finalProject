import { ADD_MESSAGES,  CLEAR_SUCCESSMESSAGE, FAIL_MESSAGES, GET_MESSAGES, LOAD_MESSAGES } from "../ActionsTypes/messages"



const initialState = 
{
newMessage : {} ,
listMessages : [],
errors : null ,
load : false,
success : null ,
}

const messageReducer = (state= initialState , {type,payload}) => {
    switch (type) {
        case LOAD_MESSAGES:
            return {...state, load : true}
        case ADD_MESSAGES:
            return {...state, load : false , newMessage: payload.newMessage, success : payload.success}    
        case GET_MESSAGES:
            return {...state, load:false , listMessages:payload, success : payload.success }         
       case FAIL_MESSAGES : 
            return {...state , load : false , errors : payload}       
       case CLEAR_SUCCESSMESSAGE : 
             return {...state , success : null}          
        default:
            return state
    }
}



export default messageReducer