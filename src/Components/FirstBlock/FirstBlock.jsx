import React from "react";
import styles from "./FirstBlock.module.css"
import vector from "../../Media/image/Vector 2.svg"
import burger from "../../Media/image/burger.png"
import SecondHeader from "../SecondHeader/SecondHeader";

const FirstBlock = () => {
    return (
        <div className={styles.menuDiv}>

            <div className={styles.firstMenu}>

                <div className={styles.firstBlock}>
                    <h1 className={styles.firstH1}>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
                    <p className={styles.firstText}>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен
                        всегда
                        горячим и ароматным.</p>
                    <button className={styles.firstBtn}>Перейти в меню <img style={{
                        width: "10px",
                        height: "10px"
                    }} className={styles.vector} src={vector} alt=""/></button>
                </div>

                <div className={styles.secondBlock}>
                    <img src={burger} style={{
                        width: "659px",
                        height: "455px"
                    }} alt=""/>
                </div>

            </div>

                <SecondHeader/>

        </div>

    )
}
export default FirstBlock;