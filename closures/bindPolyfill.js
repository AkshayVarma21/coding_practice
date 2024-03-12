let name = {
    firstName: "Akshay",
    lastName: "Varma"
}

let printName = function(hometown, state, country){
    console.log(this.firstName+" "+this.lastName+" , "+ hometown+" , "+state+" , "+country)
}

// const printMyName = printName.bind(name);
// printMyName();

Function.prototype.customBind = function(...args){
    const obj = this;
    const params = args.slice(1)
    return function(...args2){
        obj.call(args[0], [...params,args2])
    }
}

const printMyName2 = printName.bind(name,"Kochi");
printMyName2("Kerala","India");