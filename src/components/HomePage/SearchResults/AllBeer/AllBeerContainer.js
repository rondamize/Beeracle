import React from "react";
import AllBeer from "./AllBeer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "../../../../hoc/withRouter";
import {changeLocationActionCreator} from "../../../../redux/HeaderReducer";


class AllBeerContainer extends React.Component {

    componentDidMount() {
        this.props.changeLocationActionCreator(this.props.router.location.pathname);
    }

    render() {
        return (
            <AllBeer {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    allBeer: state.allBeer.allBeer,
})

export default compose(
    connect(mapStateToProps, {changeLocationActionCreator}),
    withRouter
)(AllBeerContainer)
