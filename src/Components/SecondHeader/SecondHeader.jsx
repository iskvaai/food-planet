import React from "react";
import styles from "./SecondHeader.module.css"
const SecondHeader = () =>{
    return (
        <div className={styles.novinki}  >
            <h1>Новинки</h1>
            <header >
                <nav >
                    <ul className={styles.listHeader} >
                        <li >Пицца</li>
                        <li className={styles.burgerLi} >Бургер</li>
                        <li >Суши</li>
                        <li >Роллы</li>
                        <li >Салаты</li>
                        <li >Десерты</li>
                        <li >Напитки</li>
                    </ul>
                </nav>
            </header>
        </div>


    )
}

export default SecondHeader;