//Time optimizaton


function find(){
    let a = [];
    for(let i=0; i<1000000; i++){
        a[i]= i*i;
    }

    return function(index){
        console.log(a[index])

    }
}

const closure = find()

// There is a huge time optimization if we define a closure because we are not running the loop each time
// only the initial find call runs the loop and then that remains the same and its used again and again
console.time("6");
closure(6);
console.timeEnd("6")
console.time("1224");
closure(1224);
console.timeEnd("1224")