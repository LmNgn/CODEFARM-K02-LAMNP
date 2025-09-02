function toggleMode() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    // Lưu trạng thái vào localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
}

window.onload = function () {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.add("light-mode");
    }
};
const students = [
    { id: 1, name: "Nguyễn Văn A", age: 20, city: "Hà Nội" },
    { id: 2, name: "Trần Thị B", age: 19, city: "TP.HCM" },
    { id: 3, name: "Lê Văn C", age: 21, city: "Đà Nẵng" },
];

const dataTable = document.getElementById("dataTable");

//thead
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

Object.keys(students[0]).forEach(key => {
    const th = document.createElement("th");
    th.textContent = key.toUpperCase();
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);
dataTable.appendChild(thead);

//tbody
const tbody = document.createElement("tbody");
students.forEach(student => {
    const row = document.createElement("tr");
    Object.values(student).forEach(value => {
        const td = document.createElement("td");
        td.textContent = value;
        row.appendChild(td);
    });
    tbody.appendChild(row);
});
dataTable.appendChild(tbody);

const borderSelect = document.getElementById("borderStyle");
const collapseSelect = document.getElementById("collapseStyle");

// mặc định
dataTable.classList.add("solid");

borderSelect.addEventListener("change", function () {
    dataTable.className = this.value; // chỉ giữ class viền
});

collapseSelect.addEventListener("change", function () {
    dataTable.style.borderCollapse = this.value;
});

const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const maxLength = textInput.getAttribute("maxlength");

textInput.addEventListener("input", () => {
    const text = textInput.value.trim();

    const words = text === "" ? 0 : text.split(/\s+/).length;

    const remaining = maxLength - textInput.value.length;

    wordCount.textContent = `Số từ: ${words}`;
    charCount.textContent = `Số ký tự còn lại: ${remaining}`;
});