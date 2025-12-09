// ----- EventEmitter Example -----
function eventEmitter_example() {
  const EventEmitter = require("events");

  class MyEmitter extends EventEmitter { }
  const myEmitter = new MyEmitter();

  //.on(eventName, listener([...data]))
  myEmitter.on('some_event', function (x, y) {
    console.log(x, y, this === myEmitter); // Prints: a b true
  });

  //.emit(eventName, […data])
  myEmitter.emit('some_event', 'a', 'b');
}
// eventEmitter_example()

// ----- Process Example -----
function process_example() {
  process.stdout.write("Enter:");
  process.stdin.on("data", (input) => {
    // print all argv
    process.argv.map((val, index) => {
      console.log(`${index}: ${val}`);
    });
    // print input
    console.log(input.toString().trim());
    process.exit();
  });
}
// process_example();

// ----- File System Example -----
async function file_system_Example() {
  const fsp = require("fs").promises;

  try {
    // Read the contents of the current directory
    const files = await fsp.readdir("./");
    console.log('Files in directory:', files);

    // Create a new directory
    await fsp.mkdir('tmp', { recursive: true });

    // Write to a file
    const initialContent = "Hello, world!";
    await fsp.writeFile('tmp/exp_fsd.md', initialContent, 'utf8');

    // Append to the file
    const appendContent = `\n======`;
    await fsp.appendFile('tmp/exp_fsd.md', appendContent, 'utf8');
    // Read the file contents
    const data = await fsp.readFile('tmp/exp_fsd.md', 'utf8');
    console.log('File contents read:', data);


  } catch (err) {
    console.error('Error during file operations:', err);
  }

  // ----- Stream Example -----
  try {
    const fs = require("fs");
    const writeStream = fs.createWriteStream("tmp/exp_stream.md", "UTF-8");
    writeStream.write("something");
    writeStream.end();

    const readStream = fs.createReadStream('tmp/exp_stream.md', 'utf8');
    // for await...of consumes chunks until the stream ends
    for await (const chunk of readStream) {
      console.log(chunk.toString('utf8'));
    }
  } catch (err) {
    console.error('Stream error:', err.message);
  }
}
file_system_Example();




