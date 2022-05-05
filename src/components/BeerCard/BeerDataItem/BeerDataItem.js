import classes from "./BeerDataItem.module.css";

const BeerDataItem = (props) => {
    return(
        <div className={classes.content}>
            <p className={classes.key}>{props.keyP}:</p>
            <p className={classes.value}>{props.value}</p>
        </div>
    );

}

export default BeerDataItem;