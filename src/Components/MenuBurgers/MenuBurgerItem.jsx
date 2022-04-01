import React from "react";
import styles from "./MenuBurgers.module.css";
import plus from "../../Media/plus.svg"
import minus from "../../Media/minus.svg"

const MenuBurgerItem = (burgers) => {
    return (
        <>
            <div className={styles.menuBurgers}>
                <img className={styles.burgerPhoto} src={burgers.imgBurger}/>
                <p className={styles.burgerText1}>{burgers.title}</p>
                <p className={styles.burgerText2}>{burgers.titleDesc}</p>
                <p className={styles.priceBurger}>{burgers.priceBurger}</p>
                <div className={styles.btnDiv}>
                    <button className={styles.countMinus}><img src={minus} alt=""/></button>
                    <p className={styles.countBtnNumber}>1</p>
                    <button className={styles.countPlus}><img src={plus} alt=""/></button>
                </div>
                <button className={styles.btnBurgers}>В корзину</button>
            </div>

        </>
    )
}


export default MenuBurgerItem;