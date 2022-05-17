import React from "react";
import BeerCard from "./BeerCard";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";
import {getCurrentBeerThunkCreator} from "../../redux/BeerCardReducer";


class BeerCardContainer extends React.Component {

    componentDidMount() {
        // alert("did mount")
        let id = this.props.router.params.beerId;
        // debugger;
        // if (!id) {
        //     id = "6277f15899e93da4899873f2";
        // }
        this.props.getCurrentBeerThunkCreator(id);
        // debugger;
    }

    render() {
        return (
            <BeerCard {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    currentBeer: state.beerCard.currentBeer,
})

export default compose(
    connect(mapStateToProps, {getCurrentBeerThunkCreator}),
    withRouter
)(BeerCardContainer)
