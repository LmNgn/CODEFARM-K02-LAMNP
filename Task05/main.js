//square
function enterSquare() {
    const n = Number(prompt("Enter a value:"));
    if (Number.isNaN(n) || n < 1) {
        alert("Please enter a valid number equal or larger than 1.");
        return;
    }
    printSquareNumber(n);
}
function printSquareNumber(n) {
    console.log(`Square number from 2 to ${n}:`);
    for (let i = 2; i * i <= n; i++) {
        console.log(i * i);
    }
}



//prime
function enterPrime() {
    const n = Number(prompt("Enter a value:"));
    if (Number.isNaN(n) || n < 2) {
        alert("Please enter a valid number equal or larger than 2.");
        return;
    }
    printPrimeNumber(n);
}

function printPrimeNumber(n) {
    console.log(`Prime number from 2 to ${n}:`);
    for (let i = 2; i <= n; i++) {
        if (checkPrime(i)) {
            console.log(i);
        }
    }
}

function checkPrime(p) {
    if (p < 2) return false;
    const limit = Math.sqrt(p);
    for (let j = 2; j <= limit; j++) {
        if (p % j === 0) {
            return false;
        }
    }
    return true;
}



//times table
function printMultiplicationTable() {
    console.log("Times table from 1 to 10:")
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}



//christmas tree
function enterTreeValue() {
    let n = Number(prompt("Enter tree height: "));
    let c = prompt("Enter tree detail: ");
    if (Number.isNaN(n) || n < 0 || n > 100) {
        console.log("Tree height has to be a positive number smaller than 100.");
        return;
    }
    if (typeof c !== "string" || c.length !== 1) {
        console.log("Tree detail has to be a character.");
        return;
    }
    printChristmasTree(n, c);
}

function printChristmasTree(n, c) {
    let tree = "";
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < n - i; j++) {
            tree += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            tree += c;
        }
        tree += "\n";
    }
    for (let j = 0; j < n - 1; j++) {
        tree += " ";
    }
    tree += c;
    console.log(tree)
}