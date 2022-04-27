import classes from "./ShowMore.module.css";
import upArrow from "../../assets/images/upArrow.svg";

const ShowMore = (props) => {
   return(
       <div className={classes.content}>
           <div className={classes.showMore}>
               <p>ПОКАЗАТЬ ЕЩЕ</p>
           </div>
           <div className={classes.imgContainer}>
               <img src={upArrow}/>
           </div>
       </div>
   );
}
export default ShowMore;


