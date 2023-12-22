import { Outlet, Link, useNavigate } from "react-router-dom";
import img1 from "../../images/Frame 1.png";
import img2 from "../../images/Frame 2.png";
import img3 from "../../images/Frame 3.png";

const Carousel = () => {
  const navigate = useNavigate();
  // const handleExploreClick = () => {
  //   navigate("explore");
  // };
  const handleEventClick = () => {
    navigate("events");
  };
  const handleExploreClick = () => {
    navigate("explore");
  };
  return (
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide"
      data-bs-ride="carousel"
      // data-interval="100"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" style={{ height: "100%" }}>
          <img src={img2} class="d-block w-100" alt="..." />
        </div>
        <div
          class="carousel-item"
          style={{ height: "100%", cursor: "pointer" }}
        >
          {/* <a href="/explore"> */}
          <img
            src={img3}
            class="d-block w-100"
            alt="..."
            onClick={handleExploreClick}
            // onClick={handleExploreClick}
          />
          {/* </a> */}
        </div>
        <div
          class="carousel-item"
          style={{ height: "100%", cursor: "pointer" }}
        >
          <img
            src={img1}
            class="d-block w-100"
            alt="..."
            onClick={handleEventClick}
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Carousel;
