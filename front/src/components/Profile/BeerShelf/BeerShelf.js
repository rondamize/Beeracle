import classes from "./BeerShelf.module.css";
import abstractLine from "../../../assets/images/abstractLine.svg";
import ShelfItem from "./ShelfItem/ShelfItem";

const BeerShelf = (props) => {

    let beerItems = props.beerShelf.map(b => <ShelfItem img={b.photo} name={b.beerName}/>);

    let createShelf = (beerItems) => {
        let beerShelf = [];
        for (let i = 0; i < beerItems.length; i++) {
            if (i%4 === 0 && i !== 0) {
                beerShelf.push(<hr className={classes.shelfLine}/>)
            }

            beerShelf.push(beerItems[i]);

            if (i === beerItems.length - 1) {
                beerShelf.push(<hr className={classes.shelfLine}/>)
            }
        }

        return beerShelf;
    }

    return(
        <div className={classes.content}>
            <div className={classes.header}>
                <img className={classes.abstractLine} src={abstractLine}/>
                <div className={classes.searchName}>Пивная полка</div>
            </div>
            <div className={classes.shelf}>
                <div className={classes.shelfStore}>
                    {createShelf(beerItems)}
                    {/*{beerShelf}*/}
                    {/*<hr className={classes.shelfLine}/>*/}
                </div>
            </div>
        </div>
    );
}
export default BeerShelf;
