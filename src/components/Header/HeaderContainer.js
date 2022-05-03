import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";


class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    location: state.header.location
})

export default compose(
    connect(mapStateToProps, {}),
    withRouter
)(HeaderContainer)
