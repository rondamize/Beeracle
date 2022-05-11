import {TopPageApi} from "../api/api";

const SET_TOP_PAGE = 'SET_TOP_PAGE';

let initialState = {
    beerTop: [
        {_id:1, name: 'C Is For Cookie', rating: '4.5', abv: '8.5% ABV', description: "description1" },
        {_id:2, name: 'Sabotage', rating: '4.4', abv: '6.5% ABV', description: "description2"},
        {_id:3, name: 'Solid bite', rating: '4.3', abv: '4% ABV', description: "description3"},
    ],
};

//в качестве state передаем profilePage
const topPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOP_PAGE: {
            return {
                ...state,
                beerTop: action.beerTop
            };
        }

        default:
            return state;
    };
};

export default topPageReducer;

export const setTopPage = (beerTop) => ({type: SET_TOP_PAGE, beerTop: beerTop});

export const getTopBeerThunkCreator = () => {
    return (dispatch) => {
        TopPageApi.getTopBeer()
            .then(data => {
                dispatch(setTopPage(data));
            })
    }
}
