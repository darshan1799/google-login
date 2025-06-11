const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();
const PORT = process.env.PORT || 2000;
const authRoute = require("./Routes/authRoute");
const userInfo = require("./Routes/userInfo");
const cors = require("cors");

require("./Model/dbConnect");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5174", "http://localhost:5173"],
    credentials: true,
  })
);

app.use("/api", authRoute);
app.use("/api", userInfo);

app.listen(PORT, () => {
  console.log("App Listen On Port : " + PORT);
});
