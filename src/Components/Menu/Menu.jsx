import React from 'react';
import styles from './Menu.module.css'

const Menu = () =>{
    return(
        <div className={styles.menuContainer}>
            <nav>
                <ul className={styles.thirdHeader}>
                    <li className={styles.menuLi}> <a href="">Меню</a></li>
                    <li className={styles.burgerLi}> <a href="">Пицца</a></li>
                    <li className={styles.burgerLi}> <a href="">Бургер</a></li>
                    <li className={styles.burgerLi}> <a href="">Суши</a></li>
                    <li className={styles.burgerLi}> <a href="">Роллы</a></li>
                    <li className={styles.burgerLi}> <a href="">Салаты</a></li>
                    <li className={styles.burgerLi}> <a href="">Десерты</a></li>
                    <li className={styles.burgerLi}> <a href="">Напитки</a></li>
                </ul>
            </nav>  
            <div className={styles.sort}>
                 <p>Сортировать  по:</p>
                <select name="" id="">
                    <option value="По умолчанию">По умолчанию</option>
                </select>
                
            </div>  
        </div> 
    )
}

export default Menu;