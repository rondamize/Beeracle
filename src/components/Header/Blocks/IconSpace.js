import classes from '../Header.module.css'


const IconSpace = (props) => {
    return(
            <div className={classes.iconSpace}>
                <img src={props.url} />
            </div>
    );
}
export default IconSpace;


