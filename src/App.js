import React from "react";
import FirstBlock from "./Components/FirstBlock/FirstBlock";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import SecondHeader from "./Components/SecondHeader/SecondHeader";
import MenuBurgers from "./Components/MenuBurgers/MenuBurgers";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
      <div className="food-planet" style={{ width:"1600px"}}>
        <Header/>
        <FirstBlock/>
          <SecondHeader/>
          <MenuBurgers/>
        <Menu/>
        
    </div>
  );
}

export default App;
