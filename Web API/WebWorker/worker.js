var i = 0;

function tick() {
  i = i + 1;
  postMessage(i); //Post message back to main thread
}

const intervalId = setInterval(tick, 500);

onmessage = function (event) { //Listen for messages from main thread
  if (event.data === 'stop') {
    console.log('Worker stopping...');
    clearInterval(intervalId);
  }
}



const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // request finished and response is ready
    console.log(this.responseText);
  }
};

xhr.open("POST", "https://example.com", true);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({ username: "myName" }));