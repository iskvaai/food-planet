import React from "react";
import styles from "./Admin.module.css"

const Admin = () => {
    return (
        <>
            <div className={styles.mainBlock}>
        <div className={styles.formBlock}>
            <h1 className={styles.login}>Login</h1>
            <div className={styles.inputBox}>
                <input type="login" placeholder="Login"/>
            </div>
            <div className={styles.inputBox}>
                <input type="password" placeholder="Password"/>
            </div>
        </div>
            </div>


            </>
    )
}

export default Admin;