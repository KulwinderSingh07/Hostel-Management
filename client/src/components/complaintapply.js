import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Complainthandler = () => {
  const newnavigate = useNavigate();
  const [Complaint, setComplaint] = useState("");
  const [rollno, setrollno] = useState("");
  const [roomno, setroomno] = useState("");
  const requrest = async (senddata) => {
    console.log(2);
    console.log(senddata);
    const data = await Axios.post(
      "http://localhost:3001/user/complaint",
      senddata
    );
    console.log(3);
    console.log(data);
    alert("complaint has been send");
    newnavigate("/userdashboard");
  };

  const apply = (e) => {
    e.preventDefault();
    const senddata = {
      complaint: Complaint,
      rollno: rollno,
      roomno: roomno,
    };
    console.log(1);
    console.log(senddata);
    requrest(senddata);
  };
  return (
    <div className="leavebody">
      <div className="complaintform">
        <h2>Complaint Application</h2>
        <form className="form">
          <label>Complaint</label>
          <input
            type="text"
            onChange={(e) => {
              setComplaint(e.target.value);
            }}
            className="complaintbox"
          ></input>
          <label>Room No</label>
          <input
            type="text"
            onChange={(e) => {
              setroomno(e.target.value);
            }}
          ></input>
          <label>Roll No</label>
          <input
            type="text"
            onChange={(e) => {
              setrollno(e.target.value);
            }}
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

export default Complainthandler;
