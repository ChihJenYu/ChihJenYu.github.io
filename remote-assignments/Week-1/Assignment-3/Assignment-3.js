function countAandB(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'a' || input[i] === 'b') {
            count++;
        }
    }
    return count;
}

function toNumber(input) {
    return input.map((element) => {
        switch (element) {
            case 'a': return 1
            case 'b': return 2
            case 'c': return 3
            case 'd': return 4
            case 'e': return 5
            default: return null
        }
    })
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1));
console.log(toNumber(input1));

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2));
console.log(toNumber(input2));