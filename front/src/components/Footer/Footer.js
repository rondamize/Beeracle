import classes from '../Header/Header.module.css'
import Logo from "../Header/Blocks/Logo";

const Footer = (props) => {
    return(
        <div className={classes.footer}>
            <Logo />
        </div>
    );
}
export default Footer;


