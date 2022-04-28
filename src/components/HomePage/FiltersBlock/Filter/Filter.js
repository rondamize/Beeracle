import classes from "./Filter.module.css"
import FilterItems from "./FilterItems/FilterItems";

const Filter = (props) => {
    return(
        <div className={classes.content}>
            <div className={classes.filterName}>
                <p>Категория</p>
                <p className={classes.roll}>-</p>
            </div>
            <FilterItems />
        </div>
    );
}
export default Filter;


