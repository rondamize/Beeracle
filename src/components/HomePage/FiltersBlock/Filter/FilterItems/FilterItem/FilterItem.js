import classes from "./FilterItem.module.css"

const FilterItem = (props) => {
    return(
        <div className={classes.content}>
            <div className={classes.section}>
                <p className={classes.name}>{props.name}</p>
                <div className={classes.input}>
                    <input className={classes.customCheckbox} id={`cb${props.id}`} type="checkbox"/>
                    <label className={classes.customCheckboxLabel} htmlFor={`cb${props.id}`}></label>
                </div>
            </div>
        </div>
    );
}
export default FilterItem;


