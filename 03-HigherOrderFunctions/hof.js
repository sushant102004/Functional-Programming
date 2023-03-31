const hof = (func) => func(5)
hof(function a(x) { console.log(x) })

// Assigning a function to variable.

const hof2 = function() {
    const str = 'Calling from inner function.'
    return function innerFunction() {
        return str
    }
}

// Again assinging function to variable.
const outerFunc = hof2()

// Calling function again so that inner function can be executed.
console.log(outerFunc())