function createBase(num) {
    let val = num;
    return function (a) {

        console.log(val + a)
    }
}

const addSix = createBase(6);

addSix(10);
addSix(21);