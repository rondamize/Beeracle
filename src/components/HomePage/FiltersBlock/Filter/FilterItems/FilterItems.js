import classes from "./FilterItems.module.css"
import FilterItem from "./FilterItem/FilterItem";

const FilterItems = (props) => {
    return(
        <div className={classes.content}>
            <FilterItem id={1} name={"Ipa"}/>
            <FilterItem id={2} name={"Стаут"}/>
            <FilterItem id={3} name={"Эль"}/>
        </div>
    );
}
export default FilterItems;


