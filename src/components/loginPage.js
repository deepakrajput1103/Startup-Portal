import { useState } from "react";
import { Outlet, Link, history } from "react-router-dom";
import "../styles/personalDetailsStyles.css";
import citiesData from "../resources/cities.json";
const logo = require("../images/ministrylogo.png");
// const history=useh

const tick = require("../images/tick_icon.png");

const LoginPage = ({ change }) => {
  const [email, setEmail] = useState("");

  const [pass, setPass] = useState("");

  const submitHandler = () => {
    localStorage.setItem("LoggedUser", `email:${email}pass:${pass},`);
  };

  const contstyle = {
    width: "50%",
    height: "450px",
    marginLeft: "25%",
    border: "1px solid #00c897",
  };
  const divstyle = {
    height: "830px",
  };

  const leftRowstyles = {
    position: "absolute",
    left: "360px",
    top: "120px",
    fontSize: "18px",
    color: "#5e6366",
    flexDirection: "column",
  };

  const finishStyles = {
    marginTop: "70px",
    width: "300px",
    marginLeft: "60px",
  };

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
          <div className="text-wrapper">Sign In LetsAyush</div>
          <div className="frame" style={leftRowstyles}>
            <div className="group">
              <div className="text-wrapper-2">
                Username <span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <input
                  className="div-wrapper"
                  placeholder="Your Email Here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="group">
              <div className="text-wrapper-2">
                Password<span className="text-wrapper-6"> * </span>
              </div>
              <div className="overlap-group-wrapper">
                <input
                  className="div-wrapper"
                  placeholder="Enter Password"
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
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
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
