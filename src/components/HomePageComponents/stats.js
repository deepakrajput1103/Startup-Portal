const dataimg = require("../../images/stats.png");
const Stats = () => {
  const imgstyle = {
    marginTop: "5vh",
    marginLeft: "3%",
    borderRadius: "2vh",
    width: "93vw",
    marginBottom: "10vh",
  };
  return (
    <div>
      <img src={dataimg} style={imgstyle}></img>
    </div>
  );
};

export default Stats;
