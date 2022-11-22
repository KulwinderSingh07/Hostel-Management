import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./components/userchoice";
import Signuphandler from "./components/signup";

import Fileuploader from "./components/uploaddocuments";
import Useroptions from "./components/useroptions";
import Leavehandler from "./components/leaveapplication";
import LoginHandler from "./components/user-login";
import Userdashboard from "./components/user-dashboard";
import Complainthandler from "./components/complaintapply";
import Menugetter from "./components/messmenu";
import Admindashboard from "./components/admin-dashboard";
import Adminleavehandler from "./components/adminleave";
import Admincomplainthandler from "./components/admincomplaint";
import Adminmenuhandler from "./components/adminmenu";
import Allaplicantshandler from "./components/adminapplicants";
import Particulauser from "./components/adminparticularapplicant";
import AdminloginHandler from "./components/adminlogin";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Mainpage />} />
            <Route exact path="/useroptions" element={<Useroptions />} />
            <Route exact path="/docverify" element={<Fileuploader />} />
            <Route exact path="/userlogin" element={<LoginHandler />} />
            <Route exact path="/user-signup" element={<Signuphandler />} />
            <Route exact path="/user/leave" element={<Leavehandler />} />
            <Route exact path="/userdashboard" element={<Userdashboard />} />
            <Route exact path="/user/menu" element={<Menugetter />} />

            <Route
              exact
              path="/user/complaint"
              element={<Complainthandler />}
            />
            <Route exact path="/admin" element={<Admindashboard />} />
            <Route exact path="/adminlogin" element={<AdminloginHandler />} />
            <Route exact path="/admin/leave" element={<Adminleavehandler />} />
            <Route
              exact
              path="/admin/complaint"
              element={<Admincomplainthandler />}
            />
            <Route exact path="/admin/menu" element={<Adminmenuhandler />} />
            <Route
              exact
              path="/admin/allaplicants"
              element={<Allaplicantshandler />}
            />
            <Route
              exact
              path="/admin/allaplicants/:key"
              element={<Particulauser />}
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
