/* Partial Application: - We take a function and create a new function
    from it with having some of it's value already set.

    Then call that new function with pre-set arguments.
*/

const multiply = (a, b, c) => a * b * c

const multiplyBy2 = multiply.bind(null, 2)

console.log(multiplyBy2(3, 4))
