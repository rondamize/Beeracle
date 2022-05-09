import classes from '../Header.module.css'
import {NavLink} from "react-router-dom";

const Logo = (props) => {
    return(
        <div className={classes.logo}>
            <NavLink to='/home'>
                <h1>Beeracle</h1>
            </NavLink>
        </div>
    );
}
export default Logo;


