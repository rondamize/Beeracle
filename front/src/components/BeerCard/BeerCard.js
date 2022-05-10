import classes from "./BeerCard.module.css";
import rateStar from "../../assets/images/rateStar.svg"
import arrow from "../../assets/images/arrow.svg"
import heart from "../../assets/images/heart.svg"
import abstractLineBeerPage from "../../assets/images/abstractLineBeerPage.svg"
import cIsForCookieBig from "../../assets/images/beer/cIsForCookieBig.svg"
import cIsForCookieSprite from "../../assets/images/beer/cIsForCookieSprite.svg"
import Comment from "./Comment/Comment";
import BeerDataItem from "./BeerDataItem/BeerDataItem";
import ShowMore from "../ShowMore/ShowMore";


const BeerCard = (props) => {
    return(
        <div className={classes.content}>
            <div className={classes.nameRatingPannel}>
                <div className={classes.nameSection}>
                    <img className={classes.abstractLine} src={abstractLineBeerPage} />
                    <div className={classes.name}>{props.currentBeer.name}</div>
                </div>
                <div className={classes.rating}>
                    <p>{props.currentBeer.rating}</p>
                    <img src={rateStar} />
                </div>
            </div>

            <div className={classes.beerData}>
                <div className={classes.beerPhotoBlock}>
                    <img src={`http://localhost:3001${props.currentBeer.photo}`}/>
                    <div className={classes.sideSection}>
                        <div className={classes.favourite}>
                            <img src={heart}/>
                        </div>
                        <div className={classes.sprite}>
                            <img src={cIsForCookieSprite}/>
                        </div>
                    </div>
                </div>
                <div className={classes.dataList}>
                    <BeerDataItem keyP="Стиль" value="Imperial / Double"/>
                    <BeerDataItem keyP="Категория" value={props.currentBeer.category}/>
                    <BeerDataItem keyP="Хмель" value="n/a"/>
                    <BeerDataItem keyP="Пивоварня" value="4BREWERS"/>
                    <BeerDataItem keyP="Страна" value="россия"/>
                    <BeerDataItem keyP="ABV" value={`${props.currentBeer.abv}%`}/>
                </div>
            </div>

            <div className={classes.description}>
                <p>{props.currentBeer.description}</p>
            </div>

            <div className={classes.reviewHeader}>
                <div className={classes.reviewHeaderBackground}>
                    <p>Отзывы</p>
                </div>
            </div>

            <div className={classes.writeReview}>
                <p>Написать отзыв</p>
            </div>

            <div className={classes.rateStars}>
                <div className={classes.rateStarsContainer}>
                    <img className={classes.rateStar} src={rateStar} />
                    <img className={classes.rateStar} src={rateStar} />
                    <img className={classes.rateStar} src={rateStar} />
                    <img className={classes.rateStar} src={rateStar} />
                    <img className={classes.rateStar} src={rateStar} />
                </div>
            </div>
            <div className={classes.reviewInputBlock}>
                <input className={classes.reviewInput} value="НАЧНИТЕ ВВОДИТЬ ТЕКСТ..."/>
                <img src={arrow} />
            </div>
            <div className={classes.commentsSection}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
            <ShowMore />
        </div>
    );

}

export default BeerCard;