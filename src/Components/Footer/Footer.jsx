import React from "react";
import whiteSpoon from "../../Media/white spoon.png";
import styles from "./Footer.module.css";
import whitePhone from "../../Media/white phone.png";

const Footer = () => {
    return(
        <div className={styles.containerFooter} >
            <img className={styles.whiteSpoon} src={whiteSpoon} />
           <div className={styles.twoF}>
                <p className={styles.food}>food planet</p>
                <p className={styles.planet}>Планета вкусной еды</p>
           </div>
            <div className="lastMenu">
                <nav>
                    <ul className={styles.footerUl}>
                        <li className={styles.firstLi}><a href="">Главная</a></li>
                        <li> <a href="">Menu</a><select className={styles.footerSelect}></select></li>
                        <li> <a href="">Доставка</a></li>
                        <li> <a href="">Контакты</a></li>
                        <img className={styles.whitePhone} src={whitePhone}/>
                        <li className={styles.numberLi}><a href="">+996500405988</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Footer;