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
  // --- Promise Chaining ---
  p1.then((value) => console.log(value)).catch((value) => console.log(value)); //shorthand
  p1.then(
    function (success_result) {
      console.log(success_result);
    },
    function (error_result) {
      console.log(error_result);
    }
  );
  //  --- .then() ---
  //.then() handler returns value
  function handlerReturnValue() {
    p1.then((result) => {
      return result + " Done";
    }).then((result) => {
      console.log(result);
    });
  }

  //.then() handler returns new Promise
  function handlerReturnNewPromise() {
    p1.then((result) => {
      return new Promise((resolve, reject) => {
        resolve(result + "Done");
      });
    }).then((result) => {
      console.log(result);
    });
  }
  // handlerReturnNewPromise()

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
// promise_examples();
