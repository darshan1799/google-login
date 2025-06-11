const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connected SuccessFully!");
  })
  .catch((err) => {
    console.log(err);
    console.log("Error In Db Connection!");
  });
