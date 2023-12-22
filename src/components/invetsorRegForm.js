import { useState } from "react";
import { Outlet, Link, history } from "react-router-dom";
import "../styles/personalDetailsStyles.css";
import citiesData from "../resources/cities.json";
const logo = require("../images/ministrylogo.png");
// const history=useh

const tick = require("../images/tick_icon.png");

const InvestorDetails = ({ change }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [domain, setDomain] = useState("");
  const [dob, setDOB] = useState("");
  const [city, setCity] = useState("");
  // const [stage, setStage] = useState("");
  const [type, setType] = useState("");
  // const [revenue, setRevenue] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [funding, setFunding] = useState("");
  const [disc, setDisc] = useState("");
  const [tc, setTc] = useState("");

  const submitHandler = () => {
    localStorage.setItem(
      "InvestorData",
      `name:${name},email:${email},dob:${dob},city:${city},
      type:${type},pass:${pass},cpass:${cpass},
      linkedin:${linkedin},funding${funding},disc:${disc},tc:${tc}`
    );
    console.log(
      `name:${name},email:${email},dob:${dob},city:${city},
      type:${type},pass:${pass},cpass:${cpass},
      linkedin:${linkedin},funding${funding},disc:${disc},tc:${tc}`
    );
    // history.
  };

  const imagestyle = {
    padding: "5px",
    cursor: "pointer",
  };
  const contstyle = {
    height: "850px",
  };
  const divstyle = {
    height: "1050px",
  };
  const dropdownstyle = {
    backgroundColor: "#ffffff",
    border: "1px solid",
    borderColor: "#dde2e5",
    borderRadius: "10px",
    height: "70px",
    position: "relative",
    width: "424px",
    fontSize: "larger",
    paddingLeft: "20px",
    color: "#686a6b",
  };

  const fileuploadstyles = {
    paddingTop: "20px",
    height: "50px",
  };

  const rightRowstyles = {
    position: "absolute",
    left: "620px",
    top: "120px",
    fontSize: "18px",
    color: "#5e6366",
    flexDirection: "column",
  };
  const leftRowstyles = {
    position: "absolute",
    left: "120px",
    top: "120px",
    fontSize: "18px",
    color: "#5e6366",
    flexDirection: "column",
  };

  const textarea = {
    height: "100px",
    width: "400px",
    padding: "10px",
    border: "1px solid #dde2e5",
    borderRadius: "10px",
    fontSize: "Larger",
  };
  const termstyles = {
    backgroundColor: "black",
    border: "1px solid",
    borderColor: "#dde2e5",
    borderRadius: "10px",
    height: "20px",
    // position: "relative",
    width: "20px",
    fontSize: "larger",
    padding: "40px",
    marginTop: "20px",
  };

  const finishStyles = {
    marginTop: "120px",
  };
  // const rightRowInputStyle = {
  //   position: "absolute",
  //   left: "620px",
  //   top: "285px",
  //   fontSize: "Larger",
  //   color: "#5e6366",
  // };

  return (
    <div className="desktop">
      <div className="div" style={divstyle}>
        <div className="overlap">
          <Link to={`/`}>
            <img className="image" alt="Image" src={logo} />
          </Link>
        </div>
        <div className="overlap-group">
          <div className="rectangle" style={contstyle} />
          <div className="rectangle-2" />
          <div className="text-wrapper">Lets Get started</div>
          <div className="frame" style={leftRowstyles}>
            <div className="group">
              <div className="text-wrapper-2">
                Name <span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <input
                  className="div-wrapper"
                  placeholder="Your Name Here"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="group">
              <div className="text-wrapper-2">
                Which of these best describes you?
                <span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <select
                  className="dropdown"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  style={dropdownstyle}
                >
                  <option value="">Select Type</option>
                  <option value="Mentor">Mentor</option>
                  <option value="Incubaor">Incubaor</option>
                  <option value="Accelerator">Accelerator</option>
                  <option value="VC">VC</option>
                  <option value="Normal Investor">Normal Investor</option>
                </select>
              </div>
            </div>
            <div className="group">
              <div className="text-wrapper-2">
                City <span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <select
                  className="dropdown"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={dropdownstyle}
                >
                  <option value="">Select a city</option>
                  {citiesData.map((city, index) => (
                    <option key={index} value={city.name}>
                      {city.name}, {city.state}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="group">
              <div className="text-wrapper-2">
                Funding Done Till Date (if applicable)
              </div>
              <div className="overlap-group-wrapper">
                <input
                  className="div-wrapper"
                  placeholder="Funding in Rupees Here"
                  onChange={(e) => setFunding(e.target.value)}
                  value={funding}
                />
              </div>
            </div>
            <div className="group">
              <div className="text-wrapper-2">Linkedin URL</div>
              <div className="overlap-group-wrapper">
                <input
                  className="div-wrapper"
                  placeholder="Your LinkedIn Here"
                  onChange={(e) => setLinkedin(e.target.value)}
                  value={linkedin}
                />
              </div>
            </div>

            <div className="group">
              <div className="text-wrapper-2">
                <input
                  type="checkbox"
                  style={termstyles}
                  // className="div-wrapper"
                  // placeholder="Your LinkedIn Here"
                  onChange={(e) => setTc(e.target.value)}
                  value={tc}
                />
                Accept Terms and Conditions
                <span className="text-wrapper-6"> * </span>
              </div>
            </div>
          </div>

          <div className="frame-2" style={rightRowstyles}>
            <div className="group">
              <div className="text-wrapper-2">
                Email
                <span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <input
                  // style={rightRowInputStyle}
                  className="div-wrapper"
                  placeholder="Your Email Here"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
            <div className="group">
              <div className="text-wrapper-2">
                Date of Birth<span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <input
                  // style={rightRowInputStyle}
                  type="date"
                  className="div-wrapper"
                  placeholder="Your Startup Name Here"
                  onChange={(e) => setDOB(e.target.value)}
                  value={dob}
                />
              </div>
            </div>

            <div className="group">
              <div className="text-wrapper-2">
                Password
                <span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <input
                  // style={rightRowInputStyle}
                  className="div-wrapper"
                  placeholder="Your PassWord Here"
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                />
              </div>
            </div>
            <div className="group">
              <div className="text-wrapper-2">
                Confirm Password
                <span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <input
                  // style={rightRowInputStyle}
                  className="div-wrapper"
                  placeholder="Confirm PassWord"
                  onChange={(e) => setCPass(e.target.value)}
                  value={cpass}
                />
              </div>
            </div>

            <div className="group">
              <div className="text-wrapper-2">
                Tell Us About Yourself
                <span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <textarea
                  // style={rightRowInputStyle}

                  style={textarea}
                  placeholder="Please Discribe Yourself in a few words"
                  onChange={(e) => setDisc(e.target.value)}
                  value={disc}
                />
              </div>
            </div>

            <div className="group">
              <div className="overlap-group-wrapper">
                <button
                  className="overlap-2"
                  onClick={submitHandler}
                  style={finishStyles}
                >
                  Submit and Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDetails;
