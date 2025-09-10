const url = "http://localhost:3000/products";
const productsElement = document.getElementById("products");
const formProduct = document.getElementById("product-form");

let productId = null;

function loadProducts() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let content = "";
            data.forEach((item) => {
                content += `
        <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>
            <button class="btn-danger">Delete</button>
            <button class="btn-warn">Update</button>
          </td>
        </tr>
        `;
            });
            productsElement.innerHTML = content;

            const rows = productsElement.querySelectorAll("tr");
            rows.forEach((row, index) => {
                const item = data[index];

                row.querySelector(".btn-danger").addEventListener("click", () => {
                    if (confirm(`Bạn có chắc muốn xóa sản phẩm: ${item.name}?`)) {
                        fetch(`${url}/${item.id}`, { method: "DELETE" })
                            .then(() => loadProducts())
                            .catch((err) => console.log(err));
                    }
                });

                row.querySelector(".btn-warn").addEventListener("click", () => {
                    fetch(`${url}/${item.id}`)
                        .then((res) => res.json())
                        .then((product) => {
                            formProduct.name.value = product.name;
                            formProduct.price.value = product.price;
                            productId = product.id;
                        });
                });
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

loadProducts();

formProduct.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(formProduct);
    const data = Object.fromEntries(formData);

    if (productId) {
        fetch(`${url}/${productId}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(() => {
                productId = null;
                formProduct.reset();
                loadProducts();
            })
            .catch((err) => console.log(err));
    } else {
        fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then(() => {
                formProduct.reset();
                loadProducts();
            })
            .catch((err) => console.log(err));
    }
});
const btnAdd = document.getElementById("btn-add");
btnAdd.addEventListener("click", (event) => {
    event.preventDefault();
    formProduct.reset();
    productId = null;
});