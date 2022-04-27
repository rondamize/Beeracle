import classes from './AllBeer.module.css'
import BeerItem from "./BeerItem/BeerItem";
const AllBeer = (props) => {
    return(
        <div className={classes.content}>
            <BeerItem />
            <BeerItem />
            <BeerItem />
            <BeerItem />
            <BeerItem />
            <BeerItem />
        </div>
    );
}
export default AllBeer;


