import classes from './WideBlock.module.css'
import SearchNameBlock from "../../../decorations/SearchNameBlock/SearchNameBlock";

const WideBlock = (props) => {
    return(
        <div className={classes.content}>
            <div></div>
            <SearchNameBlock searchName="РЕЗУЛЬТАТЫ ПОИСКА"/>
        </div>

    );
}
export default WideBlock;


