import classes from './BeerItem.module.css'
import heart from "../../../../../assets/images/heart.svg"
import heartIsFavourite from "../../../../../assets/images/heartIsFavourite.svg"
import rateStar from "../../../../../assets/images/rateStar.svg"
import arrow from "../../../../../assets/images/arrow.svg"
import {NavLink} from "react-router-dom";

const BeerItem = (props) => {
    // debugger;
    return(
        <div className={props.forTop ? classes.forTop : classes.content}>
            <div className={classes.topPannel}>
                <div className={classes.rating}>
                    <p className={classes.rateNumber}>{props.rating}</p>
                    <img src={rateStar}/>
                </div>
                {/*<img src={props.isFavourite ? heartIsFavourite : heart}/>*/}
                {/*TODO: Change icon depending on authorised user*/}
                <img src={heart}/>
            </div>
            <div className={classes.photo}>
                <NavLink to='/beer'><img src={`http://localhost:3001${props.picture}`} /></NavLink>
            </div>
            <div className={classes.bottomPannel}>
                <div className={classes.beerData}>
                    <NavLink to='/beer'><p className={classes.name}>{props.name}</p></NavLink>
                    <p className={classes.abv}>{props.abv} ABV</p>
                </div>
                <img src={arrow}/>
            </div>
        </div>
    );
}
export default BeerItem;


