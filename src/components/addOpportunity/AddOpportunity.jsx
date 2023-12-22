import "./addOpportunity.scss";
import CloseIcon from "@mui/icons-material/Close";

const addOpportunity = ({ setOpenupdate }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setOpenupdate(false);
  };

  return (
    <div className="update">
      <div className="wrapper">
        <div className="headerr">
          <h1>Add Opportunity</h1>
          <CloseIcon className="close" onClick={() => setOpenupdate(false)} />
        </div>
        <form>
          <input type="text" placeholder="Job Title" name="title" />
          <input type="text" placeholder="#Openings" name="openings" />

          <textarea placeholder="Job Desciption" name="description" rows="3" />
          <input type="text" placeholder="Job Offer" name="offer" />
          <input type="number" placeholder="Experience" name="experience" />
          <input type="date" placeholder="Start Date" name="start" />

          <button onClick={handleClick}>Update</button>
        </form>
      </div>
    </div>
  );
};

export default addOpportunity;
