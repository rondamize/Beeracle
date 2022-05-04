import cIsForCookie from "../assets/images/beer/cIsForCookie.svg";
import sabotage from "../assets/images/beer/sabotage.svg";
import solidBite from "../assets/images/beer/solidBite.svg";

const ADD_POST = 'ADD_POST';

let initialState = {
    allBeer: [
        {id:1, name: 'C Is For Cookie', rating: '4.5', abv: '8.5% ABV', isFavourite: false, picture: cIsForCookie},
        {id:2, name: 'Sabotage', rating: '4.4', abv: '6.5% ABV', isFavourite: true, picture: sabotage},
        {id:3, name: 'Solid bite', rating: '4.3', abv: '4% ABV', isFavourite: false, picture: solidBite},
        {id:4, name: 'Solid bite', rating: '4.3', abv: '4% ABV', isFavourite: false, picture: solidBite},
    ],

};

//в качестве state передаем profilePage
const topPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5, text: state.newPostText, likesCount: 0}],
                newPostText: ''
            };
        }

        default:
            return state;
    };
};

export default topPageReducer;

export const addPostActionCreator = (text) => ({type: ADD_POST, postMessage: text});
