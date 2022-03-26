import React from "react";
import styles from "./MenuBurgers.module.css";
import img1 from "../../Media/image/burger1.png"
import img2 from "../../Media/image/burger2.png"
import img3 from "../../Media/image/burger3.png"
import img4 from "../../Media/image/burger4.png"


const MenuBurgerItem = (burgers) => {
    return (
        <>
            <div className={styles.tofuBurger}>
                <img src={burgers.imgBurger} src={img1} src={img2} src={img3} src={img4}/>
                <p>{burgers.title}</p>
                <p>{burgers.titleDesc}</p>
                <p>{burgers.priceBurger}</p>
                <button>{burgers.btn}</button>
            </div>

        </>
    )
}


export default MenuBurgerItem;