import auth from "features/Auth/reducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { STORAGE } from '../utils/storage';
import API from 'api/api';
import users from '../features/Account/Users/reducer';
import posts from '../features/Account/Posts/reducer';
import userProfile from '../features/Account/Users/components/UserInfo/reducer';
import profile from '../features/Account/Profile/reducer';

const reducers = combineReducers({
    auth,
    profile,
    users,
    posts,
    userProfile
});

export type RootState = ReturnType<typeof reducers>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

let authToken = STORAGE.getItem('token') || null;

store.subscribe(() => {
    const state = store.getState()
    const newToken = state.auth.token;

    API.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;

    if (authToken !== newToken) {
        if (newToken !== null) {
            STORAGE.setItem('token', newToken)
        } else {
            STORAGE.removeItem('token')
        }
        API.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
        authToken = newToken;
    }

})

export default store;