import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {handleOpeningActionCreator} from "../../../redux/FiltersReducer";
import FiltersBlock from "./FiltersBlock";


class FiltersBlockContainer extends React.Component {

    componentDidMount() {
        // this.props.changeLocationActionCreator(this.props.router.location.pathname);
        // this.props.getAllBeerThunkCreator();
    }

    render() {
        // debugger;
        return (
            <FiltersBlock {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    filters: state.filters.filters,
})

export default compose(
    connect(mapStateToProps, {handleOpeningActionCreator})
)(FiltersBlockContainer)
