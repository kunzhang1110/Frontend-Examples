const express = require("express");
const multer = require("multer");
const cors = require("cors");

const isCorsEnabled = false; // toggle CORS

const app = express();

const upload = multer(); // memory storage for multipart/form-data
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (isCorsEnabled) {
  const corsOptions = {
    origin: "http://127.0.0.1:5500",// can be a string/regex/array.
    optionsSuccessStatus: 200,// Status code for successful Preflight requests
  };
  app.use(cors(corsOptions));
  // Alternatively, use app.use(cors()); to allow ALL origins (*)
}

app.get("/api/getData", (req, res) => {
  console.log("GET request received");
  res.json({ message: "Data" });
  console.log("GET request responded");
});

app.post("/api/postData", (req, res, next) => {
  const contentType = req.headers["content-type"] || "";

  // Form data handling
  if (contentType.startsWith("multipart/form-data")) {
    upload.none()(req, res, (err) => {
      console.log("FormData received:", req.body);
      res.json({ message: "Form data received", data: req.body });
      console.log("FormData request responded");
    });
    return;
  }

  // JSON data handling
  if (contentType.startsWith("application/json")) {
    console.log("JSON received:", req.body);
    res.json({ message: "JSON data received", data: req.body });
    console.log("JSON request responded");
    return;
  }
  res.status(415).json({ error: "Unsupported Content-Type" });
});

app.listen(3000, () => console.log("Server on http://localhost:3000"));
