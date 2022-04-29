import classes from '../Header.module.css'
import {NavLink} from "react-router-dom";


const IconSpace = (props) => {
    return(
            <div className={classes.iconSpace}>
                <NavLink to={props.path}><img src={props.url} /></NavLink>
            </div>
    );
}
export default IconSpace;


