import classes from "./FiltersBlock.module.css";
import Filter from "./Filter/Filter";
import BeerItem from "../SearchResults/AllBeer/BeerItem/BeerItem";
import {handleOpeningActionCreator} from "../../../redux/FiltersReducer";

const FiltersBlock = (props) => {
    // debugger;
    let filterElements = props.filters.map(f => <Filter type={f.type} name={f.name} id={f.id}
                                                        open={f.open} listItems={f.listItems != null ? f.listItems : null}
                                                        sliderOptions={f.sliderOptions != null ? f.sliderOptions : null}
                                                        handleOpening={props.handleOpeningActionCreator}
                                            />);
    return(
        <div className={classes.content}>
            {/*<Filter type="list" name="Категория"/>*/}
            {/*<Filter type="slider" name="Горечь"/>*/}
            {filterElements}
        </div>
    );
}
export default FiltersBlock;


