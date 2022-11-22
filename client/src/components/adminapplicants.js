import axios from "axios";
import { useEffect, useState } from "react";

const Allaplicantshandler = () => {
  const [allapplicantsarr, setallapplicantsarr] = useState([]);
  const getallaplicants = async () => {
    const applicantarr = await axios.get("http://localhost:3001/uploadfile");
    console.log(applicantarr.data.data);
    setallapplicantsarr(applicantarr.data.data);
  };
  const lookparticulardocument = (id) => {
    window.location.href = `http://localhost:3000/admin/allaplicants/${id}`;
  };
  useEffect(() => {
    getallaplicants();
  }, []);
  return (
    <div className="admin_applicant_header">
      {allapplicantsarr.map((value) => {
        return (
          <div className="adminleave">
            <div className="adminleavebody">
              <span>Roll No:{value.Rollno}</span>
              <span>Name:{value.name}</span>
              <span>Mobile No:{value.Mobileno}</span>
              <span>
                <button
                  onClick={() => {
                    lookparticulardocument(value["_id"]);
                  }}
                >
                  {value.status ? "Verified" : "Check"}
                </button>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Allaplicantshandler;
