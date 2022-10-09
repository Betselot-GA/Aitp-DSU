import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import EventSinglePage from "./pages/Event-Single_Page/event-single-page";
import Events from "./pages/Events/events";
import Home from "./pages/Home/home";
import NoticeSinglePage from "./pages/Notice-Single_Page/notice-single-page";
import Notice from "./pages/Notice/notice";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/event-single" element={<EventSinglePage />} />
          <Route path="/notice-single" element={<NoticeSinglePage />} />
        </Routes>
      </Router>
      {/* <Home/> */}
      {/* <About/> */}
      <Footer />
    </div>
  );
}

export default App;
