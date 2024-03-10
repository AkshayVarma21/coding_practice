// Polyfill for filter function

// Array.filter((item,i,arr)=>{})

Array.prototype.myMap = function(cb){
    let temp = [];

    for(let i=0; i< this.length; i++){
        // Create a new array with whatever operation is performed using the callback function
        if(cb(this[i],i,this))
        temp.push(this[i])
    }
    return temp;
}


const nums = [1,2,3,4]
const greaterThan2 = nums.myMap((item,i,nums)=>item>2);

console.log(greaterThan2)