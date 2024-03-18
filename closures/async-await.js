




async function handlePromise(){
    console.log("Handle Promise")

    console.time("p1")
    const val1 = await p1;
    console.timeEnd("p1")

    console.log("After p1");

    console.log(val1);
    
    console.time("p2")
    const val2 = await p2;
    console.timeEnd("p2")
    console.log("After p2");
    console.log(val2);
}

const p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise 1")
    },10000)
})

const p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise 2")
    },5000)
})

handlePromise()