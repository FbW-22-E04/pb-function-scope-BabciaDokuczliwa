//1. Print Exponential Values
//Write a function that accepts two numbers and validate that they are numbers.
//After that, the function should print y exponential values starting from x.

const accepts = (x, y) => {
  if (typeof x === "number" && typeof y === "number") {
    for (let i = 1; i < y + 1; i++) {
      console.log(Math.pow(x, i));
    }
  }
};
accepts(3, 5);
accepts(2, 8);

//Create a function named printFavoriteFruit. Declare a variable called fruit outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".

let fruit = `apple`;

const printFavoriteFruit = () => {
  return `My favorite fruit is ${fruit}`;
};
console.log(printFavoriteFruit());

//Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.

const exponent = (x, y) => {
  const result = Math.pow(x, y);
  return result;
};
console.log(exponent(2, 3));
