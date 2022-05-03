import {applyMiddleware, combineReducers, createStore} from "redux";
import topPageReducer from "./topPageReducer";
import headerReducer from "./HeaderReducer";
// import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    topPage: topPageReducer,
    header: headerReducer
});

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
let store = createStore(reducers);

window.store = store;
export default store;