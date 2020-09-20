ARRAYS
Adding Elements

const numbers = [3, 4];
can modify
const array
End
numbers.push(5, 6);
console.log(numbers);

Beginning
numbers.unshift(1, 2);
console.log(numbers);

Middle
numbers.splice(2, 0, "a", "b");
console.log(numbers);

Finding Primatives

const numbers = [1, 2, 3, 1, 4];
.indexOf
console.log(numbers.indexOf("a"));
console.log(numbers.indexOf(1));
console.log(numbers.indexOf("1"));

getting a boolean with indexOf
console.log(numbers.indexOf(1) !== 1)
same as.includes but less pretty
    .includes
console.log(numbers.includes(1));

.lastIndexOf
console.log(numbers.lastIndexOf(1));

All of the above has second param
Starting Param(fromIndex)

Finding Reference Types

const courses = [{
        id: 1,
        name: "a"
    },
    {
        id: 2,
        name: "b"
    }
];

.includes does not work with objects

find - first element that matches
if no match = undefined
predicate

function
const course = courses.find(function (course) {
    return course.name === "a";
});

findIndex()
same as find but finds index

console.log(course);
const course1 = courses.findIndex(function (course) {
    return course.name === "a";
});
console.log(course1);

Arrow Functions
const course = courses.find(course => course.name === "a";);

Removing Elements
const numbers = [1, 2, 3, 4];

pop
removes item from end of an array & returns it.
const last = numbers.pop();
console.log(numbers);
console.log(last);

shift
removes element from beginning & returns it
const first = numbers.unshift();
console.log(numbers, first);
splice
removes from middle somewhere.
numbers.splice(2, 1);
console.log(numbers);

Emptying an Array
const numbers = [1, 2, 3, 4];

Solution 1 - 2n d Best Case
declare a new array
if a
let.
if there is only one reference to original array

Solution 2 - Best Case
set length to 0
numbers.length = 0

Solution 3 - Performance Hit
Use splice
numbers.splice(0, numbers.length)

Solution 4 - Performance Hit
use Pop with loop

while (numbers.length > 0) {
    numbers.pop();
}

Combining & Slicing Arrays

Concat
concatinate 2 arrays
const first = [1, 2, 3]
const second = [4, 5, 6]
const combined = first.concat(second)

Slice
slices array into two parts
combined.slice(2, 4)
slice(start index {
    optional,
    clones array
}, end index {
    optional
}) grabs ALL array indexes between.

if objects in array will give references to objects, not the objects themselves.

Spread Operator
ES6
Cleaner & More flexible, easier to read.
const first = [1, 2, 3]
const second = [4, 5, 6]
const combined = [...first, 'a', 'b'...second];
Expected output: [1, 2, 3, 'a', 'b,'
    4, 5, 6
]

const copy = [...combined]
clones array

Iterating an Array
for (number of numbers)
    output[1, 2, 3]

forEach()
performs

function on EACH element in an array.
each element in array treated as arg in function.
numbers.forEach(function (number) {
    console.log(number);
});

arrow

function -forEach()
numbers.forEach(number => console.log(number));
can add second param to forEach to start from diff indexes.

Joining Array
    .join()
optional param = seperator: string
const numbers = [1, 2, 3]
numbers.join()

split method
const message = 'first message'
const parts = message.split(' ');
output: [first, message]
using join with seperator will join the array together

    **
    URL slug - PROJECT IDEA
    .join('-') to connect each word
get title, split into array, join array with.join('-')

Sorting Array
    .sort()
sorts array
const numbers = [4, 2, 7, 1, 5, 6]
numbers.sort()

    .reverse()
reverses order of array
numbers.reverse()

FOR OBJECTS
const courses = [{
        id: 1,
        name: "a"
    },
    {
        id: 2,
        name: "b"
    }
];
courses.sort(a, b) {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
}
CASE SENSITIVE.Convert toLowerCase or toUpperCase
const nameA = a.name.toLowerCase(or uppercase, must be same!)
const nameB = b.name.toLowerCase
replace names above to show nameA / B instead of a.name / b.name

ASCII Table => values

Testing Elements of Array
    .Every
compares each element in array to see
if fits parameters(true / false, positive / negative)
const numbers[1, 2, 3]
const allPositive = numbers.every(function (value) {
    return value >= 0;
});

Arrow
const allPositive = numbers.every(value => value >= 0)

    .SUM
at least one element that fits criteria, first that fits.

Filtering Array

    .FILTER
const numbers = [1, -1, 2, 3]
const filtered = numbers.filter(function (value) {
    return value >= 0
})
loop array, and
if matches adds to new array

// Mapping Array
// .MAP
const numbers = [1, -1, 2, 3]
//Chaining
const items = numbers
    .filter(n => n >= 0)
    .map(n => ({
        value: n
    }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value)

console.log(filtered);
console.log(items);

// Reducing Array
let sum = 0;
for (let n of numbers)
    sum += n;

console.log(sum);

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
