/**
 * Javascript provides special methods, termed "getters" and "setters", which allow you to define the ways to retrieve of change the values of object properties respectively.
 */

// Getters : allows us to retrieve the value of an object's property... When we call getters, we don't call them as a method/function, we call them like a property.. e.g

class Circle {
  static allowedColors = new Set(["red", "green", "blue"]);

  constructor(radius, color) {
    // this._radius = radius;
    this.setRadius(radius);
    this.setColor(color);
  }

  setColor(newColor) {
    if (Circle.allowedColors.has(newColor)) {
      this._color = newColor;
    } else {
      throw new Error("That colour is NOT allowed!");
    }
  }

  setRadius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative!");
    } else {
      this._radius = value;
    }
  }
  // Getter for the diameter
  // get property_name .. this way we can call the get method as circle.diameter. You will be get an error if you call getter with a parenthesis..
  //circle.diameter() will give you error..
  // Goal of getters and setters is.. to act like a object PROPERTY, but have function logic behind it.

  get diameter() {
    return this._radius * 2;
  }

  get radius() {
    return this._radius;
  }

  get color() {
    return this._color;
  }

  // Setters allow you to set the value of an object's property.
  // Setter for the radius
  // to call a setter we do this
  // circle.radius = 11; Remember getters and setters are treated as properties with function logic behind. Don't call Setters like circle.radius() = 11, this is an Error!!!
  set radius(value) {
    this.setRadius(value);
  }

  // Setters for color.. ["red","green","blue"] are the only color available to set.
  set color(newColor) {
    this.setColor(newColor);
  }
} // end of class

const radius = 5;
const circle = new Circle(radius, "red");
console.log(circle.diameter); //here we called the getter method as a property.
//The getter method is treated like a property called diameter.
console.log(circle.radius);
