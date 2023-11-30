import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { customerProductReducer } from './Product/Reducer';
import { cartReducer } from './Cart/Reducer';

const rootReducers = combineReducers({
    product: customerProductReducer,
    cart: cartReducer,
});
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
