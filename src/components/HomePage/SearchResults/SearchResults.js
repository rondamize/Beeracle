import classes from './SearchResults.module.css'
import CategoriesSeparator from "../../decorations/CategoriesSeparator/CategoriesSeparator";
import AllBeer from "./AllBeer/AllBeer";
const SearchResults = (props) => {
    return(
        <div className={classes.content}>
            <CategoriesSeparator />
            <AllBeer />
        </div>
    );
}
export default SearchResults;


