import classes from './Header.module.css'
import star from '../../assets/images/star.svg'
import heart from '../../assets/images/heart.svg'
import goldenBadge from '../../assets/images/goldenBadge.svg'

const Header = (props) => {
    return(
        <div className={classes.header}>
            <div className={classes.logo}>
                <h1>Beeracle</h1>
            </div>
            <div className={classes.space}></div>
            <div className={classes.iconSpace}>
                <img src={star} />
            </div>
            <div className={classes.iconSpace}>
                <img src={heart} />
            </div>
            <div className={classes.iconSpace}>
                <img src={goldenBadge} />
            </div>
        </div>
    );
}
export default Header;


