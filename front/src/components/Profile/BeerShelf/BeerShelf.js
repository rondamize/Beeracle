import classes from "./BeerShelf.module.css";
import abstractLine from "../../../assets/images/abstractLine.svg";
import ShelfItem from "./ShelfItem/ShelfItem";
import beer1 from "../../../assets/images/beer/sabotage.svg";
import beer2 from "../../../assets/images/beer/cIsForCookie.svg";
import beer3 from "../../../assets/images/beer/Empatia.svg";
import beer4 from "../../../assets/images/beer/ridersOnTheStorm.svg";
import beer5 from "../../../assets/images/beer/vbros.svg";
import beer6 from "../../../assets/images/beer/nobodyDipa.svg";

const BeerShelf = (props) => {

    return(
        <div className={classes.content}>
            <div className={classes.header}>
                <img className={classes.abstractLine} src={abstractLine}/>
                <div className={classes.searchName}>Пивная полка</div>
            </div>
            <div className={classes.shelf}>
                <div className={classes.shelfStore}>
                    <ShelfItem img={beer1} name="Sweet disaster"/>
                    <ShelfItem img={beer2} name="C is for cookie"/>
                    <ShelfItem img={beer3} name="Эмпатия"/>
                    <ShelfItem img={beer4} name="Riders on the storm"/>
                    <hr className={classes.shelfLine}/>
                    <ShelfItem img={beer5} name="Вброс [Citra]"/>
                    <ShelfItem img={beer6} name="Nobody dipa"/>
                    <hr className={classes.shelfLine}/>
                </div>
            </div>
        </div>
    );
}
export default BeerShelf;
