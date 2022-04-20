import React from "react";
import Header from "../../Components/Header/Header";
import FirstBlock from "../../Components/FirstBlock/FirstBlock";
import MenuBurgers from "../../Components/MenuBurgers/MenuBurgers";
import Menu from "../../Components/Menu/Menu";
import Pizza from "../../Components/Pizza/Pizza";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import Comments from "../../Components/Comments/Comments";
import Footer from "../../Components/Footer/Footer";

const Main = () => {
    return(
        <div className="food-planet" style={{ width:"1600px"}}>

            <Header/>
            <FirstBlock/>
            <MenuBurgers/>
            <Menu/>
            <Pizza/>
            <WhyChooseUs/>
            <Comments/>
            <Footer/>
        </div>
    )
}

export default Main;