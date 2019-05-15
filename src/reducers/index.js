import { combineReducers } from 'redux'
import Authentication from './Login'
import Patient from './Patient'


export default combineReducers({
    Authentication,
    Patient
})