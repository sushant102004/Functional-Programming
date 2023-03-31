/*
    Currying means transforming a function with several arguments
    into a series of functions taking only one argument.
*/


// Non-Curried Version
function sum(a, b, c) {
    console.log(a + b + c)
}

// Curried Version
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

console.log(add(2)(3)(4))