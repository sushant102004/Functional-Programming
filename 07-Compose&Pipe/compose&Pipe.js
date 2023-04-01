/*
    It is a process in which output of one function act as input to another function.
*/

const compose = (f, g) => data => f(g(data))

const multiplyByThree = (num) => num * 3
const makePositive = (num) => Math.abs(num)

const multiplyAndAbsolute = compose(multiplyByThree, makePositive)

console.log(multiplyAndAbsolute(-20))


// Pipe is also the same but it goes left to right.

const pipe = (f, g) => data => g(f(data))
