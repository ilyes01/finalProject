import { ADD_ORDER, CLEAR_ERRORSORDER, CLEAR_SUCCESSORDER, FAIL_ORDER, GET_ORDER, LOAD_ORDER } from "../ActionsTypes/order"



const initialState = 
{
newOrder : {} ,
errors : null ,
load : false,
success : null ,
listOrder : [],
}


const orderReducer = (state= initialState , {type,payload}) => {
    switch (type) {
        case LOAD_ORDER:
            return {...state, load : true}
        case ADD_ORDER:
            return {...state, load : false ,newOrder: payload , success : payload.success}   
            case GET_ORDER:
                return {...state, load:false , listOrder:payload, success : payload.success }      
        case CLEAR_SUCCESSORDER : 
            return { ...state , success : null}   
        case FAIL_ORDER: 
            return {...state , load : false , errors : payload}  
        case CLEAR_ERRORSORDER : 
            return {...state , errors : null }                 
        default:
            return state
    }
}



export default orderReducer