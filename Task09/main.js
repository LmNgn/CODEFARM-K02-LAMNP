
//calculate
const orders = [
    { id: 1, amount: 100, date: "2025-04-01", status: "completed" },
    { id: 2, amount: 200, date: "2025-04-02", status: "pending" },
    { id: 3, amount: 150, date: "2025-04-03", status: "completed" },
    { id: 4, amount: 300, date: "2025-04-04", status: "shipped" },
    { id: 5, amount: 50, date: "2025-04-05", status: "cancelled" },
    { id: 6, amount: 120, date: "2025-04-06", status: "completed" },
    { id: 7, amount: 180, date: "2025-04-07", status: "shipped" },
    { id: 8, amount: 220, date: "2025-04-08", status: "pending" },
    { id: 9, amount: 350, date: "2025-04-09", status: "completed" },
    { id: 10, amount: 500, date: "2025-04-10", status: "completed" },
];
function calculateTotalCompletedAmount(array, amount) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].status === "completed" && array[i].amount > amount) {
            total += array[i].amount;
        }
    }
    return total;
}

function startCalculate() {
    console.log(calculateTotalCompletedAmount(orders, 150)); // 850
    console.log(calculateTotalCompletedAmount(orders, 1000)); // 0
}

//remove dup

const fruits = [
    "apple",
    "banana",
    "kiwi",
    "kiwi",
    "banana",
    "orange",
    "apple",
    "kiwi",
    NaN,
    NaN,
    null,
    null,
    undefined,
    undefined,
];

function removeDuplicate(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (!result.includes(item)) {
            result.push(item);
        }
    }

    return result;
}

function startRemoveDup() {
    console.log(removeDuplicate(fruits));
}


//map2
Array.prototype.map2 = function (callback) {
    var result = new Array(this.length);
    var n = this.length;

    for (var i = 0; i < n; i++) {
        if (i in this) {
            result[i] = callback(this[i], i, this);
        }
    }
    return result;
};

function startMap2() {
    // Sample 1
    const arr1 = [1, 2, 3, 4, 5];
    const result1 = arr1.map2((value) => value * 2);

    console.log(result1); // [2, 4, 6, 8, 10]
    console.log(result1.length); // 5

    // Sample 2
    const arr2 = [1, , , , 5]; // Có phần tử trống
    const result2 = arr2.map2((value) => value * 2);

    console.log(result2); // [2, , , , 10]
    console.log(result2.length); // 5
}
//foreach 2
Array.prototype.forEach2 = function (callback) {
    var n = this.length;

    for (var i = 0; i < n; i++) {
        if (i in this) {
            callback(this[i], i, this);
        }
    }
};
const arr = [1, 2, 3, 4, 5];

function startForeach2() {
    arr.forEach2((value, index) => {
        console.log(`Value at index ${index}: ${value}`);
    });
}