import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {authorisationThunkCreator, logoutThunkCreator} from "../../redux/authReducer";
import Profile from "./Profile";


class HeaderContainer extends React.Component {
    // componentDidMount() {
    //    this.props.authorisationThunkCreator();
    // }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    location: state.header.location,
    userName: state.auth.userName,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {logoutThunkCreator})
)(HeaderContainer)
