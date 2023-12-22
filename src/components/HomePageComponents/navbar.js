import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "../../App.css";
const logo = require("../../images/ministrylogo.png");

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const logostyles = {
    height: "7vh",
    margin: "0px 0px 0px 50% ",
  };
  const btnstyle = {
    margin: "1vh",
    height: "5vh",
    borderRadius: "3vh",
    fontWeight: "2em",
  };

  const inpstyle = {
    margin: "1vh",
    height: "5vh",
    borderRadius: "3vh",
    border: "none",
    fontWeight: "2em",
    backgroundColor: "#c7f2a433",
  };
  const searchStyle = {
    marginRight: "20px",
    border: "1px solid backgroundColor: #009470",
    padding: "0px 5px",
    borderRadius: "30px",
  };

  const navtabsStyles = {
    color: "black",
    fontSize: "1.4em",
    margin: "0px 20px",
  };

  const navmenustyles = {
    marginLeft: "90px",
  };

  const signupform = () => {
    document.getElementById("joinbtn").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    // navigate("register/startup");
  };
  const successLink = () => {
    document.getElementById("joinbtn").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    // navigate("register/startup");
  };

  const signinform = () => {
    navigate("../login");
  };

  const profileSearch = () => {
    if (searchTerm === "investor") {
      navigate("../investorProfile");
    } else {
      navigate("../startupProfile");
    }
  };

  return (
    <div className="navbarCSS">
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          backgroundColor: "white",
          padding: "0",
          // boxShadow: "5px 5px 10px rgba(0, 0, 0, 1)",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img style={logostyles} alt="Image" src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={navmenustyles}
            >
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li> */}

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/mentorship"
                  style={navtabsStyles}
                >
                  Guidance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/events" style={navtabsStyles}>
                  Explore
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/opportunities"
                  style={navtabsStyles}
                >
                  Opportunities
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/successStories"
                  style={navtabsStyles}
                  onclick={successLink}
                >
                  Success Stories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/discuss" style={navtabsStyles}>
                  Discuss
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" style={searchStyle}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search For Startups"
                aria-label="Search"
                style={inpstyle}
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={btnstyle}
                onClick={profileSearch}
              >
                Search
              </button>
            </form>
            <button
              className="btn btn-outline-success"
              type="submit"
              style={btnstyle}
              onClick={signupform}
            >
              Signup
            </button>{" "}
            <button
              className="btn btn-success"
              type="submit"
              style={btnstyle}
              onClick={signinform}
            >
              Signin
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
