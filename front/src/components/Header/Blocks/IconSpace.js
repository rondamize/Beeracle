import classes from '../Header.module.css'
import {NavLink} from "react-router-dom";
import classNames from "classnames";


const IconSpace = (props) => {
    return(
            <div className={props.active ? classNames(classes.iconSpace, classes.activeIconSpace) : classes.iconSpace}>
                <NavLink to={props.path}><img src={props.active ? props.urlActive : props.url} /></NavLink>
                {props.userName ? <div className={classes.userName}>{props.userName}
                    <NavLink to="/home"><button onClick={() => {props.logout()}}>Выход</button></NavLink></div> : null}
            </div>
    );
}
export default IconSpace;


