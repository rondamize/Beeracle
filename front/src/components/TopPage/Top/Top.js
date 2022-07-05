import classes from "./Top.module.css";
import BeerItem from "../../HomePage/SearchResults/AllBeer/BeerItem/BeerItem";

const Top = (props) => {
   let beerElements = props.beerTop.map(b => <BeerItem id={b._id} picture={b.photo} name={b.name}
                                                       abv={b.abv} rating={b.rating} forTop={true}/>);
   return(
       <div className={classes.content}>
           {beerElements}
       </div>
   );
}
export default Top;


