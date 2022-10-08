import React from "react";
import { Route, Link, Routes,BrowserRouter } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import About from "./pages/About/about";
import Home from "./pages/Home/home";

function App() {
  return (
    <div className="App"> 
        {/* <BrowserRouter>
          
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
        
        </BrowserRouter> */}
      <Header/>

    </div>
  );
}

export default App;
