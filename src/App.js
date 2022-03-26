
import React from "react";
import FirstBlock from "./Components/FirstBlock/FirstBlock";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
      <div className="food-planet" style={{marginLeft:"200px", marginRight:"200px", width:"1200px"}}>
        <Header/>
        <FirstBlock/>
        <Menu/>
    </div>
  );
}

export default App;
