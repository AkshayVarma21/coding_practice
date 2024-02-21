
function PromisePolyfill(executor) {
    let onResolve, onReject;
    let isCalled = false;
    let isFulfilled = false;
    let respVal;

    this.then = function (thenHandler) {
        onResolve = thenHandler;
        if (!isCalled && isFulfilled) {
            onResolve(respVal);
            isCalled = true;
        }
        return this;

    }

    this.catch = function (catchHandler) {
        onReject = catchHandler;
        return this;
    }

    function resolve(value) {
        isFulfilled = true;
        respVal = value;
        if (typeof onResolve === 'function') {
            onResolve(value);
            isCalled = true;
        } else {

        }
    }

    function reject(err) {
        if (!isCalled) {
            onReject(err);
            isCalled = true;
        }
    }
    executor(resolve, reject);
}

const samplePromise = new PromisePolyfill((resolve, reject) => {
    setTimeout(() => {
        resolve("Hi iii")
    }, [1000])
})

samplePromise.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})