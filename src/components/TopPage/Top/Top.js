import classes from "./Top.module.css";
import BeerItem from "../../HomePage/SearchResults/AllBeer/BeerItem/BeerItem";

const Top = (props) => {
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
export default Top;


