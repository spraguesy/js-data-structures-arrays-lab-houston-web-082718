// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
    drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name);
}

function appendDriver(name) {
    let new_array = drivers.slice();
    new_array.push(name);
    return new_array
};

function prependDriver(name) {
    let new_array = drivers.slice();
    new_array.unshift(name);
    return new_array;
}

function removeLastDriver(name) {
    let new_array = drivers.slice();
    new_array.pop(name);
    return new_array;
};

function removeFirstDriver(name) {
    let new_array = drivers.slice();
    new_array.shift(name);
    return new_array;
};





