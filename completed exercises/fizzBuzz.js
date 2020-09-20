//FizzBuzz
//if number pass in % 3 == 0 fizz
// if by 5 = buzz
// if 3 & 5 == fiz buzz
//not divisable by 3 & 5 number
// if not a number get not a number

const output = fizzBuzz(true);
console.log(output)

function fizzBuzz(input) {
 if (typeof(input) !== 'number' ) {
   return NaN;
  } else if (input % 3 !== 0 && input % 5 !== 0 ) {
      return input
  } else if (input % 3 === 0 && input % 5 === 0) {
    return 'FizzBuzz'
  } else if (input % 3 === 0) {
    return 'Fizz'
  } else if (input % 5 === 0) {
    return 'Buzz'
  } 
}