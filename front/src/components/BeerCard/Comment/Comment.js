import classes from "./Comment.module.css";
import rateStar from "../../../assets/images/rateStar.svg";
import like from "../../../assets/images/like.svg";


const Comment = (props) => {
    return(
        <div className={classes.content}>
            <div className={classes.space}></div>
            <div className={classes.commentData}>
                <div className={classes.commentHeader}>
                    <p className={classes.username}>@rondamize</p>
                    <div className={classes.rating}>
                        <img className={classes.rateStar} src={rateStar} />
                        <img className={classes.rateStar} src={rateStar} />
                        <img className={classes.rateStar} src={rateStar} />
                        <img className={classes.rateStar} src={rateStar} />
                        <img className={classes.rateStar} src={rateStar} />
                    </div>
                </div>
                <div className={classes.commentBody}>
                    <p className={classes.commentText}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <div className={classes.likesSection}>
                        <div className={classes.likes}>
                            <img src={like} />
                            <p>10</p>
                        </div>
                        <div className={classes.dislikes}>
                            <img src={like} />
                            <p>5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Comment;