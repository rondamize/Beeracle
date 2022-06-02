import classes from "./FilterListItems.module.css"
import FilterItem from "./FilterItem/FilterItem";

const FilterListItems = (props) => {
    return(
        <div className={classes.content}>
            <FilterItem id={1} name={"Ipa"}/>
            <FilterItem id={2} name={"Стаут"}/>
            <FilterItem id={3} name={"Эль"}/>
            <FilterItem id={4} name={"Сидр"}/>
            <FilterItem id={5} name={"Портер"}/>
            <FilterItem id={6} name={"Лагер"}/>
        </div>
    );
}
export default FilterListItems;


