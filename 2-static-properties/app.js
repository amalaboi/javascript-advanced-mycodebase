// Title
console.log("static properties & methods");

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  /**
   *  Static properties are unique only to the class they are declared in. 
   *  Static properties doesn't change from one instance to another so therefore best declared outside the constructor.
   *  static properties are not declared inside the constructor because
   *  this means every instances of the class will have the properties.
   *    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.static.species = "felis catus";
        }
    This way, let cat = new Cat("henry","lab"); we can do cat.species... 
    
    static properties are declared outside the constructor (as below):
    static variableName = value;// value don't change
   */

  static species = "felis catus";
  /** but with static.. we can't do cat.species if we go by let cat = new Cat(...,...) ,
   * it won't work.
   *  we can access static properties directly from the Cat class, e.g
   * Cat.species which will give us "felis catus"
   * in other languages, static properties are called class attribute.
   * Something that belongs to the class itself and to access it,
   * you use the name of the class.
   */

  // methods to print out class
  mew() {
    console.log(
      `My name is ${this.name} and I'm of the ${this.breed} breed .. hahaha!!!
        and my species, oh well.. something to do with being ${Cat.whatSpecies()}
      `
    );
  }

  // This is called static methods
  /**
   *
   * If you use keyword "this", in a static method, it refers to the class itself
   * In other languages, static method are called class methods.
   * To use static methods, same thing as properties... className.staticMethod()
   * e.g Cat.whatSpecies();
   * A good of application is the Math class. Math.random(), Math.floor() etc.
   */

  static whatSpecies() {
    return Cat.species;
  }

  static printClass() {
    console.log("class : ", this);
  }

  //Factory Function example...
  // function will create new Cat object
  // static methods are good for creating Factory function.
  static registerStray() {
    const names = [
      "Muffin",
      "Biscuit",
      "Sleepy",
      "Dodo",
      "Juju",
      "Princess Butterface",
    ];

    const name = choice(names);
    return new Cat(name, "Unknown"); //factory function will return this cat object...
  }
} // end of class Cat

let blue = new Cat("blue", "lab");

function choice(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

// Exercise on udemy
class ArrayUtils {
  constructor() {
    const errMessage = "ArrayUtils cannot be instantiated.";
    console.error(errMessage);
    throw new Error(errMessage);
  }

  static average(...list) {
    let av = list;
    let total = 0;
    let average = 0;
    let errMessage = "Array cannot be empty.";
    if (av.length === 0) {
      throw new Error(errMessage);
    } else if (av.length !== 0) {
      for (let i = 0; i < av.length; i++) {
        total = av[i] + total;
      }

      average = total / av.length;
      return Math.floor(average);
    }
  }

  static max(...list) {
    return Math.max(...list);
  }
}

console.log(ArrayUtils.average(1, 2, 3, 45));
console.log(ArrayUtils.max(1, 2, 3, 114, 54, 67));
