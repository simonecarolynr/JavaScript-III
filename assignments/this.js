/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding: All encompassing. Referencing the entire javascript object.
* 2. implicit binding: Obvious context. Directly referencing the object that it is within
* 3. New: New is a keyword. Used for creating new objects. creating different instances.
* 4. Explicit binding: Stating what you want 'this' to be, through the use of functions. apply, call, bind
*
* write out a code example of each explanation above
*/

// Principle 1
function windowObject() {
    console.log(this)
}
// code example for Window Binding

// Principle 2
const waitress = {
    name: 'Sara',
    faveFood: 'nachos',
    shiftmeal: function () {
        return `${this.name} says: 'Can you guys make me the ${this.faveFood} but can you like, make them keto?`
    }
}


// code example for Implicit Binding

// Principle 3
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',

  });

// code example for New Binding

// Principle 4
let Humanoid = function(characterClass) {
    CharacterStats.call(this, characterClass)
    this.team = characterClass.team;
    this.weapons = characterClass.weapons;
    this.language = characterClass.language;
  }
// code example for Explicit Binding