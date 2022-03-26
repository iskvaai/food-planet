import React from 'react';

const Menu = () =>{
    return(
        <div className="menu-container">
            <nav>
                <ul className="thirdHeader" style={{display: "flex"}}>
                    <li>Меню</li>
                    <li>Пицца</li>
                    <li>Бургер</li>
                    <li>Суши</li>
                    <li>Роллы</li>
                    <li>Салаты</li>
                    <li>Десерты</li>
                    <li>Напитки</li>
                </ul>
            </nav>  
            <div className="sort">
                 <p>Сортировать  по:</p>
                <select name="" id="">
                    <option value="По умолчанию">По умолчанию</option>
                </select>
                
            </div>  
        </div>
       
    )
}

export default Menu;