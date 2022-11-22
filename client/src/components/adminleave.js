import axios from "axios";
import { useEffect, useState } from "react";

const Adminleavehandler = () => {
  const [allleavesarr, setallleavearr] = useState([]);
  const getleaveapplications = async () => {
    const allleavesarr = await axios.get("http://localhost:3001/user/leave");
    setallleavearr(allleavesarr.data.data);
    console.log(allleavesarr.data.data);
  };
  const channgestatus = async (id) => {
    const new_id = id;
    console.log(id);
    const url = `http://localhost:3001/user/leave/${new_id}`;
    console.log(url);
    await axios.patch(url);
  };
  useEffect(() => {
    getleaveapplications();
  }, []);
  return (
    <div className="admin_leave_header">
      {allleavesarr.map((value) => {
        return (
          <div className="adminleave">
            <div className="adminleavebody">
              <span>Roll No:{value.rollno}</span>
              <span>Room No:{value.roomno}</span>
              <span>Start Date:{value.startdate}</span>
              <span>End Date:{value.enddate}</span>
              <span>Reason:{value.reason}</span>
              <span>
                <button
                  onClick={() => {
                    channgestatus(value["_id"]);
                  }}
                >
                  {value.granted ? "Granted" : "Grant"}
                </button>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Adminleavehandler;
