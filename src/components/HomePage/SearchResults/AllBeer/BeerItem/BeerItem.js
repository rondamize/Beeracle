import classes from './BeerItem.module.css'
import heart from "../../../../../assets/images/heart.svg"
import rateStar from "../../../../../assets/images/rateStar.svg"
import cIsForCookie from "../../../../../assets/images/beer/cIsForCookie.svg"
import arrow from "../../../../../assets/images/arrow.svg"
import classNames from 'classnames'

const BeerItem = (props) => {
    // debugger;
    return(
        <div className={props.forTop ? classes.forTop : classes.content}>
            <div className={classes.topPannel}>
                <div className={classes.rating}>
                    <p className={classes.rateNumber}>{props.rating}</p>
                    <img src={rateStar}/>
                </div>
                <img src={heart}/>
            </div>
            <div className={classes.photo}>
                <img src={props.picture} />
            </div>
            <div className={classes.bottomPannel}>
                <div className={classes.beerData}>
                    <p className={classes.name}>{props.name}</p>
                    <p className={classes.abv}>{props.abv}</p>
                </div>
                <img src={arrow}/>
            </div>
        </div>
    );
}
export default BeerItem;


