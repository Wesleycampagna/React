import { combineReducers } from 'redux'
import userControl from './UserReducer'
import musicControl from './musicReducer'

export default combineReducers ({
        musicControl,
        userControl
})
