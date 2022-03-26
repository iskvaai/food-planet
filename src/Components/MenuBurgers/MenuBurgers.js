import React from "react";
import MenuBurgerItem from "./MenuBurgerItem";
import {burger} from "../../constant";
import styles from "./MenuBurgers.module.css";
import  "../../Media/image/burger1.png"
import "../../Media/image/burger2.png"
import "../../Media/image/burger3.png"
import "../../Media/image/burger4.png"



const MenuBurgers = () => {
    return (
        <div className={styles.tofuBurger}>
            {
                burger.map((item, index) => {
                    console.log(burger)
                    return <MenuBurgerItem
                        key={index}
                       imgBurger={item.imgBurger}
                        title={item.title}
                        titleDesc={item.titleDesc}
                        priceBurger={item.priceBurger}
                        count={item.count}
                        btn={item.btn}

                    />

                })
            }
        </div>

    )
}

export default MenuBurgers;