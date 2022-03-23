import React from "react";
import styles from "./SecondHeader.module.css"
const SecondHeader = () =>{
    return (


            <header >
                <nav >
                    <ul className={styles.listHeader} style={{display:"flex",gap:"16px",listStyle:"none",alignContent:"center"}}>
                        <li >Пицца</li>
                        <li >Бургер</li>
                        <li >Суши</li>
                        <li >Роллы</li>
                        <li >Салаты</li>
                        <li >Десерты</li>
                        <li >Напитки</li>
                    </ul>
                </nav>
            </header>

    )
}

export default SecondHeader;