
// every


const greaterOrEqualToZero = (currentValue) => currentValue >= 0;

console.log(nums.every(greaterOrEqualToZero));

const shorterThanEightCharacters = currentValue => currentValue.length < 8;

console.log(panagram.every(shorterThanEightCharacters))

// filter

const lessThanFour = num => num < 4

console.log(nums.filter(lessThanFour))

const wordlength = word => word.length % 2 === 0 

console.log(panagram.filter(wordlength))


// find


const div5 = five => five % 5 === 0

console.log(nums.find(div5))

const long5 = five => five.length > 5

console.log(panagram.find(long5))

// there isnt a workd longer than 5 char so nothing satifies the condition it gets loged as undefined because 
// nothing can make the arument true


// find index


const divFive = num => num % 5 === 0
console.log(nums.find(divFive))

const longerThanFive = word => word.length > 5
console.log(panagram.find(longerThanFive))



// For Each

//22
const times3 = num => console.log(num * 3)

nums.forEach(times3)

nums.forEach(ele => console.log(ele * 3))

//2
const addBang = add => console.log(add +"!")

panagram.forEach(addBang)

console.log(panagram)
