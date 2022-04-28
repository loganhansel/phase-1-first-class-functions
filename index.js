function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    const returnFunction = () => 2 + 2;
    return returnFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Returned function");
    }
}