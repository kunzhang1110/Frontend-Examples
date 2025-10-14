// ----- EventEmitter Example -----
function eventEmitter_example() {
  const EventEmitter = require("events");

  class MyEmitter extends EventEmitter { }
  const myEmitter = new MyEmitter();

  myEmitter.on("some_event", (a, b) => {
    console.log(a, b, this); // Prints: a b {}
  });
  myEmitter.emit("some_event", "a", "b");
}
// eventEmitter_example()

// ----- Process Example -----
function process_example() {
  process.argv.forEach((element) => {
    console.log(element); //one two three
  });

  process.stdout.write("Enter:");
  process.stdin.on("data", (input) => {
    console.log(input.toString().trim());
    process.exit();
  });
}

// ---- readline Example -----
function process_example() {
  const readline = require("readline");

  const rl = readline.createInterface(process.stdin, process.stdout);

  rl.question("How are you? ", (answer) => {
    console.log(`I am ${answer} too`);
  });

  rl.setPrompt("'How are you? ");
  rl.prompt();
  rl.on("line", (saying) => {
    console.log(saying.trim());
  });
}

// ----- Read/Write Files -----
function readWriteFiles_example() {
  const fs = require("fs");

  var files = fs.readdirSync("./"); //sync
  fs.readdir("./", function (err, files) {
    //async
    console.log(files);
  });

  fs.writeFile("demo.md", md.trim(), (err) => {
    if (err) {
      console.log("file creating error");
    }
  });

  fs.appendFile("demo.md", `======`, (err) => {
    if (err) {
      console.log("file appending error");
    }
  });

  fs.readFile("demo.md", function (err, data) {
    console.log(data);
  });

  var new_directory = "lib";
  if (!fs.existsSync(new_directory)) {
    fs.mkdir(new_directory, function (err) {
      if (err) {
        console.log("directory exists");
      }
    });
  }

  // --- stream IO ---
  var stream = fs.createReadStream("./demo.md", "UTF-8");
  var data = "";
  stream.once("data", () => {
    console.log("Start Reading\n");
  });

  stream.on("data", (chunck) => {
    data += chunck;
  });

  stream.on("end", (chunck) => {
    console.log("\n Finish Reading\n");
  });

  stream = fs.createWriteStream("./demo.md", "UTF-8");
  stream.write("something");
  stream.close();
}

// ----- HTTP Module -----
function httpModule_example() {
  const https = require("https");
  const fs = require("fs");

  const options = {
    hostname: "example.com",
    port: 443, //https prot
    path: "/todos",
    method: "GET",
  };

  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on("data", (data) => {
      //data is a stream object
      responseBody += data;
      process.stdout.write(data);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.end();

  // --- Server Example ---
  https
    .createServer((request, response) => {
      if (request.method == "GET") {
        response.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./public/form.html", "UTF-8").pipe(response);
      } else if (request.method == "POST") {
        var body = "";
        request.on("data", (chunck) => {
          body += chunck;
        });
        request.on("end", () => {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.end(`
                <!DOTYPE html>
                <html>
                    <head>
                        <title>Form Result</title>
                    </head>
                    <body>
                        <p>${body}</p>
                    </body>
                </html>
            `);
        });
      }
    })
    .listen(3000);
}



