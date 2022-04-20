import React from "react";
import styles from "./Comments.module.css"
import pen from  "../../Media/Pen comment.svg"
import pencil from "../../Media/pencil.svg"

const CommentsItem = (comments) => {
    return (
<<<<<<< HEAD
=======
        
>>>>>>> origin/aidana
        <div className={styles.commentsBlock}>
            <img src={pencil} alt=""/>
            <img className={styles.imgCommentator} src={comments.img} />
            <p className={styles.commentator}>{comments.name} <img src={pen} alt=""/></p>
            <p className={styles.commentatorsText}>{comments.titleDesc}</p>
<<<<<<< HEAD
            <data className={styles.commentatorData}>{comments.data}</data>
        </div>
=======
            <p className={styles.commentatorData}>{comments.data}</p>
        </div>
        
>>>>>>> origin/aidana
    )
}
export default CommentsItem;