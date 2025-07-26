// filter falsy:
function cleanFalsyValues(arr) {
    let n = arr.length;
    const truthyArr = [];
    for (let l = 0; l < n; l++) {
        if (arr[l]) {
            truthyArr.push(arr[l]);
        }
    }
    return truthyArr;
}

function startFilterFalsy() {
    const result = cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]);
    console.log("Array after filter all falsy value: ", result)
}


// filter number
function filterEvenNumbers(arr) {
    let n = arr.length;
    const newArr = [];
    for (let a = 0; a < n; a++) {
        if (!Number.isNaN(arr[a]) && arr[a] % 2 === 0) {
            newArr.push(arr[a]);
        }
    }
    console.log(newArr);
}

function startFilterEvenNumber() {
    console.log("Array after filter all odd number")
    filterEvenNumbers([1, 2, 3, 4, 5, 6]); // Output: [2, 4, 6]
    filterEvenNumbers([1, 3, 5, 7]); // Output: []
    filterEvenNumbers([]); // Output: []
    filterEvenNumbers([-2, -1, 0, 1, 2]); // Output: [-2, 0, 2]
}


// long string:
function filterLongStrings(arr) {
    let n = arr.length;
    const newArr = [];
    for (let m = 0; m < n; m++) {
        let newStr = arr[m].replace(/\s+/g, '');
        if (newStr.length >= 5) {
            newArr.push(arr[m]);
        }
    }
    console.log(newArr)
}

function startFilterLongString() {
    console.log("Array with string longer than 5 character:")
    filterLongStrings(["hello", "world", "javascript", "nodejs"]); // Output: ["javascript", "nodejs"]
    filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]); // Output: ["hello world", "goodbye!!"]
    filterLongStrings(["hi", "bye", "yes"]); // Output: []
}



//finding numbers

function findMinMaxAverage(arr) {
    const primes = [];
    let n = arr.length;
    let max = arr[0], min = arr[0], maxIndex = 0, minIndex = 0;
    for (let d = 0; d < n; d++) {
        if (arr[d] > max) {
            max = arr[d]
            maxIndex = d
        }
        else if (arr[d] < min) {
            min = arr[d]
            minIndex = d
        }
    }
    for (let z = 0; z < n; z++) {
        if (checkPrime(arr[z]))
            primes.push(arr[z])
    }
    let p = primes.length;
    let sum = 0
    let avrg = null;
    if (p > 0) {
        for (let i = 0; i < p; i++) {
            sum += primes[i];
        }
        avrg = (sum / p).toFixed(2)
    }
    console.log(
        `max: ${max}, maxIndex: ${maxIndex}, min: ${min}, minIndex: ${minIndex}, primeAverage: ${avrg}`
    );
}

function checkPrime(n) {
    if (n < 2) return false;
    let isPrime = true;
    for (let c = 2; c <= Math.sqrt(n); c++) {
        if (n % c === 0) {
            return false;
        }
    }
    return true;
}

function startFindingNumbers() {
    findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]); // Output: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.33 }
    findMinMaxAverage([5, 5, 2, 2, 1]); // Output: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
    findMinMaxAverage([-3, 7, -8, 11, 0]); // Output: {max: 11, maxIndex: 3, min: -8, minIndex: 2, primeAverage: 9 }
}

//insert number

// Input:
function insertNumber(arr, num) {
    const nums = arr.filter(i => typeof i === 'number' && !Number.isNaN(i));
    nums.sort((a, b) => a - b);
    if (typeof num === 'number' && !Number.isNaN(num)) {
        const result = [];
        let insert = false;
        for (let i = 0; i < nums.length; i++) {
            if (!insert && num <= nums[i]) {
                result.push(num);
                insert = true;
            }
            result.push(nums[i]);
        }
        if (!insert) {
            result.push(num);
        }
        console.log(result);
    }
    else {
        console.log(nums)
    }

}

function startInserNumber() {
    insertNumber([1, 3, 5, 7, 9], 6); // Output: [1, 3, 5, 6, 7, 9]
    insertNumber([3, "hello", 1, NaN, 4, null], 2); // Output: [1, 2, 3, 4]
    insertNumber([], 5); // Output: [5]
    insertNumber([-1, 10, -5, "abc"], -3); // Output: [-5, -3, -1, 10]
    insertNumber([5, 2, 8], NaN); // Output: [2, 5, 8]
}