// ----- Prototype Examples -----
function prototype_examples() {
  //create a function
  let AnyFunc = function () {
    console.log("In AnyFunc");
    this.name = "Kun";
    return this.name;
  };
  console.log(`${AnyFunc.__proto__ == Function.prototype}`);
  console.log(`${AnyFunc.prototype.constructor == AnyFunc}`);
  console.log(`${AnyFunc.prototype.__proto__ == Object.prototype}`);

  //call AnyFunc without new
  AnyFunc(); //this in AnyFun() == globalThis
  console.log(globalThis.name);

  //create an object with new -- AnyFun() as constructor
  let foo = new AnyFunc();
  console.log(`${foo.__proto__ == AnyFunc.prototype}`);
  console.log(foo.name);

  //static method
  AnyFunc.StaticMethodName = function () {
    console.log("Static Method - " + this.name);
  };
  AnyFunc.StaticMethodName(); //this == AnyFunc; AnyFunc does not have .name but its __proto__ Function.prototype does

  //instance method
  AnyFunc.prototype.InstanceMethodName = function () {
    console.log("Instance Method - " + this.name);
  };
  foo.InstanceMethodName();

  //use Object.create
  let bar = Object.create(AnyFunc); //AnyFunc as proto
  bar.StaticMethodName();
  bar.__proto__(); //

  //Add properties to .prototype
  function Bag(...list) {
    this.values = list;
  }
  Bag.prototype = {
    ...Bag.prototype,
    get Count() {
      return this.values.length;
    },
  };
  Bag.prototype.PI = 3.14;
  let a = new Bag(1, 2, 3);
  console.log(a.Count);
  console.log(a.PI);
}

// ----- Multiple prototype inheritance -----
function multipleInheritance() {
  function A() {}
  function B() {}
  A.prototype.A = 1;
  B.prototype.B = 2;
  function Child() {}
  Child.prototype = { ...A.prototype, ...B.prototype };
  let c = new Child();
  console.log(c.B);
}

// ----- Class Mix-in -----
function classMixins() {
  //
  let mixinA = function (Base) {
    return class extends Base {
      mixinAMethod() {
        console.log("mixinA");
      }
    };
  };

  let mixinB = function (Base) {
    return class extends Base {
      mixinBMethod() {
        console.log("mixinB");
      }
    };
  };

  class Foo {}
  class Bar extends mixinA(mixinB(Foo)) {}
  new Bar().mixinAMethod();
  new Bar().mixinBMethod();
}

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

// ----- Iterator Example -----
function iterator_example() {
  function makeIterator(start, end) {
    let nextValue = start;

    const rangeIterator = {
      next() {
        if (nextValue < end) {
          let result = { value: nextValue, done: false };
          nextValue++;
          return result;
        }
        return { value: null, done: true };
      },
    };

    return rangeIterator;
  }

  const rangeIterator = makeIterator(1, 5);
  let result = rangeIterator.next();
  while (!result.done) {
    console.log(result.value);
    result = rangeIterator.next();
  }
}

// ----- Generator Example -----
function generator_example() {
  function* makeIterator(start, end) {
    for (let i = start; i < end; i++) {
      yield i;
    }
    return null;
  }

  const rangeGenerator = makeIterator(1, 5);
  let result = rangeGenerator.next();
  while (!result.done) {
    console.log(result.value);
    result = rangeGenerator.next();
  }
}

// ----- Iterable Example -----
function iterable_example() {
  function* makeIterator() {
    //generator function
    yield 1;
    yield 2;
  }

  const oneTimeIterable = makeIterator(); //an iterator is iterable
  console.log(oneTimeIterable[Symbol.iterator]() == oneTimeIterable);

  const repeatableIterable = {
    [Symbol.iterator]: makeIterator,
  };

  for (let value of oneTimeIterable) {
    console.log(value);
  }
}
iterable_example()

