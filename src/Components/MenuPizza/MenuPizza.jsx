import React from "react";
import MenuPizzaItem from "./MenuPizzaItem";
import {pizza} from "../../constant";
import styles from "./MenuPizza.module.css"

const MenuPizza = () => {
    return (
        <>
            {
               pizza.map((item, index) => {
                    return <MenuPizzaItem
                        key={index}
                        imgPizza={item.imgPizza}
                        title={item.title}
                        titleDesc={item.titleDesc}
                        pricePizza={item.pricePizza}

                    />

                })
            }
            <button className={styles.btnFood}>ПОКАЗАТЬ ЕЩЁ</button>
        </>
    )
}

export default MenuPizza;