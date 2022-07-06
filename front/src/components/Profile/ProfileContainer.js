import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {authorisationThunkCreator, logoutThunkCreator} from "../../redux/authReducer";
import Profile from "./Profile";
import {getBeerShelfThunkCreator} from "../../redux/profileReducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
       this.props.getBeerShelfThunkCreator();
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    location: state.header.location,
    userName: state.auth.userName,
    isAuth: state.auth.isAuth,
    beerShelf: state.profile.beerShelf
})

export default compose(
    connect(mapStateToProps, {logoutThunkCreator, getBeerShelfThunkCreator})
)(ProfileContainer)
