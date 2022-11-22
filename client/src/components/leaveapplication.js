import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Leavehandler = () => {
  const newnavigate = useNavigate();
  const [recievermail, setrecieveremail] = useState("");
  const [startdate, setstartdata] = useState("");
  const [enddate, setenddate] = useState("");
  const [reason, setreason] = useState("");
  const [roomno, setroomno] = useState("");
  const requrest = async (senddata) => {
    console.log(2);
    console.log(senddata);
    const data = await Axios.post("http://localhost:3001/user/leave", senddata);
    console.log(3);
    console.log(data);
    alert("mail has been send");
    newnavigate("/userdashboard");
  };

  const apply = (e) => {
    e.preventDefault();
    const senddata = {
      recievermail: recievermail,
      startdate: startdate,
      enddate: enddate,
      roomno: roomno,
      reason: reason,
    };
    console.log(1);
    console.log(senddata);
    requrest(senddata);
  };
  return (
    <div className="leavebody">
      <div className="leaveform">
        <h2>Leave Application</h2>
        <form className="form">
          <label>Email To</label>
          <input
            type="text"
            onChange={(e) => {
              setrecieveremail(e.target.value);
            }}
            placeholder="Enter Email..."
          ></input>
          <label>Start Date</label>
          <input
            type="text"
            onChange={(e) => {
              setstartdata(e.target.value);
            }}
            placeholder="Enter Leave Start Date..."
          ></input>
          <label>End Date</label>
          <input
            type="text"
            onChange={(e) => {
              setenddate(e.target.value);
            }}
            placeholder="Enter Leave End Date..."
          ></input>
          <label>Reason</label>
          <input
            type="text"
            onChange={(e) => {
              setreason(e.target.value);
            }}
            className="reasonbox"
            placeholder="Enter Reason For Leave ..."
          ></input>
          <label>Room No</label>
          <input
            type="text"
            onChange={(e) => {
              setroomno(e.target.value);
            }}
            placeholder="Enter Room No..."
          ></input>
          <button
            onClick={(e) => {
              apply(e);
            }}
          >
            Apply
          </button>
        </form>
      </div>
    </div>
  );
};

export default Leavehandler;
