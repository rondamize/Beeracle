import HomePageHeader from "./HomePageHeader/HomePageHeader";
import FiltersBlock from "./FiltersBlock/FiltersBlock";
import SearchResults from "./SearchResults/SearchResults";
import classes from "./HomePage.module.css";

const HomePage = (props) => {
   return(
       <div>
          <HomePageHeader />
          <div className={classes.content}>
             <FiltersBlock />
             <SearchResults />
          </div>
       </div>
   );
}
export default HomePage;


