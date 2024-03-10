// Polyfill for map

// Array.map((item,i,arr)=>{})

Array.prototype.myMap = function(cb){
    let temp = [];

    for(let i=0; i< this.length; i++){
        // Create a new array with whatever operation is performed using the callback function
        temp.push(cb(this[i],i,this))
    }
    return temp;
}


const nums = [1,2,3,4]
const multiplyByTwo = nums.myMap((item,i,nums)=>item*2);

console.log(multiplyByTwo)