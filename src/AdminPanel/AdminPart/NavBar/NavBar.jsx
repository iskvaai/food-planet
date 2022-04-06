import React from "react";
import styles from "./NavBar.module.css"
import icon1 from "../../Media/icon1.svg"
import icon2 from "../../Media/icon2.png"
import icon3 from "../../Media/icon3.png"
import icon4 from "../../Media/icon4.png"
import icon5 from "../../Media/icon5.png"
import icon6 from "../../Media/icon6.png"

import logoFood from "../../Media/logo.svg"
import NavBarItem from "./NavBarItem";
import {cards} from "../../constant";
import search from "../../Media/search.svg"
import notification from "../../Media/new.svg"
import avatar from "../../Media/avatar.svg"


const NavBar = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.navBar}>

                <div>
                    <p className={styles.logoFood}><img className={styles.logo} src={logoFood} alt=""/>FOOD PLANET</p>
                </div>


                <div className={styles.navBarItem}><img className={styles.photoIcon} style={{opacity: "0.5"}}
                                                        src={icon1} alt=""/><a href="#">Главная</a></div>
                <div className={styles.navBarItem}><img className={styles.photoIcon} src={icon2} alt=""/><a
                    href="#">Заказы</a></div>
                <div className={styles.navBarItem}><img className={styles.photoIcon} src={icon3} alt=""/><a
                    href="#">Меню</a></div>
                <div className={styles.navBarItem}><img className={styles.photoIcon} src={icon4} alt=""/><a
                    href="#">Контакты</a></div>
                <div className={styles.navBarItem}><img className={styles.photoIcon} src={icon5} alt=""/><a
                    href="#">Отзывы</a></div>
                <div className={styles.navBarItem}><img className={styles.photoIcon} src={icon6} alt=""/><a
                    href="#">Сотрудники</a></div>
                <hr/>
            </div>
            <div className={styles.siteCenter}>
                <div style={{display: "flex"}}>
                    <h1 className={styles.mainTitle}>Главная</h1>
                    <button style={{border:"0",background:"white"}}><img className={styles.search} src={search} /></button>
                    <button style={{border:"0",background:"white"}}><img className={styles.notification} src={notification} /></button>
                    <p style={{border: "0.5px solid #DFE0EB",height:"36px"}}></p>
                    <p className={styles.name}>Jones Ferdinand</p>
                    <img src={avatar} alt=""/>
                </div>


                <>
                    {
                        cards.map((item, index) => {
                            return <NavBarItem
                                key={index}
                                food={item.food}
                                sum={item.sum}
                            />

                        })
                    }
                </>
            </div>

        </div>


    )
}
export default NavBar;