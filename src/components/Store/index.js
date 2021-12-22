import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import Products from './Products';


let reducers = combineReducers({
    Products: Products
})

const store = () => 
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))


export default store();