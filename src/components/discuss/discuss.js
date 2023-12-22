import { useState } from "react";
import Navbar from "../HomePageComponents/navbar";
import { SideBar } from "./sidebar";
import { Announcement } from "./announcementPosts";
import { General } from "./generalPosts";
import { Spotlight } from "./spotLightPost";
import { Investment } from "./investmentPosts";
import { Investors } from "./investorsPosts";
import "./discuss.css";
export const Discuss = () => {
  const [type, setType] = useState(2);
  // const [bgcolor, setBGColor] = useState(1);
  return (
    <>
      <Navbar></Navbar>
      <div className="discussPage">
        <div className="disscussContent">
          <SideBar setType={setType}></SideBar>
          {/* <p>{type}</p> */}

          {type === 1 && (
            <div className="discussChannel1">
              {" "}
              <Announcement></Announcement>
            </div>
          )}
          {type === 2 && (
            <div className="discussChannel2">
              {" "}
              <General></General>
            </div>
          )}
          {type === 3 && (
            <div className="discussChannel3">
              {" "}
              <Spotlight></Spotlight>
            </div>
          )}
          {type === 4 && (
            <div className="discussChannel4">
              {" "}
              <Investment></Investment>
            </div>
          )}
          {type === 5 && (
            <div className="discussChannel5">
              {" "}
              <Investors></Investors> */
            </div>
          )}
        </div>
      </div>
    </>
  );
};
