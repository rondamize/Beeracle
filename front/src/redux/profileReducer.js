import {ProfileApi} from "../api/api";

const UPDATE_BEER_SHELF = 'UPDATE_BEER_SHELF';

let initialState = {
    beerShelf: [
        {
            beer: null,
            usersRate: 0
        }
    ]
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_BEER_SHELF: {
            return {
                ...state,
                beerShelf: action.beerShelf
            };
        }

        default:
            return state;
    };
};

export default profileReducer;

export const updateBeerShelfActionCreator = (beerShelf) => ({type: UPDATE_BEER_SHELF, beerShelf: beerShelf});

export const getBeerShelfThunkCreator = () => {
    return (dispatch) => {
        ProfileApi.getBeerShelf()
            .then((data) => {
                dispatch(updateBeerShelfActionCreator(data.beers));
            })
    }
}