import classes from "./TopPage.module.css";
import Top from "./Top/Top";
import ShowMore from "../ShowMore/ShowMore";
import abstractLine from "../../assets/images/abstractLine.svg";

const TopPage = (props) => {
   return(
       <div className={classes.content}>
            <div className={classes.topHeader}>
                <img className={classes.abstractLine} src={abstractLine}/>
                <div className={classes.searchName}>Топ недели</div>
            </div>
            <div className={classes.top}><Top beerTop={props.beerTop}/></div>
            <div classname={classes.showMore}><ShowMore /></div>
       </div>
   );
}
export default TopPage;


