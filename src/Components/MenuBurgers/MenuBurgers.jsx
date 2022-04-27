import React from "react";
import MenuBurgerItem from "./MenuBurgerItem";
import {burger} from "../../constant";
import styles from "./MenuBurgers.module.css";
import {BASE_URL} from "../../constant"

const MenuBurgers = () => {


    return (
        <div style={{marginLeft:"224px"}}>
            {
                burger.map((item, index) => {
                    return <MenuBurgerItem
                        key={index}
                        imgBurger={item.imgBurger}
                        title={item.title}
                        titleDesc={item.titleDesc}
                        priceBurger={item.priceBurger}


                    />

                })
            }
        </div>

    )
}

export default MenuBurgers;