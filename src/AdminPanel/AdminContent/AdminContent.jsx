import React from "react";
import search from "../Media/search.svg";
import notification from "../Media/new.svg";
import avatar from "../Media/avatar.svg";
import NavBar from "../NavBar/NavBar";
import styles from "./AdminContent.module.css"
import {Link} from "react-router-dom";


const AdminContent = () => {
    return (
        <>
        <div style={{display: "flex"}}>

       <NavBar/>
        <div className={styles.siteCenter} >
            <div style={{display: "flex", marginTop: "32px"}}>
                <h1 className={styles.mainTitle}>Главная</h1>
                <button style={{border: "0", background: "white"}}><img className={styles.search} src={search} alt=""/></button>
                <button style={{border: "0", background: "white"}}><img className={styles.notification} src={notification} alt=""/></button>
                <p className={styles.name}>Jones Ferdinand</p>
                <img src={avatar} alt=""/>

            </div>



             <button className={styles.foodCard}><p className={styles.food}>Пицца </p> <p className={styles.quantityOfFood}>60</p></button>
             <button className={styles.foodCard}><p className={styles.food}>Бургер </p><p className={styles.quantityOfFood}>16</p></button>
             <button className={styles.foodCard}><p className={styles.food}>Суши </p> <p className={styles.quantityOfFood}>43</p></button>
             <button className={styles.foodCard}><p className={styles.food}>Роллы </p> <p className={styles.quantityOfFood}>64</p></button>
             <button className={styles.foodCard}><p className={styles.food}>Салаты </p> <p className={styles.quantityOfFood}>60</p></button>
             <button className={styles.foodCard}><p className={styles.food}>Напитки </p> <p className={styles.quantityOfFood}>43</p></button>
             <button className={styles.foodCard}><p className={styles.food}>Десерты</p> <p className={styles.quantityOfFood}>43</p></button>
             <button className={styles.foodCard}><p className={styles.food}>Роллы </p> <p className={styles.quantityOfFood}>64</p></button>



        </div>


        </div>
    <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
    </Link>
    </>
    )
}
export default AdminContent;
