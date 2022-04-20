import React from "react";
import styles from "./NavBar.module.css"
import icon1 from "../Media/icon1.svg"
import icon2 from "../Media/icon2.png"
import icon3 from "../Media/icon3.png"
import icon4 from "../Media/icon4.png"
import icon5 from "../Media/icon5.png"
import icon6 from "../Media/icon6.png"

import logoFood from "../Media/logo.svg"

const NavBar = () => {
    return (


            <div style={{ background: "#363740",
                height: "700px",width:"255px"}}  >


                <p className={styles.logoFood}><img className={styles.logo} src={logoFood} alt=""/>FOOD PLANET</p>
               <div className={styles.navBarItem}>
                   <button className={styles.navBarItem}><img className={styles.photoIcon} style={{opacity: "0.5"}} src={icon1} alt=""/><p className={styles.NavBarTitle}>Главная </p></button>
                   <button className={styles.navBarItem}><img className={styles.photoIcon} src={icon2} alt=""/><p className={styles.NavBarTitle}>Заказы </p>
                   </button>
                   <button className={styles.navBarItem}><img className={styles.photoIcon} src={icon3} alt=""/><p className={styles.NavBarTitle}>Меню</p>
                   </button>
                   <button className={styles.navBarItem}><img className={styles.photoIcon} src={icon4} alt=""/><p className={styles.NavBarTitle}>Контакты</p>
                   </button>
                   <button className={styles.navBarItem}><img className={styles.photoIcon} src={icon5} alt=""/><p className={styles.NavBarTitle}>Отзывы</p>
                   </button>
                   <button className={styles.navBarItem}><img className={styles.photoIcon} src={icon6} alt=""/><p className={styles.NavBarTitle}>Сотрудники</p>
                   </button>



               </div>
            </div>


 )
}
 export default NavBar;
