import classes from "./Favourites.module.css";
import BeerItem from "../../HomePage/SearchResults/AllBeer/BeerItem/BeerItem";

const Favourites = (props) => {
   let beerElements = props.favourites.map(b => <BeerItem picture={b.picture} isFavourite={b.isFavourite}
                                                        name={b.name} abv={b.abv} rating={b.rating}/>);
   return(
       <div className={classes.content}>
           {beerElements}
       </div>
   );
}
export default Favourites;


