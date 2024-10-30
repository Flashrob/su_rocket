// Data structures:
/*
1. Objects
2. Arrays
3. (Functions)
4. Strings
5. Numbers
6. Booleans
*/

const props = {
  name: "Brandon",
  age: 99,
  address: "Orchard road",
  postalCode: "123456",
  bankAccount: "5563523",
  numOfSiblings: 5,
};

// const age = props.age;

const { age, address, postalCode } = props;
// console.log(age, address, postalCode);

const array = ["Apple", "Banana", "Lemon"];

// const apple = array[0];
// const banana = array[1];
// const lemon = array[2];

const [brandon, banana, lemon] = array;
console.log(brandon, banana, lemon);

// const [state, setState] = useState(defaultValue);

// ^SAME AS
// const stateArray = useState(defaultValue)
// const state = stateArray[0];
// const setState = stateArray[1];

/* 
const useState = (defaultValue) => {
  ... here the function does some stuff

  let state = defaultValue;

  const setState = () => {
    ...do some stuff to update state
  }
  return [state,setState]
}

*/

const nums = [1, 2, 3];

const [, two] = nums;
console.log(two);

// SPREAD OPERATOR

const fruitsAndVegetables = {
  fruits: {
    apple: "apple",
    banana: "banana",
  },
  vegetables: {
    carrot: "carrot",
    spinach: "spinach",
  },
  cookies: {
    choco: "choco",
    macadamia: "macadamia",
  },
};

const useFruitsAndReturnLeftOvers = (fruitsAndVegetables) => {
  const { fruits, ...leftovers } = fruitsAndVegetables;
  return leftovers;
};
console.log(useFruitsAndReturnLeftOvers(fruitsAndVegetables));

/* 

const state = {
  name: "Brandon",
  age: 20,
  address: "orchard"
}

.... 
updateAge() <- maybe a function to update age of the user

setState({
  age: 25,
  ...state
})

addNumber() <- maybe a function to add a number 
const state = [1,2,3,4,5]
setState([...state, 6])
*/
