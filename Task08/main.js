//filter
const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 50 },
    { id: 3, name: "Keyboard", price: 150 },
    { id: 4, name: "Monitor", price: 300 },
    { id: 5, name: "USB Cable", price: 25 },
    { id: 6, name: "Webcam", price: 120 },
    { id: 7, name: "Desk Lamp", price: 80 },
    { id: 8, name: "Headphones", price: 200 },
    { id: 9, name: "Speaker", price: 180 },
    { id: 10, name: "Chair", price: 250 },
];
function filteredProductNames(array, price) {
    const n = array.length;
    const result = [];
    for (let i = 0; i < n; i++) {
        if (array[i]["price"] >= price) {
            result.push(array[i]["name"])
        }
    }
    return result;
}
function startFilterProduct() {
    const result = filteredProductNames(products, 200);
    console.log("Filtered product(s): ", result); // [ 'Laptop', 'Monitor', ''Headphones, 'Chair' ]
}


//flatten nest array
const categories = [
    {
        id: 1,
        name: "Electronics",
        children: [
            {
                id: 2,
                name: "Laptops",
                children: [
                    {
                        id: 3,
                        name: "Apple",
                    },
                    {
                        id: 4,
                        name: "Dell",
                    },
                ],
            },
            {
                id: 5,
                name: "Headphones",
            },
        ],
    },
    {
        id: 6,
        name: "Books",
        children: [
            {
                id: 7,
                name: "Fiction",
                children: [
                    {
                        id: 8,
                        name: "Thrillers",
                    },
                    {
                        id: 9,
                        name: "Mystery",
                    },
                ],
            },
            {
                id: 10,
                name: "Non-Fiction",
            },
        ],
    },
];

function flattenCategories(arr, parentId = 0) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        const flatItem = {
            id: item.id,
            name: item.name,
            parentId: parentId,
        };
        result.push(flatItem);
        if (item.children && item.children.length > 0) {
            const flatChildren = flattenCategories(item.children, item.id);
            result = result.concat(flatChildren);
        }
    }
    return result
}

function startFlatten() {
    const result = flattenCategories(categories);
    console.log("Flatten array: ", result);
}

//count word 
const arrayWords = ["Hello world", "JS is fun", "Arrays and strings"];
function countTotalWords(arr) {
    let total = 0;
    arr.forEach((sentence) => {
        const words = sentence.split(" ");
        total += words.length
    });
    console.log("Total words of the array: ", total)
}
function startCount() {
    countTotalWords(arrayWords); // 8
}