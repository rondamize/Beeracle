import React from "react";
import FavouritesPage from "./FavouritesPage";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";
import {changeLocationActionCreator} from "../../redux/HeaderReducer";


class FavouritesPageContainer extends React.Component {

    componentDidMount() {
        this.props.changeLocationActionCreator(this.props.router.location.pathname);
    }

    render() {
        return (
            <FavouritesPage {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    // beerTop: state.topPage.beerTop,
})

export default compose(
    connect(mapStateToProps, {changeLocationActionCreator}),
    withRouter
)(FavouritesPageContainer)
