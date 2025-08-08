//object
const arrayString = ["name:John", "age:30", "city:NY"];

function convertArrayToObject(array) {
    const result = {};

    for (let i = 0; i < array.length; i++) {
        const m = array[i];
        const n = m.split(":");
        const key = n[0];
        const value = n[1];

        result[key] = value;
    }

    return result;
}

function startObject() {
    console.log(convertArrayToObject(arrayString));
}
//nest
const categories = [
    { id: 1, name: "Chuyên mục 1", parent: 0 },
    { id: 2, name: "Chuyên mục 2", parent: 0 },
    { id: 3, name: "Chuyên mục 3", parent: 0 },
    { id: 4, name: "Chuyên mục 2.1", parent: 2 },
    { id: 5, name: "Chuyên mục 2.2", parent: 2 },
    { id: 6, name: "Chuyên mục 2.3", parent: 2 },
    { id: 7, name: "Chuyên mục 3.1", parent: 3 },
    { id: 8, name: "Chuyên mục 3.2", parent: 3 },
    { id: 9, name: "Chuyên mục 3.3", parent: 3 },
    { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
    { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
];
function convertToNested(arr, parentId = 0) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (item.parent === parentId) {
            const children = convertToNested(arr, item.id);
            const newItem = { id: item.id, name: item.name };

            if (children.length > 0) {
                newItem.children = children;
            }

            result.push(newItem);
        }
    }

    return result;
}

function startNested() {
    console.log(convertToNested(categories))
}

//sort
const users = [
    { fullName: "Nguyễn Minh Hoàng" },
    { fullName: "Nguyễn Đức Hoàng" },
    { fullName: "Lê Văn" },
    { fullName: "Lê Văn Tình" },
    { fullName: "Lê Nin" },
];
function sortUsersByName(users) {
    return users.sort((a, b) => {
        const n1 = a.fullName.trim().split(" ").reverse().join(" ");
        const n2 = b.fullName.trim().split(" ").reverse().join(" ");

        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
    });
}

function startSort() {
    console.log(sortUsersByName(users))
}