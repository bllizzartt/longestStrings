const inputArray = ["aba", "aa", "ad", "vcd", "aba"];
function solution(inputArray) {
    'use strict';
    let maxSize = Math.max(...inputArray.map(x => x.length));
    return inputArray.filter(x => x.length === maxSize);
}


console.log(solution);