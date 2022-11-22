import { useState } from "react";
import axios from "axios";
const Newfileuploader = () => {
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [name, setname] = useState("");
  const [presentclass, setpresentclass] = useState("");
  const [branch, setbranch] = useState("");
  const [year, setyear] = useState("");
  const [rollno, setrollno] = useState("");
  const [dob, setdob] = useState("");
  const [bloodgroup, setbloodgroup] = useState("");
  const [mobileno, setmobileno] = useState("");
  const [email, setemail] = useState("");
  const [fathername, setfathername] = useState("");
  const [fatherphone, setfatherphone] = useState("");
  const [mothername, setmothername] = useState("");
  const [motherphone, setmotherphone] = useState("");
  const [permanentaddress, setpermanentaddress] = useState("");
  const [guardianaddress, setguardianaddress] = useState("");
  const [hostelfee, sethostelfee] = useState("");
  const [messfee, setmessfee] = useState("");
  const submit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image1", file1);
    formData.append("image2", file2);
    formData.append("image3", file3);
    formData.append("name", name);
    formData.append("presentclass", presentclass);
    formData.append("branch", branch);
    formData.append("year", year);
    formData.append("Rollno", rollno);
    formData.append("DOB", dob);
    formData.append("BloodGroup", bloodgroup);
    formData.append("Mobileno", mobileno);
    formData.append("email", email);
    formData.append("Fathername", fathername);
    formData.append("Fatherno", fatherphone);
    formData.append("Mothername", mothername);
    formData.append("Motherphone", motherphone);
    formData.append("Permanentaddress", permanentaddress);
    formData.append("Gurdianaddress", guardianaddress);
    formData.append("Hostelfee", hostelfee);
    formData.append("Messfee", messfee);

    const result = await axios.post(
      "http://localhost:3001/uploadfile",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(formData.values());
  };

  const fileSelected1 = (event) => {
    const file = event.target.files[0];
    setFile1(file);
  };
  const fileSelected2 = (event) => {
    const file = event.target.files[0];
    setFile2(file);
  };
  const fileSelected3 = (event) => {
    const file = event.target.files[0];
    setFile3(file);
  };
  return (
    <div className="leavebody">
      <div className="leaveform">
        <h2>Hostel Application</h2>
        <form onSubmit={submit} className="form">
          <label>NAME</label>
          <input
            className="name"
            type="text"
            onChange={(e) => {
              setname(e.target.value);
            }}
          ></input>

          <label>CLASS</label>
          <input
            type="text"
            className="presentclass"
            onChange={(e) => {
              setpresentclass(e.target.value);
            }}
          ></input>

          <label>BRANCH</label>
          <input
            type="text"
            className="branch"
            onChange={(e) => {
              setbranch(e.target.value);
            }}
          ></input>

          <label>YEAR</label>
          <input
            type="text"
            className="year"
            onChange={(e) => {
              setyear(e.target.value);
            }}
          ></input>
          <label>ROLL NO</label>
          <input
            type="text"
            className="rollno"
            onChange={(e) => {
              setrollno(e.target.value);
            }}
          ></input>

          <label>DOB</label>
          <input
            className="dob"
            type="text"
            onChange={(e) => {
              setdob(e.target.value);
            }}
          ></input>

          <label>BLOOD GROUP</label>
          <input
            className="bloodgroup"
            type="text"
            onChange={(e) => {
              setbloodgroup(e.target.value);
            }}
          ></input>

          <label>MOBILE NO</label>
          <input
            className="mobileno"
            type="text"
            onChange={(e) => {
              setmobileno(e.target.value);
            }}
          ></input>

          <label>E-MAIL</label>
          <input
            className="email"
            type="text"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          ></input>

          <label>FATHER'S NAME</label>
          <input
            className="fathername"
            type="text"
            onChange={(e) => {
              setfathername(e.target.value);
            }}
          ></input>

          <label>FATHER'S MOBILE NO</label>
          <input
            className="fatherphone"
            type="text"
            onChange={(e) => {
              setfatherphone(e.target.value);
            }}
          ></input>

          <label>MOTHER'S NAME</label>
          <input
            className="mothername"
            type="text"
            onChange={(e) => {
              setmothername(e.target.value);
            }}
          ></input>

          <label>MOTHER'S MOBILE NO</label>
          <input
            className="motherphone"
            onChange={(e) => {
              setmotherphone(e.target.value);
            }}
            type="text"
          ></input>

          <label>PERMANENT ADDRESS</label>
          <input
            type="text"
            onChange={(e) => {
              setpermanentaddress(e.target.value);
            }}
            className="permanentaddress"
          ></input>

          <label>GUARDIAN ADDDRESS</label>
          <input
            type="text"
            className="gurdianaddress"
            onChange={(e) => {
              setguardianaddress(e.target.value);
            }}
          ></input>

          <label>ACADEMIC/HOSTEL/FEE</label>
          <input
            type="text"
            className="hostelfee"
            onChange={(e) => {
              sethostelfee(e.target.value);
            }}
          ></input>
          <label>MESS FEE</label>
          <input
            type="text"
            className="messfee"
            onChange={(e) => {
              setmessfee(e.target.value);
            }}
          ></input>
          <labe>Mess Fee Screenshot</labe>
          <input onChange={fileSelected1} type="file"></input>
          <labe>Hostel Fee Screenshot</labe>
          <input onChange={fileSelected2} type="file"></input>
          <labe>Profile Picture</labe>
          <input onChange={fileSelected3} type="file"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Newfileuploader;
