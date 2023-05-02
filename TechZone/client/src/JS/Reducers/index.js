import {combineReducers} from 'redux' ; 
import userReducer from './user';
import adminReducer from './admin';
import productReducer from './product';
import messageReducer from './messages'
import orderReducer from './order'
const rootReducer = combineReducers({userReducer,adminReducer,productReducer,messageReducer,orderReducer})

export default rootReducer ;