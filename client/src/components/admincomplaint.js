import axios from "axios";
import { useEffect, useState } from "react";

const Admincomplainthandler = () => {
  const [allcomplaitsarr, setallcomplaintsarr] = useState([]);
  const getleaveapplications = async () => {
    const allleavesarr = await axios.get(
      "http://localhost:3001/user/complaint"
    );
    setallcomplaintsarr(allleavesarr.data.data);
    console.log(allleavesarr.data.data);
  };
  const channgestatus = async (id) => {
    const new_id = id;
    console.log(id);
    const url = `http://localhost:3001/user/complaint/${new_id}`;
    console.log(url);
    await axios.patch(url);
  };
  useEffect(() => {
    getleaveapplications();
  }, []);
  return (
    <div className="admin_leave_header">
      {allcomplaitsarr.map((value) => {
        return (
          <div className="adminleave">
            <div className="adminleavebody">
              <span>Room No:{value.roomno}</span>
              <span>Complaint:{value.complaint}</span>

              <span>Roll No:{value.rollno}</span>
              <span>
                <button
                  onClick={() => {
                    channgestatus(value["_id"]);
                  }}
                >
                  {value.solved ? "Completed" : "Complete"}
                </button>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Admincomplainthandler;
