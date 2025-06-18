const express = require("express");
const multer = require("multer");
const cors = require("cors");

const isCorsEnabled = false;

const app = express();

const upload = multer(); // memory storage for multipart/form-data
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (isCorsEnabled) {
  const corsOptions = {
    origin: "http://127.0.0.1:5500", // allow this origin only
    optionsSuccessStatus: 200, // some legacy browsers choke on 204
  };
  app.use(cors(corsOptions));
}

app.get("/api/getData", (req, res) => {
  res.json({ message: "Data" });
  console.log("Data sent to client");
});

app.post("/api/postData", (req, res, next) => {
  const contentType = req.headers["content-type"] || "";

  // Form data handling
  if (contentType.startsWith("multipart/form-data")) {
    upload.none()(req, res, (err) => {
      console.log("FormData received:", req.body);
      res.json({ message: "Form data received", data: req.body });
    });
    return;
  }

  // JSON data handling
  if (contentType.startsWith("application/json")) {
    console.log("JSON received:", req.body);
    res.json({ message: "JSON data received", data: req.body });
    return;
  }
  res.status(415).json({ error: "Unsupported Content-Type" });
});

app.listen(3000, () => console.log("Server on http://localhost:3000"));
