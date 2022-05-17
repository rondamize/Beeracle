import classes from "./Comment.module.css";
import rateStar from "../../../assets/images/rateStar.svg";
import like from "../../../assets/images/like.svg";


const Comment = (props) => {
    let rateStars = [];
    for (let i = 0; i < 5; i++) {
        if (i < props.review.rating) {
            rateStars.push(<img className={classes.rateStar} src={rateStar} />);
        } else {
            rateStars.push(<img className={classes.rateStarUnchecked} src={rateStar} />);
        }

    }

    return(
        <div className={classes.content}>
            <div className={classes.space}></div>
            <div className={classes.commentData}>
                <div className={classes.commentHeader}>
                    <p className={classes.username}>{`@${props.review.userName}`}</p>
                    <div className={classes.rating}>
                        {rateStars}
                    </div>
                </div>
                <div className={classes.commentBody}>
                    <p className={classes.commentText}>{props.review.text}</p>
                    <div className={classes.likesSection}>
                        <div className={classes.likes}>
                            <img src={like} />
                            <p>{props.review.likes}</p>
                        </div>
                        <div className={classes.dislikes}>
                            <img src={like} />
                            <p>{props.review.dislikes}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Comment;