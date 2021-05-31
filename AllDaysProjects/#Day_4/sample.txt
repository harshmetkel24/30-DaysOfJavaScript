// This is going to be truely based on the explanation of Array mehtods
// So tighten the seat and lets enjoy

// Some data to work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Gallileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
]

const people = [
  'harsh, metkel',
  'kunj, parekh',
  'ayush, khamar',
  'nilav, shah',
  'dhaval, pandey',
  'aakash, dubey',
  'vivek, tiwary',
  'shashikant, agrawal',
  'harsh, patel',
  'krunal, chhagani',
  'yash, sanghani',
  'hemil, sanghani',
  'bhavin, solanki',
  'ambrish, dattatreys',
  'kunj, gupta',
  'shah, aditya',
]

// Array.prototype.filter
// This will loopover the whole array to find out particular elements of array baseed on the specified condition
// 1. Filter the list of inventors those were born in 15th Century

const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1600
)
console.table(fifteen)

// Arrray.prototype.map()
// This takes the array and do something with that array and the returns new array of same length
// 2. Give an array of inventors first and lastname

const fullName = inventors.map(
  (inventor) => inventor.first + ' ' + inventor.last
)
console.table(fullName)

// Array.prototype.sort()
// The way that sort works is that, you get two items and you have these two items in the hand and you're asked to sort just those two items so you
// if person A is greater than person B then put the person A on the top of the person B, and we do this by returning one and negative one.
// 3. Sort the inventors by birstdate, oldest to youngest

const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1))
console.table(ordered)

// Array.prototype.reduce()
//  this kind of retains the value and pass it onto the next iteration for further calculations
// 5. How many years did all the inventors live?

var totalYears = inventors.reduce(
  (total = 0, inventor) => (total += inventor.passed - inventor.year),
  0
  //   here 0 is added for the first iteration when tatal doesn't had any value
)
console.log(totalYears)

// 5. Sort the inventors by the years lived

const oldest = inventors.sort((a, b) =>
  a.passed - a.year > b.passed - b.year ? -1 : 1
)
console.table(oldest)
