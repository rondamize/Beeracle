import classes from './SearchResults.module.css'
import CategoriesSeparator from "../../decorations/CategoriesSeparator/CategoriesSeparator";
import ShowMore from "../../ShowMore/ShowMore";
import AllBeerContainer from "./AllBeer/AllBeerContainer";
const SearchResults = (props) => {
    return(
        <div className={classes.content}>
            <CategoriesSeparator />
            <AllBeerContainer />
            <ShowMore />
        </div>
    );
}
export default SearchResults;


