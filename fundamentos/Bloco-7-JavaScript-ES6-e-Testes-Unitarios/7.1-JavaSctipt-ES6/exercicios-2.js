// const factorial = (number) => {
//   let savedNumber = 1;
//   for (let index = 2; index <= number; index += 1) {
//     savedNumber *= index;
//   }
//   return savedNumber;
// }

// console.log(factorial(4))

const longestWord = (phrase) => {
  let arrayofWords = phrase.split(' ')
  let maxLength = 0;
  let result;

  for(const word of arrayofWords) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  return result;
}

console.log(longestWord('Vamos fazer uma viagem até a República Dominicana'));
