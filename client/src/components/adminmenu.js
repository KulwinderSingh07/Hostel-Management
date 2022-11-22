import axios from "axios";
import { useEffect, useState } from "react";

const Adminmenuhandler = () => {
  const [day, setday] = useState("");
  const [breakfast, setbreakfast] = useState("");
  const [lunch, setlunch] = useState("");
  const [dinner, setdinner] = useState("");
  const [dinnertiming, setdinnertiming] = useState("");
  const [lunchtiming, setlunchtiming] = useState("");
  const [breakfasttiming, setbreakfasttiming] = useState("");
  const makerequest = async (senddata) => {
    const url = `http://localhost:3001/messmenu`;
    console.log(url);
    await axios.patch(url, senddata);
  };

  const changemenu = (e) => {
    e.preventDefault();
    const sendata = {
      day: day,
      breakfast: breakfast,
      lunch: lunch,
      dinner: dinner,
      breakfasttiming: breakfasttiming,
      lunchtiming: lunchtiming,
      dinnertiming: dinnertiming,
    };
    makerequest(sendata);
  };
  return (
    <div className="leavebody">
      <div className="leaveform">
        <h2>Menu Update</h2>
        <form className="form">
          <label>Day</label>
          <input
            className="login-email-input"
            placeholder="Enter day..."
            onChange={(e) => {
              setday(e.target.value);
            }}
          ></input>
          <label>Breakfast</label>
          <input
            className="login-password-input"
            placeholder="Enter Breakfast..."
            onChange={(e) => {
              setbreakfast(e.target.value);
            }}
          ></input>
          <label>Lunch</label>
          <input
            className="login-password-input"
            placeholder="Enter Lunch..."
            onChange={(e) => {
              setlunch(e.target.value);
            }}
          ></input>
          <label>Dinner</label>
          <input
            className="login-password-input"
            placeholder="Enter Dinner..."
            onChange={(e) => {
              setdinner(e.target.value);
            }}
          ></input>
          <label>Breakfast Time</label>
          <input
            className="login-password-input"
            placeholder="Enter Breakfast Timing..."
            onChange={(e) => {
              setbreakfasttiming(e.target.value);
            }}
          ></input>
          <label>Lunch Time</label>
          <input
            className="login-password-input"
            placeholder="Enter Lunch Timing..."
            onChange={(e) => {
              setlunchtiming(e.target.value);
            }}
          ></input>
          <label>Dinner Time</label>
          <input
            className="login-password-input"
            placeholder="Enter Dinner Timing..."
            onChange={(e) => {
              setdinnertiming(e.target.value);
            }}
          ></input>
          <button
            onClick={(e) => {
              changemenu(e);
            }}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Adminmenuhandler;
