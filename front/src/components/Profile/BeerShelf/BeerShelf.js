import classes from "./BeerShelf.module.css";
import abstractLine from "../../../assets/images/abstractLine.svg";
import ShelfItem from "./ShelfItem/ShelfItem";

const BeerShelf = (props) => {

    return(
        <div className={classes.content}>
            <div className={classes.header}>
                <img className={classes.abstractLine} src={abstractLine}/>
                <div className={classes.searchName}>Пивная полка</div>
            </div>
            <div className={classes.shelfStore}>
                <div className={classes.shelf}>
                    <ShelfItem />
                    <ShelfItem />
                    <ShelfItem />
                    <ShelfItem />
                </div>
                <div className={classes.shelf}>
                    <ShelfItem />
                    <ShelfItem />
                    <ShelfItem />
                </div>
            </div>
        </div>
    );
}
export default BeerShelf;
