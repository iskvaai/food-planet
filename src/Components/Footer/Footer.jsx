import React from "react";
import styles from "./Footer.module.css"
import phone from "../../Media/phone.svg";
import korzina from "../../Media/korzina.svg";
import spoon from "../../Media/spoon.png";

const Footer = () => {
    return (
        <div style={{backgroundColor: "#254F4C"}}>
            <footer>
                <div >
                    <img src={spoon} alt=""/>
                    <p>food planet</p>
                    <p>Планета вкусной еды</p>

                <nav>
                    <ul className={styles.firstMenu}>
                        <li className={styles.firstLi}><a href="">Главная</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Доставка</a></li>
                        <li><a href="">Контакты</a></li>
                        <img className={styles.phone} src={phone}/>
                        <li className={styles.numberLi}><a href="">+996500405988</a></li>

                    </ul>
                </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;