import classes from './Frame.module.css'

const Frame = (props) => {
    return(
        <div className={classes.frame}>
            <div className={classes.square}></div>
        </div>
    );
}
export default Frame;


