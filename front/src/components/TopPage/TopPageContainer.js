import React from "react";
import TopPage from "./TopPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";
import {changeLocationActionCreator} from "../../redux/HeaderReducer";
import {getTopBeerThunkCreator} from "../../redux/topPageReducer";


class TopPageContainer extends React.Component {

    componentDidMount() {
        this.props.changeLocationActionCreator(this.props.router.location.pathname);
        this.props.getTopBeerThunkCreator();
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
    connect(mapStateToProps, {changeLocationActionCreator, getTopBeerThunkCreator}),
    withRouter
)(TopPageContainer)
