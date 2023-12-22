import React from "react";
import { MdVerified, MdEdit } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";
import profile from "../images/ivestorprofile.jpg";
import Navbar from "./HomePageComponents/navbar";

import "../styles/investorProfile.css";

export const InvestorProfile = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="profileContainer">
        <div className="left">
          <div className="profilePhoto">
            <img src={profile} alt="user" />
            <div>
              <div className="invtype">
                <p className="invname">
                  Investor Name{" "}
                  <i className="invIcon">
                    <MdVerified />
                  </i>
                </p>
                <p
                  style={{
                    color: "#009470",
                    fontSize: "1.2em",
                    fontWeight: "bolder",
                  }}
                >
                  Incubator, Mentor
                </p>
              </div>
            </div>
          </div>
          <div className="companyinfo">
            <p className="compHead">Title & Company/Business</p>
            <p className="companyName">Title</p>
            <p>Company name</p>
          </div>
          <div className="investorContact">
            <p className="investorHead">Contact Information</p>
            <p className="mailicon">
              <i>
                <IoMdMail />{" "}
              </i>
              investor@gmail.com
            </p>
            <p className="invwebsitelink">
              <i>
                <GrLinkedin />
              </i>{" "}
              LinkedIn profile
            </p>
            <p className="invwebsitelink">
              <i>
                <RiTwitterXLine />
              </i>{" "}
              Twitter profile
            </p>
          </div>
          <div className="bioHead">
            <p className="bioHeaadData">Bio</p>
            <button className="editicon">
              <i>
                <MdEdit />
              </i>
            </button>
          </div>
          <p className="bio">
            Investor is a seasoned investor with 11 years of experience in
            finance. Known for a data-driven approach, he excels in identifying
            emerging trends and untapped markets, consistently delivering
            impressive returns. With a strong network of industry experts, he is
            sought after for guidance and mentoring. Investor is committed to
            ethical investing and believes in driving positive change through
            responsible financial practices. Follow him/ on social media for
            insights on investment trends. Join Investor in the journey to
            maximize investment potential. Contact contact information for
            inquiries or partnerships.
          </p>
        </div>

        <div className="invright">
          <div className="currInt">
            <h1 className="invrightHead">Portfolio Companies</h1>

            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name of the company</th>
                  <th scope="col">Sector</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style={{
                    backgroundColor: "#e6fff9",

                    // opacity: "10%",
                  }}
                >
                  <td style={{ color: "black" }}>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr
                  style={{
                    backgroundColor: "#e6fff9",
                  }}
                >
                  <td>Larry</td>
                  <td>the Bird</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="prevInt">
            <h1 className="invrightHead">Previous Investments</h1>

            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name of the company</th>
                  <th scope="col">Sector</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style={{
                    backgroundColor: "#e6fff9",
                  }}
                >
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr
                  style={{
                    backgroundColor: "#e6fff9",
                  }}
                >
                  <td>Larry</td>
                  <td>the Bird</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="refernces">
            <h1 className="invrightHead">References/Testimonials</h1>

            <div
              className="testimonial"
              style={{ display: "flex", gap: 20 + "px" }}
            >
              <div
                class="card"
                style={{
                  width: 20 + "rem",
                  height: 15 + "rem",
                  borderRadius: 1 + "vh",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{ fontSize: "1.5em", fontWeight: "bolder" }}
                  >
                    Card title
                  </h5>
                  <p
                    class="card-text"
                    style={{
                      paddingTop: 1.5 + "rem",
                      paddingBottom: 2 + "rem",
                    }}
                  >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. the bulk of the card's
                    content
                  </p>
                </div>
              </div>
              <div
                class="card"
                style={{
                  width: 20 + "rem",
                  height: 15 + "rem",
                  borderRadius: 1 + "vh",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{ fontSize: "1.5em", fontWeight: "bolder" }}
                  >
                    Card title
                  </h5>
                  <p
                    class="card-text"
                    style={{ paddingTop: 2 + "rem", paddingBottom: 2 + "rem" }}
                  >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. the bulk of the card's
                    content
                  </p>
                </div>
              </div>
              <div
                class="card"
                style={{
                  width: 20 + "rem",
                  height: 15 + "rem",
                  borderRadius: 1 + "vh",
                }}
              >
                <div class="card-body">
                  <h5
                    class="card-title"
                    style={{ fontSize: "1.5em", fontWeight: "bolder" }}
                  >
                    Card title
                  </h5>
                  <p
                    class="card-text"
                    style={{ paddingTop: 2 + "rem", paddingBottom: 2 + "rem" }}
                  >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. the bulk of the card's
                    content
                  </p>
                </div>
              </div>
              {/* <div className="card">
              <img className="card-img-top" src=".../100px180/" alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div> */}
                        
            </div>
          </div>
        </div>
      </div>
          
    </>
  );
};
