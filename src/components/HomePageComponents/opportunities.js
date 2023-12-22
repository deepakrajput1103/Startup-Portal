import { useNavigate } from "react-router-dom";
const dataimg = require("../../images/Opportunities.png");
const Opportunities = () => {
  const navigate = useNavigate();
  const imgstyle = {
    marginTop: "5vh",
    marginLeft: "4.5%",
    borderRadius: "2vh",
    width: "90vw",
    marginBottom: "10vh",
    border: "none",
    cursor: "pointer",
  };
  const handleClick = () => {
    navigate("opportunities");
  };
  return (
    <div>
      <img src={dataimg} style={imgstyle} onClick={handleClick}></img>
    </div>
  );
};

export default Opportunities;
