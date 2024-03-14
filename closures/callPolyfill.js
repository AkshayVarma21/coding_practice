let name = {
    firstName: "Akshay",
    lastName: "Varma"
}

let printName = function(hometown, state, country){
    console.log(this.firstName+" "+this.lastName+" , "+ hometown+" , "+state+" , "+country)
}

Function.prototype.customCall = function(context={}, ...args){
    if(typeof this !== "function"){
        throw new Error("Its not a function")
    }
    context.fn = this;
    context.fn(...args);
}

printName.call(name,"kochi")