// ----- Promise Examples-----
function promise_examples() {
  let p1 = new Promise((resolve, reject) => {
    let downloadComplete = { status: 1, content: "Movie" };
    if (downloadComplete.status) {
      resolve(downloadComplete.content);
    } else {
      reject("Error");
    }
  });

  //.then() handler returns value
  function handlerReturnValue() {
    p1.then((result) => {
      return result + " Done";
    }).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      console.log("Promise Completed");
    });;
  }
  handlerReturnValue();

  //.then() handler returns new Promise
  function handlerReturnNewPromise() {
    p1.then((result) => {
      return new Promise((resolve, reject) => {
        // async operation
        resolve(result + "Done");
      });
    }).then((result) => {
      console.log(result);
    });
  }
  handlerReturnNewPromise()

  // --- async await ---
  async function asyncFuncton() {
    try {
      let result = await p1;
      console.log("Async " + result);
    } catch (error) {
      console.log("Async " + error);
    }
  }
  asyncFuncton();
}
promise_examples();



//--

function Circle(color) {
  this.color = color;
  this.getColor = function () { return this.color; };
}
const redCircle = new Circle("Red");