import authReducer from './authReducer'
import proReducer  from './proReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    project: proReducer,
})


export default rootReducer