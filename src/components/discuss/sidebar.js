import "./sidebar.css";
import seek from "./seek.png";
import investors from "./investors.png";
import spotlight from "./spotlight.png";
import general from "./general.png";
import announcement from "./announcement.png";
import { AiFillPlusCircle } from "react-icons/ai";
// import {Channel} from "./channel.js";
// import { useState } from "react";

export const SideBar = (props) => {
  // const [clicked, setclicked] = useState(-1);

  const setannounce = () => {
    props.setType(1);
  };
  const setgen = () => {
    props.setType(2);
  };
  const setspot = () => {
    props.setType(3);
  };
  const setinvestment = () => {
    props.setType(4);
  };
  const setinvestor = () => {
    props.setType(5);
  };

  return (
    <div className="sidebar" style={{ marginTop: "10vh", height: "70vh" }}>
      <div className="discussHead">
        <h1>Discussion Forum</h1>
        <h1>
          <i className="sidebarIcon">
            <AiFillPlusCircle />
          </i>
        </h1>
      </div>
      <ul className="sidebarOptions">
        <li onClick={setgen}>
          <img src={general} alt="general" />
          General{" "}
        </li>

        <li onClick={setannounce}>
          <img src={announcement} alt="announcement" />
          Announcement
        </li>
        <li onClick={setinvestment}>
          <img src={seek} alt="seekinv" />
          Seek investment{" "}
        </li>
        <li onClick={setinvestor}>
          <img src={investors} alt="investors" />
          Investor connect
        </li>
        <li onClick={setspot}>
          <img src={spotlight} alt="spotlight" />
          Startup spotlight{" "}
        </li>
        {/* <li><Channel clicked={clicked} channelImg={seek} channelname="Seek investment"/></li> */}
      </ul>
    </div>
  );
};
