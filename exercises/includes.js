const numbers = [];
console.log(numbers.includes(1))

function includes (array, searchElement) {
    for (let element of array)
        if (element === searchElement)
        return true
    return false
}

