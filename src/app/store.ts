import auth from "features/Auth/reducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
// import posts from "../features/Posts/reducer";
// import users from "../features/Users/reducer";
import { STORAGE } from '../utils/storage';
import API from 'api/api';

const reducers = combineReducers({
    auth,
    // posts,
    // users,
});

export type RootState = ReturnType<typeof reducers>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


store.subscribe(() => {
    const state = store.getState()
    const token = state.auth.token
    if (token !== null) {
        STORAGE.setItem('token', token)
    } else {
        STORAGE.clear()
    }
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
})

export default store;