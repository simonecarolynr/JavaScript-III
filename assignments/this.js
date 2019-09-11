/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. All encompassing. Evverything exists inside of the window. Referencing the enitre javascript object.
* 2. Obvious context. Directly referencing the object that it is within
* 3. creating new objects. creating different instances. keyword
* 4. Stating what you want 'this' to be, through the use of functions. apply, call, bind
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Principle 2
const person = {
    name: 'Sara',
    occupation: 'waitress',
    faveFood: 'nachos',
    shiftmeal: function () {
        return `${this.name} says: 'Can you guys make me the ${this.faveFood} but can you like, make them keto?`
    }
}
// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4
const person = {
    name: 'Caitlin',
    occupation: 'waitress',
    faveFood: 'cheesesteak'
}
const skills = ['smoking cigarettes', 'roasting customers', 'eating four meals within a five hour shift']
function introduceMyself()
// code example for Explicit Binding