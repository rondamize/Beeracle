import classes from "./FiltersBlock.module.css";
import Filter from "./Filter/Filter";

const FiltersBlock = (props) => {
    return(
        <div className={classes.content}>
           <Filter />
        </div>
    );
}
export default FiltersBlock;


