import classes from "./Profile.module.css";
import UserInfo from "./UserInfo/UserInfo";
import BeerShelf from "./BeerShelf/BeerShelf";


const Profile = (props) => {

    return(
        <div className={classes.content}>
            <UserInfo />
            <BeerShelf />
        </div>
    );
}
export default Profile;
