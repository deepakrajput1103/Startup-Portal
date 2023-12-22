const dataimg = require("../../images/successStories.png");
const SuccessStories = () => {
  const imgstyle = {
    marginTop: "5vh",
    marginLeft: "4.5%",
    borderRadius: "2vh",
    width: "90vw",
    marginBottom: "10vh",
    border: "none",
    // cursor: "pointer",
  };
  return (
    <div>
      <img src={dataimg} style={imgstyle}></img>
    </div>
  );
};

export default SuccessStories;
