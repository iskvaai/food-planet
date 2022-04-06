import React from "react";
import {commentary} from "../../constant";
import CommentsItem from "./CommentsItem";
import styles from "./Comments.module.css"

const Comments = () => {
    return (
        <>
            <h1 className={styles.reviews}>Отзывы</h1>
            {
                commentary.map((item, index) => {
                    return <CommentsItem
                        key={index}
                        img={item.img}
                        name={item.name}
                        titleDesc={item.titleDesc}
                        data={item.data}

                    />
                })
            }
        </>
    )
}

export default Comments;