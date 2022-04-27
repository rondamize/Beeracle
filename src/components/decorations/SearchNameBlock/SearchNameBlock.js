import classes from "./SearchNameBlock.module.css"
import abstractLine from "../../../assets/images/abstractLine.svg"
const SearchNameBlock = (props) => {
    return(
        <div className={classes.content}>
            <img className={classes.abstractLine} src={abstractLine}/>
            <div className={classes.searchName}>{props.searchName}</div>
        </div>
    );
}
export default SearchNameBlock;


