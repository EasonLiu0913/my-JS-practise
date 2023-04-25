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

function flatten2(arr) {
    const newArr = arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc = acc.concat(flatten2(item));
        } else {
            acc.push(item);
        }

        return acc;
    }, []);

    return newArr;
}

const output1 = flatten1(inputArray);
console.log('output1', output1);

const output2 = flatten2(inputArray);
console.log('output2', output2);
