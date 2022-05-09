import classes from './AllBeer.module.css'
import BeerItem from "./BeerItem/BeerItem";
const AllBeer = (props) => {
    let beerElements = props.allBeer.map(b => <BeerItem picture={b.photo} isFavourite={b.isFavourite}
                                                        name={b.name} abv={b.abv} rating={b.rating}/>);
    return(
        <div className={classes.content}>
            {beerElements}
        </div>
    );
}
export default AllBeer;


