const cache = {}

function addFive(n) {
    if(n in cache){
        console.log('From Cache')
        return cache[n]
    }

    console.log('By Calculation.')
    const res = 5 + n
    cache[n] = res
    return res
}

// console.log(addFive(10))
// console.log(addFive(10))


// Optimized Approach - Do not pollute global variables.

function addFiveOptimized() {
    const cache = {}
    
    return function(n) {
        if(n in cache){
            console.log('From Cache')
            return cache[n]
        }
    
        console.log('By Calculation.')
        const res = 5 + n
        cache[n] = res
        return res
    }
}

const addFiveOpt = addFiveOptimized()
console.log(addFiveOpt(10))
console.log(addFiveOpt(10))
