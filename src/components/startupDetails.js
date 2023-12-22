import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/personalDetailsStyles.css";
import citiesData from "../resources/cities.json";
const logo = require("../images/ministrylogo.png");

const tick = require("../images/tick_icon.png");

// const dropdownstyle={
//   background-color: "#ffffff",
//     border: 1px solid;
//     border-color: #dde2e5;
//     border-radius: 10px;
//     height: 70px;
//     position: relative;
//     width: 424px;
//     font-size: larger;
//     padding-left: 20px;
//     color: #686a6b;
//     /* padding: 20px;
// }

const StarupDetails = ({ change }) => {
  const [name, setName] = useState("");
  const [regname, setRegName] = useState("");
  const [domain, setDomain] = useState("");
  const [fdate, setFDate] = useState("");
  const [city, setCity] = useState("");
  const [stage, setStage] = useState("");
  const [type, setType] = useState("");
  const [revenue, setRevenue] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCPass] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [funding, setFunding] = useState("");
  const [disc, setDisc] = useState("");
  const [tc, setTc] = useState("");

  const submitHandler = () => {
    localStorage.setItem(
      "startupData",
      `name:${name},regname:${regname},domain:${domain},fdate:${fdate},city:${city},
      stage:${stage},type:${type},revenue:${revenue},pass:${pass},cpass:${cpass},
      linkedin:${linkedin},funding${funding},disc:${disc},tc:${tc}`
    );
    console.log(
      `name:${name},regname:${regname},domain:${domain},fdate:${fdate},city:${city},
      stage:${stage},type:${type},revenue:${revenue},pass:${pass},cpass:${cpass},
      linkedin:${linkedin},funding${funding},disc:${disc},tc:${tc},`
    );
  };

  const imagestyle = {
    padding: "5px",
    cursor: "pointer",
  };
  const contstyle = {
    height: "1250px",
  };
  const divstyle = {
    height: "1450px",
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
    top: "285px",
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
          <div className="frame">
            <div className="group">
              <div className="text-wrapper-2">
                Name of Startup<span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <input
                  className="div-wrapper"
                  placeholder="Your Startup Name Here"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="group">
              <div className="text-wrapper-2">
                Domain<span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <select
                  className="dropdown"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  style={dropdownstyle}
                >
                  <option value="">Select Domain</option>
                  <option value="Ayurveda">Ayurveda</option>
                  <option value="Yoga">Yoga</option>
                  <option value="Unani">Unani</option>
                  <option value="Siddha">Siddha</option>
                  <option value="Homoepathy">Homoepathy</option>
                  <option value="Misc.">Misc.</option>
                </select>
              </div>
            </div>
            <div className="group">
              <div className="text-wrapper-2">
                City of Operation<span className="text-wrapper-6"> * </span>
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
                Company Stage<span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <select
                  className="dropdown"
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  style={dropdownstyle}
                >
                  <option value="">Select Stage</option>
                  <option value="Pre-Seed">Pre-Seed</option>
                  <option value="Seed">Seed Stage</option>
                  <option value="Early">Early Stage</option>
                  <option value="Growth">Growth Stage</option>
                  <option value="Expansion">Expansion</option>
                  <option value="Exit">Exit</option>
                </select>
              </div>
            </div>
            <div className="group">
              <div className="text-wrapper-2">
                Funding Till Date (if applicable)
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
                Please share your pitch deck
                <span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <input
                  type="file"
                  style={fileuploadstyles}
                  // className="div-wrapper"
                  placeholder="Your LinkedIn Here"
                  // onChange={(e) => setName(e.target.value)}
                  // value={name}
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
                Registered Name of Startup
                <span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <input
                  // style={rightRowInputStyle}
                  className="div-wrapper"
                  placeholder="Your Registered Name Here"
                  onChange={(e) => setRegName(e.target.value)}
                  value={regname}
                />
              </div>
            </div>
            <div className="group">
              <div className="text-wrapper-2">
                Founding Date<span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <input
                  // style={rightRowInputStyle}
                  type="date"
                  className="div-wrapper"
                  placeholder="Your Startup Name Here"
                  onChange={(e) => setFDate(e.target.value)}
                  value={fdate}
                />
              </div>
            </div>
            <div className="group">
              <div className="text-wrapper-2">
                Company Type<span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <select
                  className="dropdown"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  style={dropdownstyle}
                >
                  <option value="">Select Type</option>
                  <option value="Pre-Seed">Pre-Seed</option>
                  <option value="Seed">Seed Stage</option>
                  <option value="Early">Early Stage</option>
                  <option value="Growth">Growth Stage</option>
                  <option value="Expansion">Expansion</option>
                  <option value="Exit">Exit</option>
                </select>
              </div>
            </div>

            <div className="group">
              <div className="text-wrapper-2">
                Revenue
                <span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <input
                  // style={rightRowInputStyle}
                  className="div-wrapper"
                  placeholder="Your Annual Revenue Here"
                  onChange={(e) => setRevenue(e.target.value)}
                  value={revenue}
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
                  placeholder="Your Annual Revenue Here"
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

          <div className="group-4">
            <div className="overlap-3">
              <img
                style={imagestyle}
                alt="Image"
                src={tick}
                onClick={() => {
                  change(1);
                }}
              />
            </div>
          </div>
          <div className="group-5">
            <div className="overlap-3">
              <div className="text-wrapper-8">2</div>
            </div>
          </div>
          <div className="text-wrapper-10">Personal Details</div>
          <div className="text-wrapper-11">Startup Details</div>
        </div>
      </div>
    </div>
  );
};

export default StarupDetails;
