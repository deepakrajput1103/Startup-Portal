import { Outlet, Link, useNavigate } from "react-router-dom";
const JoinCards = () => {
  const navigate = useNavigate();
  const card = {
    margin: "20%",
    width: "50%",
  };
  const btnstyle = {
    margin: "1vh",
    marginLeft: "0vh",
    height: "8vh",
    borderRadius: "1vh",
    fontWeight: "bold",
    fontSize: "1.2em",
    background: "white",
    border: "none",
    color: "#008c6a",
    padding: "2vh 3vh 2vh 3vh ",
  };
  const signupformStartup = () => {
    navigate("register/startup");
  };
  const signupforminvestor = () => {
    navigate("register/investor");
  };
  return (
    <div id="joinbtn">
      <div style={{ height: "50vh" }}>
        <div class="row">
          <div class="col-sm-6">
            <div
              class="card"
              style={{
                marginTop: "0%",
                marginLeft: "10%",
                marginRight: "5%",
                height: "40vh",
                padding: "5%",
                borderRadius: "20px",
                background: "#009470",
                color: "white",
                border: "none",
                opacity: "80%",
                width: "40vw",
                // paddingBottom: "20vh",
              }}
            >
              <div class="card-body">
                <h5 class="card-title" style={{ fontSize: "2.5em" }}>
                  Are you an investor ?
                </h5>
                <p class="card-text" style={{ fontSize: "1.5em" }}>
                  Discover and Invest in curated startups. Build your investment
                  portfolio.
                </p>
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={btnstyle}
                  onClick={signupforminvestor}
                >
                  Join as a Investor
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div
              class="card"
              style={{
                marginTop: "0%",
                marginRight: "10%",
                marginLeft: "5%",
                height: "40vh",
                padding: "5%",
                borderRadius: "20px",
                background: "#009470",
                color: "white",
                border: "none",
                opacity: "80%",
                width: "40vw",
              }}
            >
              <div class="card-body">
                <h5 class="card-title" style={{ fontSize: "2.5em" }}>
                  Are you a startup?
                </h5>
                <p class="card-text" style={{ fontSize: "1.5em" }}>
                  Fundraise in STEALTH with your curated list of investors &
                  access value-added capital.
                </p>
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={btnstyle}
                  onClick={signupformStartup}
                >
                  Join as a Startup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JoinCards;
