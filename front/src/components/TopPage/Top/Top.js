import classes from "./Top.module.css";
import BeerItem from "../../HomePage/SearchResults/AllBeer/BeerItem/BeerItem";

const Top = (props) => {
   let beerElements = props.beerTop.map(b => <BeerItem picture={b.picture} isFavourite={b.isFavourite}
                                                name={b.name} abv={b.abv} rating={b.rating}/>);
   return(
       <div className={classes.content}>
           {beerElements}
       </div>
   );
}
export default Top;


