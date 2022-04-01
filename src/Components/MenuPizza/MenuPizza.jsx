import React from "react";
import MenuPizzaItem from "./MenuPizzaItem";
import {pizza} from "../../constant";

const MenuPizza = () => {
    return (
        <div>
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
        </div>
    )
}

export default MenuPizza;