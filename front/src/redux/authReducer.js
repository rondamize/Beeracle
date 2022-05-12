import {AuthApi} from "../api/api";

const SET_AUTHORISED_USER_DATA = 'SET_AUTHORISED_USER_DATA';

let initialState = {
    id: null,
    userName: null,
    email: null,
    isAuth: false,
    isFetching: false
};

//в качестве state передаем dialogsPage
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTHORISED_USER_DATA: {
            // debugger;
            return {
                ...state,
                isAuth: action.isAuth,
                ...action.authUserData
            }
        }
        default:
            return state;
    };
};

export default authReducer;

export const setAuthorisedUserData = (id, userName, email, isAuth) => ({type: SET_AUTHORISED_USER_DATA, authUserData: {id, userName, email, isAuth}});

export const authorisationThunkCreator = () => {
    return (dispatch) => {
        AuthApi.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let id = data.data._id;
                    let userName = data.data.userName;
                    let email = data.data.email;
                    dispatch(setAuthorisedUserData(id, userName, email, true));
                }
            })
    }
}

export const loginThunkCreator = (email, password) => {
    return (dispatch) => {
        AuthApi.login(email, password)
            .then(data => {
                // debugger;
                if (data.resultCode === 0) {
                    let id = data.data._id;
                    let userName = data.data.userName;
                    let email = data.data.email;
                    // debugger;
                    dispatch(setAuthorisedUserData(id, userName, email, true));
                }
            })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        AuthApi.logout()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthorisedUserData(null, null, null, false));
                }
            })
    }
}