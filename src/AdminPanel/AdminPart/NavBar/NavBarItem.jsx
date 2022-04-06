import React from "react";
import styles from "./NavBar.module.css";

const NavBarItem = (props) => {
    return (
        <div className={styles.foodCard}>
            <p className={styles.food}>{props.food}</p>
            <p className={styles.quantityOfFood}>{props.sum}</p>
        </div>
    )
}
export default NavBarItem;