import Axios from "axios";

const Signuphandler = () => {
  const signupuser = async (e) => {
    e.preventDefault();
    const userdata = {
      Name: document.getElementsByClassName("signup-name-input").item(0).value,
      Email: document.getElementsByClassName("signup-email-input").item(0)
        .value,
      Password: document.getElementsByClassName("signup-password-input").item(0)
        .value,
      Confirm_Password: document
        .getElementsByClassName("signup-cpassword-input")
        .item(0).value,
    };
    console.log(userdata);
    await Axios.post("", userdata);
  };
  return (
    <div className="signup-form">
      <div className="signup-form-handler">
        <form className="signupform">
          <label>Name</label>
          <input className="signup-name-input" placeholder="Name"></input>
          <label>Email</label>
          <input className="signup-email-input" placeholder="Email"></input>
          <label>Password</label>
          <input
            className="signup-password-input"
            placeholder="Password"
          ></input>
          <label>Confrim Password</label>
          <input
            className="signup-cpassword-input"
            placeholder="Re-Enter Password"
          ></input>
          <button
            onClick={(e) => {
              signupuser(e);
            }}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signuphandler;
