import React from "react";
import minus from "../../Media/minus.svg";
import plus from "../../Media/plus.svg";
import styles from "./MenuPizza.module.css"

const MenuPizzaItem = (pizza) => {
    return (
        <>
            <div className={styles.menuPizza}>
                <img className={styles.pizzaPhoto} src={pizza.imgPizza}/>
                <p className={styles.pizzaText1}>{pizza.title}</p>
                <p className={styles.pizzaText2}>{pizza.titleDesc}</p>
                <p className={styles.pricePizza}>{pizza.pricePizza}</p>
                <div className={styles.btnDiv}>
                    <button className={styles.countMinus}><img src={minus} alt=""/></button>
                    <p className={styles.countBtnNumber}>1</p>
                    <button className={styles.countPlus}><img src={plus} alt=""/></button>
                </div>
                <button className={styles.btnPizza}>В корзину</button>
            </div>

        </>
    )
}
export default MenuPizzaItem;