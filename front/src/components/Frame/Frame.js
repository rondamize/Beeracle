import classes from './Frame.module.css'

const Frame = (props) => {
    return(
        <div className={classes.frame}>
            <div className={classes.squareTop}></div>
            <div></div>
            <div className={classes.squareBottom}></div>
        </div>
    );
}
export default Frame;


