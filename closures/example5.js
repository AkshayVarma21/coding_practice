// Polyfill for lodash function once


function once(func){
    let result;

    return function(){
        if(func){
            result = func.apply(this,arguments)
            func = null;
        }
        return result
    }
}

const temp = once((a,b)=>console.log("hello",a,b))


temp(1,2);
temp(1,2);