import classes from "./FavouritesPage.module.css";
import Favourites from "./Favourites/Favourites";
import ShowMore from "../ShowMore/ShowMore";
import abstractLine from "../../assets/images/abstractLine.svg";
import upArrow from "../../assets/images/upArrow.svg";

const FavouritesPage = (props) => {
   return(
       <div className={classes.content}>
            <div className={classes.topHeader}>
                <img className={classes.abstractLine} src={abstractLine}/>
                <div className={classes.searchName}>Избранное</div>
            </div>
            <Favourites />
            {/*<ShowMore />*/}
            <div className={classes.grid}>
               <div></div>
               <div className={classes.imgContainer}>
                   <img src={upArrow}/>
               </div>
            </div>
       </div>
   );
}
export default FavouritesPage;


