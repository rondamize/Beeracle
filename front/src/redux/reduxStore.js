import {applyMiddleware, combineReducers, createStore} from "redux";
import topPageReducer from "./topPageReducer";
import headerReducer from "./HeaderReducer";
import favouritesPageReducer from "./favouritesPageReducer";
import allBeerReducer from "./allBeerReducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    topPage: topPageReducer,
    header: headerReducer,
    favouritesPage: favouritesPageReducer,
    allBeer: allBeerReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;