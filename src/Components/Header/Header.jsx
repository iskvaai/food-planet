import React from 'react';
import spoon from "../../Media/spoon.png";
import styles from "./Header.module.css";
import phone from "../../Media/phone.svg";
import korzina from "../../Media/korzina.svg";

const Header = () =>{
    return(
        <div className={styles.containerHeader} >
        <img className={styles.spoon} src={spoon}/>
        <div className={styles.twoH}>
                <p className={styles.food}>food planet</p>
                <p className={styles.planet}>Планета вкусной еды</p>
        </div>
        <div>
            <nav>
                <ul className={styles.firstMenu}>
                        <li> <a className={styles.firstLi} href="">Главная</a></li>
                        <li> <a href="">Menu</a><select className={styles.menu}></select></li> 
                        <li> <a href="">Доставка</a> </li>
                        <li> <a href="">Контакты</a></li>
                        <img className={styles.phone} src={phone}/>
                        <li className={styles.numberLi}><a href="">+996500405988</a></li>
                        <img className={styles.basket} src={korzina}/>
                        <li className={styles.lastLi}>1</li>
                </ul>
            </nav>
        </div>
        </div>
    );
}
export default Header;