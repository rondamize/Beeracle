import HomePageHeader from "./HomePageHeader/HomePageHeader";
import FiltersBlock from "./FiltersBlock/FiltersBlock";
import SearchResults from "./SearchResults/SearchResults";
import classes from "./HomePage.module.css";
import FiltersBlockContainer from "./FiltersBlock/FiltersBlockContainer";

const HomePage = (props) => {
   return(
       <div>
          <HomePageHeader />
          <div className={classes.content}>
              <FiltersBlockContainer />
              <SearchResults />
          </div>
       </div>
   );
}
export default HomePage;


