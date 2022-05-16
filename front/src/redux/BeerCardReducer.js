import {BeerCardApi} from "../api/api";

const SET_BEER_CARD = 'SET_BEER_CARD';

let initialState = {
    currentBeer: {
        _id: "1",
        name: 'C Is For Cookie',
        rating: '4.5',
        abv: '8.5% ABV',
        description: "description1",
        reviews: []
    }

};

//в качестве state передаем profilePage
const beerCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BEER_CARD: {
            return {
                ...state,
                currentBeer: {
                    ...state.currentBeer,
                    _id: action.beerData._id,
                    name: action.beerData.name,
                    rating: action.beerData.rating,
                    abv: action.beerData.abv,
                    description: action.beerData.description,
                    category: action.beerData.category,
                    photo: action.beerData.photo
                }
            };
        }

        default:
            return state;
    };
};

export default beerCardReducer;

export const setBeerCard = (beerData, comments) => ({type: SET_BEER_CARD, beerData: beerData, comments: comments});

export const getCurrentBeerThunkCreator = (id) => {
    // debugger;
    return (dispatch) => {
        BeerCardApi.getCurrentBeer(id)
            .then(data => {
                // debugger;
                dispatch(setBeerCard(data.beer, data.comments));
                //dispatch set comments
            })
    }
}