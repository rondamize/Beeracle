import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";
import {authorisationThunkCreator, logoutThunkCreator} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
       this.props.authorisationThunkCreator();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    location: state.header.location,
    userName: state.auth.userName,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {authorisationThunkCreator, logoutThunkCreator}),
    withRouter
)(HeaderContainer)
