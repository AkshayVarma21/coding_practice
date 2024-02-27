// Polyfill for memoize using closure

function cache(func){
    let result;

    return function(arguments){
        if()

        return result;
    }
}

const squareFunc = (num1, num2) => {
    for (let i = 0; i < 10000000; i++) {

    }

    return num1 * num2;
}

console.time("First call")
squareFunc(9899, 8766);
console.timeEnd("First call")

console.time("Second call")
squareFunc(9899, 8766);
console.timeEnd("Second call")