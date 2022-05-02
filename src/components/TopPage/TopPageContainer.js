import React from "react";
import TopPage from "./TopPage";
import {connect} from "react-redux";

class TopPageContainer extends React.Component {
    render() {
        return (
            <TopPage {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    beerTop: state.topPage.beerTop
})

export default connect(mapStateToProps, {})(TopPageContainer)