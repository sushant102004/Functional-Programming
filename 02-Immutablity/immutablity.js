const obj = { name : 'Sushant' }

function cloneObject(obj) {
    return {...obj}
}

// Below line is mutating the obj object which is against FP
// obj.name = 'John' 

// In order to mutate something we can have a dedicated function.

function updateName(obj, name) {
    const newObj = cloneObject(obj)
    newObj.name = name
    return newObj
}

const newObj = updateName(obj, 'John')
console.log(obj, newObj)