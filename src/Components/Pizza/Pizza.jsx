import React from 'react';
import PizzaItems from './PizzaItems';
import { pizza } from '../../constant';
import styles from "./Pizza.module.css"


const Pizza = () => {
    return (
        <div className="pizzaMenu" style={{flexWrap: "wrap", display: "flex", gap:"32px", margin:"0 224px 0 224px"}}>
            {
                pizza.map((item,id)=>{
                    return(
                        <PizzaItems
                        imgPizza={item.imgPizza}
                        title={item.title}
                        titleDesc={item.titleDesc}
                        pricePizza={item.pricePizza}
                        plus={item.plus}
                        count={item.count}
                        minus={item.minus}
                        button={item.button}
                        />
                    )
                })
            }
            <div className="btnShowMore">
                <button className={styles.showMore} >Показать еще</button>
            </div>
        </div>
    )
}
export default Pizza;