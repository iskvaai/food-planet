
import React from "react";
import FirstBlock from "./Components/FirstBlock/FirstBlock";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import MenuBurgers from "./Components/MenuBurgers/MenuBurgers";
import Pizza from "./Components/Pizza/Pizza";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
      <div className="food-planet" style={{ width:"1600px"}}>
        <Header/>
        <FirstBlock/>
          <MenuBurgers/>
        <Menu/>
        <Pizza/>
        <WhyChooseUs/>
        <Footer/>
    </div>
  );
}

export default App;
