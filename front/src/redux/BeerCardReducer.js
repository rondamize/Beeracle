import {BeerCardApi} from "../api/api";

const SET_BEER_CARD = 'SET_BEER_CARD';
const UPDATE_COMMENTS = 'UPDATE_COMMENTS';

let initialState = {
    currentBeer: {
        _id: "1",
        name: 'C Is For Cookie',
        rating: '4.5',
        abv: '8.5% ABV',
        description: "description1",
        brewery: "",
        reviews: [{userName: null, text: null, likes: 0, dislikes: 0}]
    }

};

//в качестве state передаем profilePage
const beerCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BEER_CARD: {
            // debugger;
            return {
                ...state,
                currentBeer: {
                    ...state.currentBeer,
                    _id: action.beerData._id,
                    name: action.beerData.name,
                    rating: action.beerData.rating,
                    abv: action.beerData.abv,
                    description: action.beerData.description,
                    brewery: action.beerData.brewery,
                    category: action.beerData.category,
                    photo: action.beerData.photo,
                    reviews: action.reviews
                }
            };
        }
        case UPDATE_COMMENTS: {
            return {
                ...state,
                currentBeer: {
                    ...state.currentBeer,
                    reviews: action.reviews.length > 0 ? action.reviews : [...state.currentBeer.reviews]
                }
            };
        }

        default:
            return state;
    };
};

export default beerCardReducer;

export const setBeerCard = (beerData, reviews) => ({type: SET_BEER_CARD, beerData: beerData, reviews: reviews});

export const updateComments = (reviews) => ({type: UPDATE_COMMENTS, reviews: reviews});

export const getCurrentBeerThunkCreator = (id) => {
    return (dispatch) => {
        BeerCardApi.getCurrentBeer(id)
            .then(data => {
                dispatch(setBeerCard(data.beer, data.reviews));
            })
    }
}

export const updateCommentsThunkCreator = (beerId) => {
    return (dispatch) => {
        BeerCardApi.getComments(beerId)
            .then(data => {
                // debugger;
                dispatch(updateComments(data));
            })
    }
}

export const submitReviewThunkCreator = (beerID, userID, rating, text) => {
    return (dispatch) => {
        BeerCardApi.submitReview(beerID, userID, rating, text)
            .then(() => {
                BeerCardApi.getComments(beerID)
                    .then(data => dispatch(updateComments(data)))})
    }
}