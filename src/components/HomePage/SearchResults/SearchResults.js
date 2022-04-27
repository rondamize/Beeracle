import classes from './SearchResults.module.css'
import CategoriesSeparator from "../../decorations/CategoriesSeparator/CategoriesSeparator";
import AllBeer from "./AllBeer/AllBeer";
import ShowMore from "../../ShowMore/ShowMore";
const SearchResults = (props) => {
    return(
        <div className={classes.content}>
            <CategoriesSeparator />
            <AllBeer />
            <ShowMore />
        </div>
    );
}
export default SearchResults;


