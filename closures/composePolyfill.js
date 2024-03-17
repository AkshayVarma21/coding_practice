
function add(a){
    return a + 2;
}

function subtract(a){
    return a-4;
}

function multiply(a){
    return a*5
}

const compose = function(...functions){

    return function(...args){
        return functions.reduceRight((arg,fn)=>fn(arg),args)
    }
}

const evaluate = compose(add, subtract, multiply);

console.log(evaluate(6)); //28