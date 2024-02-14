let counter = 0;
const getData = (value) => {

    console.log("fetching data..", value)
}



function debounceFn(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(this, ...args)
        }, delay)

    }
}

const betterFn = debounceFn((event)=>getData(event.target.value), 300)