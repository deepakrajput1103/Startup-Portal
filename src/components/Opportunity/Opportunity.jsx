import "./Opportunity.scss";
import { useState } from "react";
import AddOpportunity from "../addOpportunity/AddOpportunity";
// import {  } from "react-icons/im";
import { BsFillPersonPlusFill } from "react-icons/bs"
import Navbar from "../HomePageComponents/navbar";
import Footer from "../HomePageComponents/Footer";
const img = require("../../images/startuplogo.png");
const img2 = require("../../images/startuplogo.jpg");

const Opportunity = () => {
  const [openupdate, setOpenupdate] = useState(false);
  const handleClick = () => {
    setOpenupdate(true);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div style={{backgroundColor:"#c7f2a433"}}>
      <button className="buttonn" onClick={handleClick}>
        Add Opportunity <BsFillPersonPlusFill style={{margin:"2px"}}></BsFillPersonPlusFill>
      </button>
      </div>
      {openupdate && <AddOpportunity setOpenupdate={setOpenupdate} />}
      <div className="post">
        <div className="container">
          <div className="header">
            <div className="leftt">
              <img className="image" src={img} alt=""></img>
              <div className="info">
                <div className="role">Tech Veda</div>
                <div className="company">Role: Content Marketer</div>
              </div>
            </div>
            <div className="rightt">
              <button className="button">Apply</button>
            </div>
          </div>
          <div className="body">
            <div className="company">
              <div className="subcompany">Job Offer</div>
              <div className="subcompany">$1,50,000/year</div>
            </div>
            <div className="company">
              <div className="subcompany">Experience:</div>
              <div className="subcompany"> 1 year+</div>
            </div>
            <div className="company">
              <div className="subcompany">No. of openings:</div>
              <div className="subcompany">2</div>
            </div>
            <div className="company">
              <div className="subcompany">Start Date:</div>
              <div className="subcompany">19/09/2023</div>
            </div>
            <div className="company">
              <div className="subcompany">Location:</div>
              <div className="subcompany">Bangalore</div>
            </div>
          </div>
          <div className="bheader"> Job Description:</div>
          <div className="desc">
            We are looking for an analytical thinker with an audience-first
            mindset for the role of content marketer.
          </div>
        </div>
      </div>
      <div className="post">
        <div className="container">
          <div className="header">
            <div className="leftt">
              <img className="image" src={img2} alt=""></img>
              <div className="info">
                <div className="role">Veda Tech</div>
                <div className="company">Role: Content Marketer</div>
              </div>
            </div>
            <div className="rightt">
              <button className="button">Apply</button>
            </div>
          </div>
          <div className="body">
            <div className="company">
              <div className="subcompany">Job Offer</div>
              <div className="subcompany">$1,50,000/year</div>
            </div>
            <div className="company">
              <div className="subcompany">Experience:</div>
              <div className="subcompany"> 1 year+</div>
            </div>
            <div className="company">
              <div className="subcompany">No. of openings:</div>
              <div className="subcompany">2</div>
            </div>
            <div className="company">
              <div className="subcompany">Start Date:</div>
              <div className="subcompany">19/09/2023</div>
            </div>
            <div className="company">
              <div className="subcompany">Location:</div>
              <div className="subcompany">Bangalore</div>
            </div>
          </div>
          <div className="bheader"> Job Description:</div>
          <div className="desc">
            We are looking for an analytical thinker with an audience-first
            mindset for the role of content marketer.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Opportunity;
