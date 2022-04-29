import classes from './Header.module.css'
import star from '../../assets/images/star.svg'
import heart from '../../assets/images/heart.svg'
import goldenBadge from '../../assets/images/goldenBadge.svg'
import Logo from "./Blocks/Logo";
import IconSpace from "./Blocks/IconSpace";


const Header = (props) => {
    return(
        <div className={classes.header}>
            <Logo />
            <div className={classes.space}></div>
            <IconSpace url={star} path={'/top'}/>
            <IconSpace url={heart} path={'/favourites'}/>
            <IconSpace url={goldenBadge} path={'/profile'}/>
        </div>
    );
}
export default Header;


