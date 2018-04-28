import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

// Create Redux store
export const store = createStore(reducers, applyMiddleware(thunk))
