import React from "react";
import { MdVerified, MdEdit } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { BiLink } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa";
import profile from "../images/startuplogo.png";
import graph from "../images/SIH.png";
import headcount from "../images/headcount.png";
import "../styles/profile.css";
import Navbar from "./HomePageComponents/navbar";
const StartupProfile = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="profileContainer">
        <div className="left">
          <div className="profilePhoto">
            <img src={profile} alt="user" />
            <div>
              <p className="startupname">
                Tech Veda{" "}
                <i className="startupIcon">
                  <MdVerified />{" "}
                </i>
              </p>
              <p className="tagline">
                Elevating Health and Harmony through Ayush Wisdom: Your Path to
                Holistic Well-being.
                </p>
                <div className="interested">
                  I am interested!
                  <button className="intbtn">
                    <i className="startupIcon">
                      <FaThumbsUp />
                    </i>
                  </button>
                </div>
              {/* </p> */}
            </div>
          </div>
          <div className="startupinfo">
            <p>
              <i className="startupIcon">
                <ImLocation />
              </i>
              123 Ayush Lane Delhi, India
            </p>
            <p>
              <i className="startupIcon">
                <AiFillPhone />
              </i>
              99665848959
            </p>

            <p className="websitelink">
              <i className="startupIcon">
                <BiLink />
              </i>
              Visit Company's website
            </p>
          </div>
          <div className="startupresume">Startup Report</div>
          <div className="startupresume" style={{ marginTop: "2vh" }}>
            Pitchdeck
          </div>
        </div>

        <div className="right">
          <div className="insights">
            <h1>About Tech Veda</h1>
            <p>
              At our Ayush-inspired startup, we are dedicated to elevating your
              health and promoting harmony through the profound wisdom of
              Ayurveda, Yoga, Unani, Siddha, and Homeopathy – collectively known
              as Ayush. We believe in the power of ancient healing traditions to
              foster holistic well-being in the modern world. Our mission is to
              provide you with accessible, personalized, and natural solutions
              that align with your unique wellness journey. Whether you seek
              balance, vitality, or peace, our offerings are designed to empower
              you to embrace Ayush principles and live a healthier, more
              harmonious life. Join us on this transformative path to
              well-being.
            </p>
            <p className="headers">Industy</p>
            <p>Ayush</p>
            <p className="headers">Company size</p>
            <p>50 - 100</p>
            <p className="headers">Headquaters</p>
            <p>Delhi,India</p>
            <p className="headers">Founded</p>
            <p>2022</p>
            <h1> Insights on Tech Veda</h1>
            <div className="insightimages">
              <img src={graph} alt="graph" />
              <img className="headcount" src={headcount} alt="headcount" />
            </div>
            <h1>Recent job openings</h1>
          </div>
        </div>
      </div>
          
    </>
  );
};

export default StartupProfile;
