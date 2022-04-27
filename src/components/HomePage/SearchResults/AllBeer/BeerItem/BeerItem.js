import classes from './BeerItem.module.css'
import heart from "../../../../../assets/images/heart.svg"
import rateStar from "../../../../../assets/images/rateStar.svg"
import cIsForCookie from "../../../../../assets/images/beer/cIsForCookie.svg"
import arrow from "../../../../../assets/images/arrow.svg"

const BeerItem = (props) => {
    return(
        <div className={classes.content}>
            <div className={classes.topPannel}>
                <div className={classes.rating}>
                    <p className={classes.rateNumber}>4.5</p>
                    <img src={rateStar}/>
                </div>
                <img src={heart}/>
            </div>
            <div className={classes.photo}>
                <img src={cIsForCookie} />
            </div>
            <div className={classes.bottomPannel}>
                <div className={classes.beerData}>
                    <p className={classes.name}>C IS FOR COOKIE</p>
                    <p className={classes.abv}>8.5% ABV</p>
                </div>
                <img src={arrow}/>
            </div>
        </div>
    );
}
export default BeerItem;


