// Polyfill for memoize using closure

function cache(func,context){
    const result ={};

    return function(...args){
        const argsCache = JSON.stringify(args)
        if(!result[argsCache]){
            result[argsCache] = func.call(context||this,args)
        }

        return result;
    }
}

const squareFunc = (num1, num2) => {
    for (let i = 0; i < 10000000; i++) {

    }

    return num1 * num2;
}

console.time("First call")
cache(squareFunc(9899, 8766));
console.timeEnd("First call")

console.time("Second call")
cache(squareFunc(9899, 8766));
console.timeEnd("Second call")