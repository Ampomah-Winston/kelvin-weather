// // temperature in kelvin
// const kelvin = 293;
// // const kelvin = 0;

// // temperature from kelvin to celcius
// const celcius = kelvin - 273;

// // temperature in fahrenheit calculation
// let fahrenheit = celcius * (9 / 5) + 32;

// // temperature in fahrenheit rounded
// fahrenheit = Math.floor(fahrenheit);

// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// function foo(x, z) {
//   return x + z;
// }

// console.log(foo(5));

function evaluateExpression() {
  // TODO: implement this function
  let characters = "";
  let inputs = document.querySelectorAll('input[id^="Box"]');
  inputs.forEach((x) => {
    characters += x.value;
  });
  const answer = document.querySelector("#answerBox");

  try {
    const evaluate = eval(characters);
    answer.value = evaluate;
  } catch (error) {
    answer.value = "ERR";
  }
}
