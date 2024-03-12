
Function.prototype.customCall = function(context={}, ...args){
    if(typeof this !== "function"){
        throw new Error("Its not a function")
    }
    context.fn = this;
    context.fn(...args);
}

