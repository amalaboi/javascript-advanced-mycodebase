const person = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    return "LA LA LA!!!";
  },
};

console.log(person.sing());
let personSing = person.sing;
console.log(personSing());
/**
 * In this example, we create a person object,
 * and assign to it a sing function. The function returns LA LA LA!!!. The result is fully shown in the console.log. In this case, we assigned person.sing to personSing variable and console.log the output which gives us LA LA LA!!!
 * Now Below, we present the same object with slight modification to the sing function...
 */

const person2 = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    return `${this.name} sings LA LA LA!!!`;
  },
};

console.log(person2.sing());
let personSing2 = person2.sing;
console.log(personSing2());

/**
 * This time we modified the sing function to include the object property name => this.name.
 * This is where the keyword this problem rears its head.
 * In the first console.log, person2.sing() outputs Conan sings LA LA LA!!! but in the second console.log
 * personSing2() outputs !blank!sings LA LA LA!!!, without this.name which is Conan.
 */
