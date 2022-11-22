import axios from "axios";
import { useEffect, useState } from "react";
import { useAsyncValue } from "react-router-dom";

const Particulauser = () => {
  const [particularuser, setparticularuser] = useState({});
  const getparticularuser = async (id) => {
    const user = await axios.get(`http://localhost:3001/uploadfile/${id}`);
    console.log(user.data.data.location1);
    setparticularuser(user.data.data);
    console.log(particularuser);
  };
  const verifyudser = async () => {
    const id = particularuser["_id"];
    console.log(id);
    const verifier = await axios.patch(
      `http://localhost:3001/uploadfile/${id}`
    );
    console.log(verifier);
  };
  useEffect(() => {
    const location = window.location.href;
    const id = location.slice(41);
    console.log(id);
    getparticularuser(id);
  }, []);
  return (
    <div className="particruserdetails">
      <div className="detailshead">
        <img
          src={particularuser.location3}
          className="profilephoto"
          alt="couldn't load the image"
        />
      </div>
      <div className="detailsbody">
        <div className="detailsbodyheader">
          <table>
            <tr>
              <td>Name:{particularuser.name}</td>
              <td>Roll No:{particularuser.Rollno}</td>
              <td>Mobile No:{particularuser.Mobileno}</td>
            </tr>
            <tr>
              <td>Email:{particularuser.email}</td>
              <td>Branch:{particularuser.branch}</td>
              <td>Year:{particularuser.year}</td>
            </tr>
            <tr>
              <td>Blood Group{particularuser.BloodGroup}</td>
              <td>Present Class:{particularuser.presentclass}</td>
            </tr>
            <tr>
              <td>Father Name{particularuser.Fathername}</td>
              <td>Father Contact:{particularuser.Fatherphone}</td>
              <td>Mother Name:{particularuser.Mothername}</td>
            </tr>
            <tr>
              <td>Permanant Address{particularuser.Permanantaddress}</td>
              <td>Guardian Address:{particularuser.Guardianaddress}</td>
            </tr>
            <tr>
              <td>Mess Fee</td>
              <td>Hostel Fee</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="verificationdocs">
        <span>
          <img
            src={particularuser.location1}
            className="document1"
            alt="couldn't load the image"
          />
        </span>
        <span>
          <img
            src={particularuser.location2}
            className="document2"
            alt="couldn't load the image"
          />
        </span>
      </div>
      <div className="verifbutton">
        <button
          onClick={() => {
            verifyudser();
          }}
          className="verifierbutton"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default Particulauser;
