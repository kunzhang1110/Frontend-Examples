// ----- Prototype Examples -----
function prototype_examples() {
  console.log("---- Function Definition ----");
  function Circle(color) {
    this.color = color;
    this.getColor = function () { return this.color; };
  }
  console.log(`${Circle.__proto__ == Function.prototype}`); //true
  console.log(`${Circle.prototype.constructor == Circle}`); //true
  console.log(`${Circle.prototype.__proto__ == Object.prototype}`); //true

  console.log("---- Call Circle without new ----");
  Circle("green"); //this in Circle() == globalThis
  console.log(globalThis.color); //green

  console.log("---- Call new Circle() ----");
  const redCircle = new Circle("Red");
  console.log(`${redCircle.__proto__ == Circle.prototype}`); //true
  console.log(redCircle.color); //Red

  console.log("---- Static method ----");
  Circle.StaticMethod = function () {
    console.log("Static Method - " + this.color); //undefined
  };
  Circle.StaticMethod(); //this == Circle;does not have .color

  console.log("---- Instance method ----");
  Circle.prototype.InstanceMethod = function () {
    console.log("Instance Method - " + this.color); //Red
  };
  redCircle.InstanceMethod();

  console.log("---- Object.create() ----");
  const ocCircle = Object.create(Circle); //Use Circle as proto
  ocCircle.StaticMethod(); // Can call Circle's static method

}
// prototype_examples();

function prototype_chain_examples() {
  console.log("---- Prototype Chain ----");
  function Circle(color) {
    this.color = color;
  }

  const redCircle = new Circle("Red");
  // redCircle.printColor(); //Error, not defined

  // Add method to prototype
  Circle.prototype.printColor = function () {
    console.log(this.color);
  }
  redCircle.printColor(); //Red
}
// prototype_chain_examples();


function inheritance_examples() {
  console.log("---- Prototype Inheritance ----");
  function Shape(color) {
    this.color = color;
  }

  Shape.prototype.printColor = function () { //superclass method
    console.log(this.color);
  };

  function Circle(radius, color) {
    Shape.call(this, color); // Call super constructor, this.color = color
    this.radius = radius;
  }

  //Creates an empty object with its internal [[Prototype]] to Shape.prototype
  Circle.prototype = Object.create(Shape.prototype)

  // Set constructor property back to Circle
  Circle.prototype.constructor = Circle;

  const blueCircle = new Circle(1, 'blue');
  blueCircle.printColor();
}
inheritance_examples();



