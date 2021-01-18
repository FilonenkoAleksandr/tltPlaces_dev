import {applyMiddleware, combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import itemsPageReducer from './itemsPageReducer'

let reducers = combineReducers({
    itemsPage: itemsPageReducer,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
