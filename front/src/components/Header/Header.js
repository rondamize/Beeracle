import classes from './Header.module.css'
import star from '../../assets/images/star.svg'
import starActive from '../../assets/images/StarActive.svg'
import heart from '../../assets/images/heart.svg'
import heartActive from '../../assets/images/heartActive.svg'
import goldenBadge from '../../assets/images/goldenBadge.svg'
import Logo from "./Blocks/Logo";
import IconSpace from "./Blocks/IconSpace";
import {NavLink} from "react-router-dom";


const Header = (props) => {
    // console.log(props.location);
    // console.log(props.location === '/top');
    // debugger;
    return(
        <div className={classes.header}>
            <Logo />
            <div className={classes.space}></div>
            <div className={classes.iconsBlock}>
                <NavLink to='/top'><IconSpace url={star} urlActive={starActive} path={'/top'} active={props.location === '/top'}/></NavLink>
                <NavLink to='/favourites'><IconSpace url={heart} urlActive={heartActive} path={'/favourites'} active={props.location === '/favourites'}/></NavLink>
                <NavLink to='/profile'><IconSpace url={goldenBadge} path={'/profile'}/></NavLink>
            </div>
        </div>
    );
}
export default Header;


