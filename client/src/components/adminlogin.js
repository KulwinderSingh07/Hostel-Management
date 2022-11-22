import Axios from "axios";
import { useNavigate } from "react-router-dom";
const AdminloginHandler = () => {
  document.body.style.backgroundColor = "#232B2B";
  const newnavigate = useNavigate();
  const loginuser = async (e) => {
    e.preventDefault();
    const email = document
      .getElementsByClassName("login-email-input")
      .item(0).value;
    const password = document
      .getElementsByClassName("login-password-input")
      .item(0).value;
    const dataobject = {
      email: email,
      Password: password,
    };
    console.log(dataobject);
    const status = await Axios.post(
      "http://localhost:3001/adminlogin",
      dataobject
    );
    console.log(status.data.data);
    if (status.data.data === true) {
      newnavigate("/admin");
    } else {
      alert("you are not admin");
      newnavigate("/");
    }
  };
  return (
    <div className="leavebody">
      <div className="leaveform">
        <h2>LOGIN</h2>
        <form className="form">
          <label>Email</label>
          <input
            className="login-email-input"
            placeholder="Enter Registerd Emial..."
          ></input>
          <label>Password</label>
          <input
            className="login-password-input"
            placeholder="Enter Password..."
          ></input>
          <button
            onClick={(e) => {
              loginuser(e);
            }}
          >
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminloginHandler;
