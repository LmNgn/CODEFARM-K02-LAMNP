// symetric
const arrayNumber = [1, 2, 3, 4, 3, 2, 1];
function checkSymmetricalArr(arr) {
    const n = arr.length;
    for (let i = 0; i < n / 2; i++) {
        if (arr[i] !== arr[n - 1 - i]) {
            return false;
        }
    }
    return true;
}

function startCheckSymetric() {
    const result = checkSymmetricalArr(arrayNumber);
    console.log("Result checkSymmetricalArr:", result);
}


// 2nd largest:
function findSecondLargestNumber(arr) {
    if (arr.length < 2) {
        console.log("Result: ", - 1);
        return;
    }

    let max = arr[0];
    let secondMax = -1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== max) {
            if (secondMax === -1 || arr[i] > secondMax) {
                secondMax = arr[i];
            }
        }
    }

    console.log("Result: ", secondMax);
}

function startFind2ndLargest() {
    console.log("Second largest number:")
    findSecondLargestNumber([1, 2, 3, 4, 5]); // 4
    findSecondLargestNumber([1, 1, 1]); // -1
    findSecondLargestNumber([1]); // -
}


//avarage score
const students = [
    { name: "An", scores: [8, 7.5, 9] },
    { name: "Bình", scores: [6, 5.5, 7] },
    { name: "Chi", scores: [9, 9.5, 10] },
];

function calculateAverages(students) {
    return students.map((student) => {
        let sum = 0;

        // Dùng forEach để tính tổng điểm
        student.scores.forEach((score) => {
            sum += score;
        });

        const average = Math.round((sum / student.scores.length) * 10) / 10;

        return {
            name: student.name,
            average: average,
        };
    });
}

function startCalculate() {
    console.log("Avarage calculate:");
    const result = calculateAverages(students);
    console.log(result);
}

//commond element
function findCommonElement(arr1, arr2) {
    const uniqueArr1 = [];
    const uniqueArr2 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!uniqueArr1.includes(arr1[i])) {
            uniqueArr1.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!uniqueArr2.includes(arr2[i])) {
            uniqueArr2.push(arr2[i]);
        }
    }
    const result = [];
    for (let i = 0; i < uniqueArr1.length; i++) {
        if (uniqueArr2.includes(uniqueArr1[i])) {
            result.push(uniqueArr1[i]);
        }
    }

    if (result.length === 0) {
        console.log("Result: ", false);
    } else {
        console.log("Result: ", result.join(" "));
    }
}

function startFindCommon() {
    console.log("Find common number:");
    findCommonElement([1, 2, 3], [2, 3, 4]); // 2 3
    findCommonElement([1, 2, 3], [4, 5, 6]); // false
    findCommonElement([1, 2, 2, 3, 4], [2, 3, 4, 5]); // 2 3 4
}