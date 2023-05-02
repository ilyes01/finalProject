import { ADD_PRODUCT,CLEAR_SUCCESS,FAIL_PRODUCT, GET_PRODUCT, GET_PRODUCTS, LOAD_PRODUCT } from "../ActionsTypes/product"



const initialState = 
{
    productToGet :{},
newProduct : {} ,
listProducts : [],
errors : null ,
load : false,
success : null ,
}


const productReducer = (state= initialState , {type,payload}) => {
    switch (type) {
        case LOAD_PRODUCT:
            return {...state, load : true}
        case ADD_PRODUCT:
            return {...state, load : false , newProduct: payload.newProduct, success : payload.success}    
        case GET_PRODUCTS:
            return {...state, load:false , listProducts:payload, success : payload.success }         
       case FAIL_PRODUCT : 
            return {...state , load : false , errors : payload}      
        case GET_PRODUCT : 
             return {...state , load : false , productToGet : payload}      
             case CLEAR_SUCCESS : 
             return { ...state , success : null}          
        default:
            return state
    }
}

export default productReducer