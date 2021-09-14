// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(function(word) {
        return word.toLowerCase() === string.toLowerCase();
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(word) {
        return word[0] === string[0];
    })
}

function matchName(drivers, string) {
    return drivers.filter(word => word.name === string);
}