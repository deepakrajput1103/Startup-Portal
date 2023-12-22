import "./events.scss";

import Navbar from "../HomePageComponents/navbar";
import Footer from "../HomePageComponents/Footer";
import yogadayimg from "./event1.png"
import eventimg2 from "./event2.jpeg"
import eventimg3 from "./event3.jpeg"
import eventimg4 from "./event4.jpeg"

const Events = () => {
  

  return (
    <div>
      <Navbar></Navbar>
      <div className="post" style={{color:"#009470",paddingBottom:"0px",fontSize:"3.5em",fontWeight:"bolder"}}><p>Upcoming Events</p></div>
      
      <div className="post" style={{paddingBottom:"0px"}}>
        
        
        <div className="card" style={{ width: '30vw', marginRight:"4vw" ,borderRadius:"2vh" }}>
      <img className="card-img-top" src={yogadayimg} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Yoga Day Celebration</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary" style={{background:"#009470",border:"none",width:"100%"}}>I'm Interested</a>
      </div>
    </div>
    <div className="card" style={{ width: '30vw', marginLeft:"4vw" ,borderRadius:"2vh" }}>
      <img className="card-img-top" src={eventimg2}  alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Udaan 2021</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary" style={{background:"#009470",border:"none",width:"100%"}}>I'm Interested</a>
      </div>
    </div>
    </div>
    <div className="post">
    <div className="card" style={{ width: '30vw', marginRight:"4vw",borderRadius:"2vh" }}>
      <img className="card-img-top" src={eventimg3} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">2023 Calender Launch</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary" style={{background:"#009470",border:"none",width:"100%"}}>I'm Interested</a>
      </div>
    </div>
    <div className="card" style={{ width: '30vw', marginLeft:"4vw",borderRadius:"2vh" }}>
      <img className="card-img-top" src={eventimg4} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Ayurveda Event</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary" style={{background:"#009470",border:"none",width:"100%"}}>I'm Interested</a>
      </div>
    </div>
       
      </div>
      <Footer />
    </div>
  );
};

export default Events;
