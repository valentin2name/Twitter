import {combineReducers, createStore} from 'redux'
import {twitsReducer} from '../Components/Reducer/Reducer'

const rootReducer = combineReducers({
    posts: twitsReducer,
})


export const store = createStore(rootReducer)