import React from "react";
// import { MdVerified, MdEdit } from "react-icons/md";
// import { IoMdMail } from "react-icons/io";
// import { GrLinkedin } from "react-icons/gr";
// import { RiTwitterXLine } from "react-icons/ri";
import Navbar from "../HomePageComponents/navbar";
import image from "./imgg.png";

import "./mentorship.css";

export const Mentor = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="blogs">
        <div className="card221">
          <h1 className="Title">
            How to begin your journey as an AYUSH based startup?
          </h1>
          <h2 className="Content">
            <b>Understanding AYUSH </b>
          </h2>
          <p className="content">
            AYUSH is an acronym that stands for Ayurveda, Yoga & Naturopathy,
            Unani, Siddha, and Homeopathy. It refers to a group of traditional
            systems of medicine and holistic wellness practices that have their
            origins in India. Market analysis in the AYUSH (Ayurveda, Yoga &
            Naturopathy, Unani, Siddha, and Homeopathy) sector involves
            assessing the current market dynamics, trends, competition, and
            opportunities.
          </p>
          <img className="blogimg" src={image} alt="blogimg" />
        </div>
          
      </div>
    </>
  );
};
