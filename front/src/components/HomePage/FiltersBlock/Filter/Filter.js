import classes from "./Filter.module.css"
import FilterListItems from "./FilterItems/FilterListItems";
import SliderFilter from "../Slider/Slider";

const Filter = (props) => {

    let renderFilter = (type) => {
        switch (type) {
            case "slider": {
                return <SliderFilter />
            }
            case "list":{
                return <FilterListItems />
            }
        }
    }
    return(
        <div className={classes.content}>
            <div className={classes.filterName}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.roll} onClick={() => {props.handleOpening(props.id)}}>{props.open ? "-" : "+"}</p>
            </div>
            <div className={props.open ? classes.filterContent : classes.hiddenContent}>
                {renderFilter(props.type)}
            </div>
        </div>
    );
}
export default Filter;


