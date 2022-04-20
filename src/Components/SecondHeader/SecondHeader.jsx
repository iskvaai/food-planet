import React from "react";
import styles from "./SecondHeader.module.css"
const SecondHeader = () =>{
    return (

        <div className={styles.novinki}  >
           {/* <h1 className={styles.novinkiH1}>Новинки</h1>*/}
            <header >
                <nav >
                    <ul className={styles.listHeader} >
                        <li className={styles.novinkiH1}> <a  href="">Новинки</a></li>
                        <li ><a href="">Пицца</a></li>
                        <li className={styles.burgerLi} ><a href="">Бургер</a></li>
                        <li className={styles.burgerLi} ><a href="">Суши</a></li>
                        <li className={styles.burgerLi} ><a href="">Роллы</a></li>
                        <li className={styles.burgerLi}><a href="">Салаты</a></li>
                        <li className={styles.burgerLi}><a href="">Десерты</a></li>
                        <li className={styles.burgerLi}><a href="">Напитки</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default SecondHeader;