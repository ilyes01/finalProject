import axios from 'axios'
import { ADD_ORDER, CLEAR_ERRORSORDER, CLEAR_SUCCESSORDER, FAIL_ORDER, GET_ORDER, LOAD_ORDER } from '../ActionsTypes/order'



export const addOrder = (newOrder) => async (dispatch) => {
    dispatch ({type : LOAD_ORDER})
    try {
        let result = await axios.post('/api/order/postOrder',newOrder)
        dispatch (  { type : ADD_ORDER, payload : result.data})
    } catch (error) {
        dispatch ({type : FAIL_ORDER , payload : error.response.data.errors})
    }
}


export const getOrders = () => async (dispatch) => {
    dispatch ({type : LOAD_ORDER})
    try {
        let result = await axios.get('/api/order/allOrders')
        dispatch (  { type : GET_ORDER, payload : result.data.listOrder})
    } catch (error) {
        dispatch ({type : FAIL_ORDER , payload : error.response.data.errors})
    }
}

export const deleteOrder = (id) => async (dispatch) => {
    dispatch ({type : LOAD_ORDER})
    try {
        await axios.delete(`/api/order/${id}`)
        dispatch (getOrders())
    } catch (error) {
        dispatch ({type : FAIL_ORDER , payload : error.response.data.errors})
    }
}



export const clearSuccessOrder = () => {
    return {
        type : CLEAR_SUCCESSORDER
    }
}

export const clearErrorsOrder = () => {
    return {
        type : CLEAR_ERRORSORDER
    }
}