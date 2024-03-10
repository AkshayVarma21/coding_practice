// Polyfill for reduce function

// Array.reduce((acc,curr,i,arr)=>{},initialVal)

Array.prototype.myReduce = function(cb,initialVal){
    let value = initialVal;

    for(let i=0; i< this.length; i++){
        value = cb(value,this[i],i,this)
    }
    return value;
}


const nums = [1]
const sum = nums.reduce((acc,curr,i,nums)=>acc=acc+curr,0);

console.log(sum)