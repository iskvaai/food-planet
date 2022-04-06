import React from "react";
import styles from "./MenuBurgers.module.css";

const MenuBurgerItem = (burgers) => {
    return (
        <>
            <div className={styles.menuBurgers}>
                <img className={styles.burgerPhoto } src={burgers.imgBurger}/>
                <p className={styles.burgerText1}>{burgers.title}</p>
                <p className={styles.burgerText2 }>{burgers.titleDesc}</p>
                <p className={styles.priceBurger}>{burgers.priceBurger}</p>
                {/*<button>В корзину</button>*/}
            </div>

        </>
    )
}


export default MenuBurgerItem;