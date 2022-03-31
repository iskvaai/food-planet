import React from 'react';
import styles from './Menu.module.css';

const Menu = () =>{
    return(
        <div className={styles.menuContainer}>
            <nav>
                <ul className={styles.thirdHeader}>
                    <li> <a className={styles.menuLi} href="">Меню</a></li>
                    <li> <a href="">Пицца</a></li>
                    <li> <a href="">Бургер</a></li>
                    <li> <a href="">Суши</a></li>
                    <li> <a href="">Роллы</a></li>
                    <li> <a href="">Салаты</a></li>
                    <li> <a href="">Десерты</a></li>
                    <li> <a href="">Напитки</a></li>
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