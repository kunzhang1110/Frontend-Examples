// --- expressRouter example ---
function expressRouter_example() {
  const express = require("express");
  const app = express();
  const exampleRouter = require("./expressRouter_example.js");
  app.use("/example", exampleRouter);
  app.listen(3000);
}
expressRouter_example();

function middleWare_example() {
  const express = require("express");
  const app = express();

  const myLogger = function (req, res, next) {
    console.log(`${req.method} logged`);
    next();
  };

  app.use(myLogger);

  app.get("/", function (req, res) {
    res.send("Hello World!");
  });

  app.listen(3000);
}

function cors_example() {
  var express = require("express");
  var appA = express();
  var appB = express();
  var cors = require("cors");

  var html = `
          <p id='res'>Empty</p>
          <button onclick='sendCrossOriginRequest()'>Get</button>
          <script>
          function sendCrossOriginRequest() {
              const xhttp = new XMLHttpRequest();
              xhttp.onload = function() {
                  document.getElementById('res').innerHTML = this.responseText;
              }
              xhttp.open('GET', 'http://localhost:5000/get_password');
              xhttp.send();
          }
          </script>
      `;

  appA.get("/", function (req, res) {
    res.send(html);
  });

  // appB.use(cors()); //all origin allowed

  var corsOptions = {
    origin: ["http://localhost:2000", "http://localhost:3000"], //allow this origin
    optionsSuccessStatus: 200,
  };

  appB.get("/get_password", cors(corsOptions), function (req, res) {
    res.send("Password is abc"); //sensitive data
  });

  appA.listen(3000);
  appB.listen(5000);
}
