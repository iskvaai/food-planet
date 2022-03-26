import React from "react";
import styles from "./MenuBurgers.module.css"
import burger1 from "../../Media/image/burger1.png"
import burger2 from "../../Media/image/burger2.png"
import burger3 from "../../Media/image/burger3.png"
import burger4 from "../../Media/image/burger4.png"

const MenuBurgers = () => {
    return (
        <div className={styles.MenuBurgers}>
            <div className={styles.tofuBurger}>
                <img src={burger1} className={styles.burger1Photo}/>
                <p className={styles.tofuBurgerText1}>Чизбургер</p>
                <p className={styles.tofuBurgerText2}>Булка, котлета,сыр, соленый огурец, лук, помидор,
                    салат айсберг,
                    соус чесночный, соус гриль,
                    кетчуп, майонез</p>
                <p className={styles.priceBurger}>200  сом</p>
                <button className={styles.btnBurgers}>В корзину</button>
            </div>
            <div className={styles.tofuBurger}>
                <img src={burger2} className={styles.burger2Photo}/>

            </div>
            <div className={styles.tofuBurger}>
                <img src={burger3} className={styles.burger3Photo}/>

            </div>

            <div className={styles.tofuBurger}>
                <img src={burger4} className={styles.burger4Photo}/>

            </div>


        </div>
    )
}

export default MenuBurgers;