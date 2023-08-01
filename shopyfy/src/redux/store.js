import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';

// redux is a frontend database which has local data base and we have connect this to createStore

const reducer = combineReducers({  // reducer is what we want 
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
});

const middleware = [thunk];

const store = createStore(   // takes two arguments --> reducer and middleware
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;