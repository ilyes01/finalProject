import axios from 'axios'
import { ADD_MESSAGES,  CLEAR_SUCCESSMESSAGE, FAIL_MESSAGES, GET_MESSAGES, LOAD_MESSAGES } from '../ActionsTypes/messages'




export const getMessages = () => async (dispatch) => {
    dispatch ({type : LOAD_MESSAGES})
    try {
        let result = await axios.get('/api/messages/allMessages')
        dispatch (  { type : GET_MESSAGES, payload : result.data.listMessages})
    } catch (error) {
        dispatch ({type : FAIL_MESSAGES , payload : error.response.data.errors})
    }
}


export const addMessages = (newMessage) => async (dispatch) => {
    dispatch ({type : LOAD_MESSAGES})
    try {
        let result = await axios.post('/api/messages/postMessage',newMessage)
        dispatch (  { type : ADD_MESSAGES, payload : result.data})
    } catch (error) {
        dispatch ({type : FAIL_MESSAGES , payload : error.response.data.errors})
    }
}


export const deleteMessages = (id) => async (dispatch) => {
    dispatch ({type : LOAD_MESSAGES})
    try {
        await axios.delete(`/api/messages/${id}`)
        dispatch (getMessages())
    } catch (error) {
        dispatch ({type : FAIL_MESSAGES , payload : error.response.data.errors})
    }
}


export const  clearSuccessMessage = () => {
    return {
        type : CLEAR_SUCCESSMESSAGE
    }
}