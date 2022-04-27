import React from "react";
import styles from "./Admin.module.css"



const Admin = () => {

    let login ;
    let password;
    const addComment = () => {
      console.log('welcome')

        if (login == 'Ais'  && password == '12345'){
            alert('Welcome');
        }else if(login == 'Meka'  && password == '1234'){
            alert('Welcome')}
        else {
            alert('no')
        }

    }
    return (
        <>
            <div className={styles.mainBlock}>
                <div className={styles.formBlock}>
                    <h1 className={styles.login}>Login</h1>
                    <div className={styles.inputBox}>
                        <input id="login" type="login" placeholder="Login"/>
                    </div>
                    <div className={styles.inputBox}>
                        <input id="password" type="password" placeholder="Password"/>

                    </div>
                    <button id="check" onClick={addComment}>Войти</button>
                </div>




            </div>


        </>

    )
}

export default Admin;

    {/* document.getElementById('check').onclick = function () {
                let login = document.getElementById('login')
                let password =  document.getElementById('password');

                if (login == 'Ais'  && password == '12345'){
                alert('Welcome');
            }else if(login == 'Meka'  && password == '1234'){
                alert('Welcome');}
                else {
                alert('No');
            }
            }
*/}