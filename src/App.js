import React, { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import About from "./components/pages/AboutUs/About";
import FoodMenu from "./components/pages/FoodMenu/FoodMenu";
import DrinkMenu from "./components/pages/DrinkMenu/DrinkMenu";
import Events from "./components/pages/EventsEl/Events";
import Contact from "./components/pages/ContactUs/ContactUs";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        headerRef.current &&
        window.scrollY > headerRef.current.clientHeight
      ) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(()=>{
     const timerId = setTimeout(()=>{
      console.log("Setting isModal to true");
setIsModal(true);
     },5 *60 *1000)
    return ()=> clearTimeout(timerId)
  },[]);

  return (
    <div className="app">
      <Header isScrolled={isScrolled} ref={headerRef} />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <MainContent isModal={isModal} setIsModal={setIsModal} />
            }
          />
        
          <Route path="/food-menu" element={<FoodMenu />} />
          <Route path="/drink-menu" element={<DrinkMenu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
