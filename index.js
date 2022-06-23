//PRIMITIVE
// String, number, boolean, null, undefined

let stringVar = "test";
let numberVar = 4;
let booleanVar = true;
let undefinedVar;
let nullVar = null;

//NON-PRIMITIVE

// let person = {
//   name: "Avram", //PROPERTIES
//   age: 24,
//   startWalking: function () {
//     //METHOD
//     console.log("starts walking");
//   },
//   startWalkingSecond: () => {
//     console.log("starts walking 2");
//   },
// };

let secondArray = [1, 2, 3, 4];

let array = [
  stringVar,
  numberVar,
  booleanVar,
  undefinedVar,
  nullVar,
//   person,
  secondArray,
];
// console.log(array);
// console.log(array[0]);

// ES5
// function testFunction() {
//     console.log('this is test function')
// }

// testFunction();

// ES6
// let testFunction = () => {
//     console.log('this is test function')
// }

// testFunction();
let nameVariable = "Avram";
let ageVariable = 24;

let sayMyName = (name, age) => {
  // console.log('Hello my name is ' + name + ' and i am ' + age + ' years old');
//   console.log(`Hello my name is ${name} and i am ${age} years old`);
};

sayMyName(nameVariable, ageVariable);

// console.log(2 === "2");

// console.log(2 + 2 == 4);

// if(2 + 2 == 4) {
//     console.log('expresia este adevarata')
// } else {
//     console.log('expresia este falsa')
// }

let fruits = ["apple", "mango", "orange"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// console.log(fruits.length)

// let i = 0;
// i++;

for (let i = 0; i < fruits.length; i++) {
  // console.log(`hello world ${i}`);
  // console.log(`Elementul ${fruits[i]} se afla pe pozitia ${i}`)
  // console.log(i);
}

// fruits.map(function(fruit) {
//     console.log(fruit)
// })



// let a = fruits.map(function() {

// })


// fruits.map((fruit, i) => {
//   console.log(`Elementul ${fruit} se afla pe pozitia ${i}`);
// });


// let person = {
//     name: 'Avram',
//     age: 24,
//     getAge: () => {
//         console.log(`I am ${age} years old, and i will be ${++age}`)
//     }
// }

// let { name, age, getAge } = person;
// console.log(name, age);

// getAge();

// console.log(person.name);
// console.log(person.age);

let createPerson = (name, age) => {
    let a = 4;
    console.log('testing stuff')

    //BEFORE RETURN IT WORKS
    console.log(a);

    let person = {
        name,
        age,
    }

    return person;

    //AFTER RETURN NOTHING WORKS
    console.log(a);

   
}

let person1 = createPerson('Vlad', 24);
let person2 = createPerson('Ion', 60);

// console.log(person1);
// console.log(person2);

// let person1 = createPersons