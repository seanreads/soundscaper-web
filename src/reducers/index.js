import { combineReducers } from 'redux'

export default combineReducers({
  soundscapes: require('reducers/soundscape').reducer
})
