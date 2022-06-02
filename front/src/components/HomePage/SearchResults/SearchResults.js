import classes from './SearchResults.module.css'
import CategoriesSeparator from "../../decorations/CategoriesSeparator/CategoriesSeparator";
import ShowMore from "../../ShowMore/ShowMore";
import AllBeerContainer from "./AllBeer/AllBeerContainer";
const SearchResults = (props) => {
    return(
        <div className={classes.content}>
            <CategoriesSeparator />
            <AllBeerContainer />
            <div className={classes.showMore}>
                <ShowMore />
            </div>
        </div>
    );
}
export default SearchResults;


