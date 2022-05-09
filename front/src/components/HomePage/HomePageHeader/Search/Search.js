import classes from "./Search.module.css";
import searchButton from "../../../../assets/images/searchButton.svg"
const Search = (props) => {
    return(
        <div className={classes.searchArea}>
            <input type="text" value='ПОИСК'/>
            <img src={searchButton} />
        </div>
    );
}
export default Search;


