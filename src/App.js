import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./Pages/Main/Main";
import AdminContent from "./AdminPanel/AdminContent/AdminContent";
import Admin from "./Pages/Admin/Admin";


function App() {
    return (
      <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/admin" element={<AdminContent/>}/>
              <Route path="/adminka" element={<Admin/>}/>
          </Routes>
      </BrowserRouter>


</>
  )}

  export default App;


