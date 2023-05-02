import axios from 'axios'
import { ADD_PRODUCT,CLEAR_SUCCESS,FAIL_PRODUCT, GET_PRODUCT, GET_PRODUCTS, LOAD_PRODUCT } from '../ActionsTypes/product'


export const getProducts = () => async (dispatch) => {
    dispatch ({type : LOAD_PRODUCT})
    try {
        let result = await axios.get('/api/product/allproducts')
        dispatch (  { type : GET_PRODUCTS, payload : result.data.listProducts})
    } catch (error) {
        dispatch ({type : FAIL_PRODUCT , payload : error.response.data.errors})
    }
}


export const addProduct = (newProduct) => async (dispatch) => {
    dispatch ({type : LOAD_PRODUCT})
    try {
        let result = await axios.post('/api/product/addProduct',newProduct)
        dispatch (  { type : ADD_PRODUCT, payload : result.data})
    } catch (error) {
        dispatch ({type : FAIL_PRODUCT , payload : error.response.data.errors})
    }
}


export const deleteProduct = (id) => async (dispatch) => {
    dispatch ({type : LOAD_PRODUCT})
    try {
        await axios.delete(`/api/product/${id}`)
        dispatch (getProducts())
    } catch (error) {
        dispatch ({type : FAIL_PRODUCT , payload : error.response.data.errors})
    }
}

export const getOneProduct =(id)=> async (dispatch) =>{
    dispatch ({type : LOAD_PRODUCT})

    try {
        let result = await axios.get(`/api/product/${id}` )
        dispatch ({ type : GET_PRODUCT , payload : result.data.productToGet})
        
    } catch (error) {
        dispatch ({type : FAIL_PRODUCT , payload : error.response.data.errors})
        
    }

}


export const  clearSuccess1 = () => {
    return {
        type : CLEAR_SUCCESS
    }
}

