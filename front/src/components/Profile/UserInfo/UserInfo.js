import classes from "./UserInfo.module.css";
import dots from "../../../assets/images/dots.svg"
import bell from "../../../assets/images/bell.svg"
import avatarBeginner from "../../../assets/images/avatarBeginner.svg"


const UserInfo = (props) => {

    return(
        <div className={classes.content}>
            <div className={classes.profileHeader}>
                <div className={classes.badge}>
                    <img src={avatarBeginner}/>
                </div>
                <div className={classes.profileInfo}>
                    <div className={classes.options}>
                        <div className={classes.buttonsContainer}>
                            <button className={classes.button}><img src={dots}/></button>
                            <button className={classes.button}><img src={bell}/></button>
                        </div>
                    </div>
                    <div className={classes.userData}>
                        <p className={classes.name}>@rondamize</p>
                        <p className={classes.rang}>"Начинающий гурман"</p>
                        <p className={classes.nextRangInfo}>До нового ранга осталось 15 отзывов</p>
                    </div>
                    <div className={classes.exitButtonContainer}>
                        <button className={classes.exitButton}>Выйти</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default UserInfo;
