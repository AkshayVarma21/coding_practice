// Block scope and setTimeout

// Prints 3 in each case because var is function scoped and not block scoped
function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        },i*1000)
    }
}

// create separate instances for each looped item because let is block scoped
function b() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        },i*1000)
    }
}

// create separate instances for each looped item
function c() {
    for (var i = 0; i < 3; i++) {
        (function (j) {
            setTimeout(function () {
                console.log(j);
            }, j * 1000);
        })(i);
    }
}

// create separate instances for each looped item by using closure
function d() {
    for (var i = 0; i < 3; i++) {
        function inner(j) {
            setTimeout(function () {
                console.log(j);
            }, j * 1000);
        }
        inner(i)

    }
}


a();
