import classes from "./ShelfItem.module.css";
import beer from "../../../../assets/images/beer/sabotage.svg";

const ShelfItem = (props) => {

    return(
        <div className={classes.content}>
            <img className={classes.photo} src={`http://localhost:3001${props.img}`}/>
            <p className={classes.name}>{props.name}</p>
        </div>
    );
}
export default ShelfItem;
