import {applyMiddleware, combineReducers, createStore} from "redux";
import topPageReducer from "./topPageReducer";
import headerReducer from "./HeaderReducer";
import favouritesPageReducer from "./favouritesPageReducer";
import allBeerReducer from "./allBeerReducer";
import thunkMiddleware from "redux-thunk";
import beerCardReducer from "./BeerCardReducer";
import authReducer from "./authReducer";
import filtersReducer from "./FiltersReducer";


let reducers = combineReducers({
    topPage: topPageReducer,
    header: headerReducer,
    favouritesPage: favouritesPageReducer,
    allBeer: allBeerReducer,
    beerCard: beerCardReducer,
    auth: authReducer,
    filters: filtersReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;