require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.MONGO_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection is Successfull ..........");
    })
    .catch((e) => {
      console.log(e);
      console.log("No connection");
    });
}

module.exports = connectDB;
