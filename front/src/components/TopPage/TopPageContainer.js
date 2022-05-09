import React from "react";
import TopPage from "./TopPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";
import {changeLocationActionCreator} from "../../redux/HeaderReducer";


class TopPageContainer extends React.Component {

    componentDidMount() {
        this.props.changeLocationActionCreator(this.props.router.location.pathname);
        // debugger;
    }

    render() {
        return (
            <TopPage {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    beerTop: state.topPage.beerTop,
})

export default compose(
    connect(mapStateToProps, {changeLocationActionCreator}),
    withRouter
)(TopPageContainer)
