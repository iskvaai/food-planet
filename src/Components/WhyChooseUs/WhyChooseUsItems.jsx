import React from 'react';
import styles from './WhyChooseUs.module.css'



const WhyChooseUsItems = (select) => {
    return(
            <div className={styles.choose}>
            <img className={styles.imgSelect} src={select.imgSelect}/>
            <p className={styles.chooseText1}>{select.title}</p>
            <p className={styles.chooseText2}>{select.titleDesc}</p>
            </div>
        )
}

export default WhyChooseUsItems;

