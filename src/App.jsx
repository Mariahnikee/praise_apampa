import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import MainLayout from "./components/layout/Mainlayout";
import Home from "./pages/home/Home";
import Event from "./pages/home/Workshop";
import About from "./pages/home/About";
import Workshop from "./pages/home/Workshop";
import Podcasts from "./pages/home/Podcasts";
import Contact from "./pages/home/Contact"
import Workshopvideo from "./pages/homenav/Workshopvideo";
import Generalworkshop from "./pages/workshopnav/Generalworkshop"
import Leaderworkshop from "./pages/workshopnav/Leaderworkshop";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
           <Route path="event" element={<Event />} />
          <Route path="about" element={<About />} />
          <Route path="workshop" element={<Workshop />} />
           <Route path="podcasts" element={<Podcasts />} />
          <Route path="contact" element={<Contact />} />
          <Route path="workshopvideo" element={<Workshopvideo/>} />
          <Route path="generalworkshop" element={<Generalworkshop/>} />
          <Route path="leaderworkshop" element={<Leaderworkshop/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;