import React, { useState } from "react";
// import { Outlet, Link } from "react-router-dom";f
import Navbar from "./HomePageComponents/navbar";
import Carousel from "./HomePageComponents/Carousel";
import JoinCards from "./HomePageComponents/joinbuttons";
import Stats from "./HomePageComponents/stats";
import SuccessStories from "./HomePageComponents/successStories";
import Opportunities from "./HomePageComponents/opportunities";
import Footer from "./HomePageComponents/Footer";

function HomePage() {
  const [form, setForm] = useState(1);
  return (
    <>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Stats></Stats>
      <JoinCards></JoinCards>
      <SuccessStories></SuccessStories>
      <Opportunities></Opportunities>
      <Footer></Footer>
      {/* <h1>Hello to Home Page</h1> */}
    </>
  );
}

export default HomePage;
