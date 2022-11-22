import { useEffect, useState } from "react";
import Axios from "axios";

const Userdashboard = () => {
  document.body.style.backgroundColor = "#1F2937";
  const jwt_key = "sfjdsfldsflds34yughipy";
  const [profiledata, setprofiledata] = useState();
  const [toshow, settoshow] = useState(false);
  const str = JSON.parse(window.localStorage.getItem("logedin"));
  console.log(str);
  const datafetcher = async () => {
    const fetcheddata = await Axios.get(
      `http://localhost:3001/uploadfile/${str}`
    );
    console.log(fetcheddata.data.data);
    settoshow(true);
    setprofiledata(fetcheddata.data.data);
  };
  useEffect(() => {
    datafetcher();
  }, []);
  return (
    <nav>
      <div className="sidebar-content">
        <ul className="lists">
          <h1 className="userdashboardheading">User Dashboard</h1>
          <li className="list">
            <a className="nav-link" href="/user/leave">
              Leave Apply
            </a>
          </li>
          <li className="list">
            <a className="nav-link" href="/user/complaint">
              Complaint
            </a>
          </li>
          <li className="list">
            <a className="nav-link" href="/user/menu">
              Mess Menu
            </a>
          </li>
        </ul>
      </div>
      {toshow && (
        <div className="sowdetails">
          <div className="detailshead">
            <img src={profiledata.location3} className="profilephoto" />
          </div>
          <div className="particruserdetails">
            <div className="detailsbody">
              <div className="detailsbodyheader">
                <table>
                  <tr>
                    <td>Name:{profiledata.name}</td>
                    <td>Roll No:{profiledata.Rollno}</td>
                    <td>Mobile No:{profiledata.Mobileno}</td>
                  </tr>
                  <tr>
                    <td>Email:{profiledata.email}</td>
                    <td>Branch:{profiledata.branch}</td>
                    <td>Year:{profiledata.year}</td>
                  </tr>
                  <tr>
                    <td>Blood Group{profiledata.BloodGroup}</td>
                    <td>Present Class:{profiledata.presentclass}</td>
                  </tr>
                  <tr>
                    <td>Father Name{profiledata.Fathername}</td>
                    <td>Father Contact:{profiledata.Fatherphone}</td>
                    <td>Mother Name:{profiledata.Mothername}</td>
                  </tr>
                  <tr>
                    <td>Permanant Address{profiledata.Permanantaddress}</td>
                    <td>Guardian Address:{profiledata.Guardianaddress}</td>
                  </tr>
                  <tr>
                    <td>Mess Fee</td>
                    <td>Hostel Fee</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Userdashboard;
