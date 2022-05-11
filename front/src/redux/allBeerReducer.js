import {HomePageApi} from "../api/api";

const SET_HOME_PAGE = 'SET_HOME_PAGE';

let initialState = {
    // allBeer: [
    //     {id:1, name: 'C Is For Cookie', rating: '4.5', abv: '8.5% ABV', isFavourite: false, picture: cIsForCookie},
    //     {id:2, name: 'Sabotage', rating: '4.4', abv: '6.5% ABV', isFavourite: true, picture: sabotage},
    //     {id:3, name: 'Solid bite', rating: '4.3', abv: '4% ABV', isFavourite: false, picture: solidBite},
    //     {id:4, name: 'Solid bite', rating: '4.3', abv: '4% ABV', isFavourite: false, picture: solidBite},
    // ],
    allBeer: [
        {_id:1, name: 'C Is For Cookie', rating: '4.5', abv: '8.5% ABV', description: "description1" },
        {_id:2, name: 'Sabotage', rating: '4.4', abv: '6.5% ABV', description: "description2"},
        {_id:3, name: 'Solid bite', rating: '4.3', abv: '4% ABV', description: "description3"},
    ],

};

const allBeerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOME_PAGE: {
            // debugger;
            return {
                ...state,
                allBeer: action.allBeer
            };
        }

        default:
            return state;
    };
};

export default allBeerReducer;

export const setHomePage = (allBeer) => ({type: SET_HOME_PAGE, allBeer: allBeer});

export const getAllBeerThunkCreator = () => {
    return (dispatch) => {
        HomePageApi.getAllBeer()
            .then(data => {
                dispatch(setHomePage(data));
                // debugger;
            })
    }
}
