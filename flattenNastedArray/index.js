const inputArray = [[0], [1, [2]], [3, 4, [5], [6, 7]]];
// expect output = [0,1,2,3,4,5,6,7]

function flatten(arr) {
    let result = [];
    for (const input of arr) {
        if (Array.isArray(input)) {
            result = result.concat(flatten(input));
        } else {
            result.push(input);
        }
    }
    return result;
}

const output = flatten(inputArray);
console.log('output', output);
