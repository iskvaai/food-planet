import React from 'react';
import spoon from "../../Media/image/spoon.png";
import styles from "./Header.module.css";
import phone from "../../Media/image/phone.svg";
import korzina from "../../Media/image/korzina.svg";


const Header = () =>{
    return(
        <div className={styles.container}>
        <img className={styles.spoon} src={spoon}/>
        <p className={styles.food}>food planet</p>
        <p className={styles.planet}>Планета вкусной еды</p>
        <div>
            <nav>
                <ul>
                    <li className={styles.firstLi}>Главная</li>
                    <li>Menu<select className={styles.menu}></select></li> 
                    <li>Доставка</li>
                    <li>Контакты</li>
                    <img className={styles.phone} src={phone}/>
                    <li className={styles.numberLi}>+996500405988</li>
                    <img className={styles.basket} src={korzina}/>
                    <li className={styles.lastLi}>1</li>
                </ul>
            </nav>
        </div>
        </div>
    );
}
export default Header;