import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/personalDetailsStyles.css";
const logo = require("../images/ministrylogo.png");

const PersonalDetails = ({ change }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const submitHandler = () => {
    change(2);
    localStorage.setItem(
      "personalData",
      `name:${name},email:${email},number:${number},gender:${gender},linkedin:${linkedin}`
    );
    console.log(
      `name:${name},email:${email},number:${number},gender:${gender},linkedin:${linkedin}`
    );
  };

  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
          <Link to={`/`}>
            <img className="image" alt="Image" src={logo} />
          </Link>
        </div>
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="text-wrapper">Lets Get started</div>
          <div className="frame">
            <div className="group">
              <div className="text-wrapper-2">
                Name<span className="text-wrapper-6"> * </span>
              </div>
              {/* <p className="text-wrapper-6">*</p> */}
              <div className="overlap-group-wrapper">
                <input
                  className="div-wrapper"
                  placeholder="Your Name Here"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
            </div>
            <div className="group">
              <div className="text-wrapper-2">
                Email Address<span className="text-wrapper-6"> * </span>
              </div>
              {/* <span className="text-wrapper-6">*</span> */}
              <div className="overlap-group-wrapper">
                <input
                  className="div-wrapper"
                  placeholder="Your Email Here"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
            <div className="group">
              <div className="text-wrapper-2">
                Phone Number <span className="text-wrapper-6"> * </span>
              </div>
              {/* <span className="text-wrapper-6">*</span> */}
              <div className="overlap-group-wrapper">
                <input
                  className="div-wrapper"
                  placeholder="Your Phone Number Here"
                  onChange={(e) => setNumber(e.target.value)}
                  value={number}
                />
              </div>
            </div>
          </div>
          <div className="group-2">
            <div className="frame-2">
              <div className="frame-3">
                <label>
                  <input
                    className="radio-button"
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={(e) => setGender(e.target.value)}
                    // onChange={handleGenderChange}
                  />
                  Male
                </label>

                <label>
                  <input
                    className="radio-button"
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={(e) => setGender(e.target.value)}
                    // onChange={handleGenderChange}
                  />
                  Female
                </label>

                <label>
                  <input
                    className="radio-button"
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={(e) => setGender(e.target.value)}
                    // onChange={handleGenderChange}
                  />
                  Other
                </label>
              </div>
            </div>
            <div className="text-wrapper-5">
              Gender<span className="text-wrapper-6"> * </span>
            </div>
            {/* <span className="text-wrapper-6">*</span> */}
          </div>
          <div className="group-3">
            <p className="linkedin-profile-url">
              <span className="span">Linkedin Profile URL</span>
              <span className="text-wrapper-6">*</span>
            </p>
            <div className="overlap-group-wrapper">
              <input
                className="div-wrapper-1"
                placeholder="Your Linkedin Profile Here"
                onChange={(e) => setLinkedin(e.target.value)}
                value={linkedin}
              />
            </div>
          </div>
          <div className="overlap-wrapper">
            <button className="overlap-2" onClick={submitHandler}>
              Continue with Startup Details
            </button>
            {/* <div className="overlap-2">
              <div className="text-wrapper-7">Book now</div>
            </div> */}
          </div>
          <img className="vector" alt="Vector" src="vector-1.svg" />
          <div className="group-4">
            <div className="overlap-3">
              <div className="text-wrapper-8">1</div>
            </div>
          </div>
          <div className="group-5">
            <div className="overlap-4">
              <div className="text-wrapper-9">2</div>
            </div>
          </div>
          <div className="text-wrapper-10">Personal Details</div>
          <div className="text-wrapper-11">Startup Details</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
