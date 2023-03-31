/*
    A pure function is a function which does not produce any side effect.
    Side Effect: - Change state of any global object.
*/

// Here 
const arr = [3, 7, 4]

// Mutate array is not a pure function because it pop last element from arr which changes it's global state.
function mutateArray(){
    arr.pop()
}

mutateArray(arr)
console.log(arr)


//////////////////////////////////////////////////////
const arrTwo = [3, 7, 4]

function mutateArrayPure(arrTwo) {
    const newArr = [].concat(arrTwo)
    return newArr.pop()
}

mutateArrayPure(arrTwo)
console.log(arrTwo)