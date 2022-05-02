import classes from "./Favourites.module.css";
import BeerItem from "../../HomePage/SearchResults/AllBeer/BeerItem/BeerItem";

const Favourites = (props) => {
   return(
       <div className={classes.content}>
           <BeerItem forTop={true}/>
           <BeerItem forTop={true}/>
           <BeerItem forTop={true}/>
           <BeerItem forTop={true}/>
           <BeerItem forTop={true}/>
           <BeerItem forTop={true}/>
           <BeerItem forTop={true}/>
           <BeerItem forTop={true}/>
       </div>
   );
}
export default Favourites;


