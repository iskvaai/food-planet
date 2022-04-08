import React from 'react';
import styles from "./Pizza.module.css"

 const PizzaItems = (pizza) =>{
    return(
        <>
        <div className={styles.pizzas}>
            <img className={styles.pizzaPhoto} src={pizza.imgPizza}  />
            <p className={styles.pizzaText1}>{pizza.title}</p>
            <p className={styles.pizzaText2}>{pizza.titleDesc}</p>
            <p className={styles.pizzaPrice}>{pizza.pricePizza}</p>
            <div className={styles.buttons}>
                    <button className={styles.minus}>{pizza.minus}</button>
                    <p className={styles.pizzaCount}>{pizza.count}</p>
                    <button className={styles.plus}>{pizza.plus}</button>
            </div>
            <button className={styles.pizzaButton}>{pizza.button}</button>
        </div>
       
        </>
    )
}

export default PizzaItems;