
import React from "react";
import FirstBlock from "./Components/FirstBlock/FirstBlock";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
      <div className="food-planet" style={{ width:"1600px"}}>
        <Header/>
        <FirstBlock/>
        <Menu/>
    </div>
  );
}

export default App;
