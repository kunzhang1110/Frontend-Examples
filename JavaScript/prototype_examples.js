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
