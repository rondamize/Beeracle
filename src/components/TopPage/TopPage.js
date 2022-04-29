import classes from "./TopPage.module.css";
import SearchNameBlock from "../decorations/SearchNameBlock/SearchNameBlock";
import Top from "./Top/Top";
import ShowMore from "../ShowMore/ShowMore";

const TopPage = (props) => {
   return(
       <div className={classes.content}>
            <div className={classes.topHeader}>
                <SearchNameBlock searchName="Топ недели"/>
            </div>
            <Top />
            <ShowMore />
       </div>
   );
}
export default TopPage;


