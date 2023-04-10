require("dotenv").config();
const express = require("express");
const connectDB = require("./db/conn");
const port = process.env.PORT || 4000;
connectDB();
const FileRouter = require("./routes/files");
const ShowRouter = require("./routes/show");
const DownloadRouter = require("./routes/download");
const app = express();
const path = require("path");
const cors = require("cors");
// // Cors
//const corsOptions = {
//origin: process.env.ALLOWED_CLIENTS.split(","),
//   // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:3300']
//};

// // Default configuration looks like
// // {
// //     "origin": "*",
// //     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
// //     "preflightContinue": false,
// //     "optionsSuccessStatus": 204
// //   }

app.use(cors());
app.use(express.static("public"));

app.use(express.json());

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(FileRouter);
app.use(ShowRouter);
app.use(DownloadRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
