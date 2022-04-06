import React from "react";
import FirstBlock from "./Components/FirstBlock/FirstBlock";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import MenuBurgers from "./Components/MenuBurgers/MenuBurgers";
import MenuPizzaItem from "./Components/MenuPizza/MenuPizzaItem";
import MenuPizza from "./Components/MenuPizza/MenuPizza";
import Comments from "./Components/Comments/Comments";
import Footer from "./Components/Footer/Footer";
import NavBar from "./AdminPanel/AdminPart/NavBar/NavBar";

function App() {
    return (
        <div className="food-planet" style={{maxWidth: "1600px"}}>
            <div style={{marginRight: "224", marginLeft: "224px"}}>
                <Header/>
                <FirstBlock/>
                <MenuBurgers/>
                <Menu/>
                <MenuPizza/>
                <Comments/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
