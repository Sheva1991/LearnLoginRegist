import authReducer from "features/Auth/reducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
// import posts from "../features/Posts/reducer";
// import users from "../features/Users/reducer";

const reducers = combineReducers({
    auth: authReducer,
    // posts,
    // users,
});

export type RootState = ReturnType<typeof reducers>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;