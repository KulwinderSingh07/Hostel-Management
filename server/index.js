const express = require("express");
const app = express();
const cors = require("cors");
const cookieparser = require("cookie-parser");
const corsoptions = {
  origin: "*",
};
app.use(cors(corsoptions));
app.use(cookieparser());
app.use(express.json());

app.get((_, res) => {
  res.send("server running...");
});
app.use("/uploadfile", require("./Routes/fileluploadroute"));
app.use("/user/leave", require("./Routes/leaveroute"));
app.use("/user/complaint", require("./Routes/complaintrouter"));
app.use("/messmenu", require("./Routes/messmenurouter"));
app.use("/login", require("./Routes/loginrouter"));
app.use("/adminlogin", require("./Routes/adminlogin"));
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
