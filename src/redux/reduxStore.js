import {applyMiddleware, combineReducers, createStore} from "redux";
import topPageReducer from "./topPageReducer";
// import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    // homePageReducer: homePageReducer,
    topPage: topPageReducer,
    // favouritesPageReducer: favouritesPageReducer
});

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
let store = createStore(reducers);

window.store = store;
export default store;