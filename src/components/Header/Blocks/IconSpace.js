import classes from '../Header.module.css'
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import { Icon } from '@iconify/react';


const IconSpace = (props) => {
    return(
            <div className={props.active ? classNames(classes.iconSpace, classes.activeIconSpace) : classes.iconSpace}>
                <NavLink to={props.path}><img src={props.active ? props.urlActive : props.url} /></NavLink>
                {/*<NavLink to={props.path}><Icon icon="bytesize:heart" color="white"/></NavLink>*/}
            </div>
    );
}
export default IconSpace;


