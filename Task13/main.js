const products = [
    {
        name: 'Sony Playstation 5',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/playstation_5_tywoqq.png',
        type: 'games',
        price: 499.99,
    },
    {
        name: 'Samsung Galaxy',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739038/samsung_galaxy_iad0cv.png',
        type: 'smartphones',
        price: 399.99,
    },
    {
        name: 'Cannon EOS Camera',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739063/cannon_eos_camera_ydidrx.png',
        type: 'cameras',
        price: 749.99,
    },
    {
        name: 'Sony A7 Camera',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/sony_a7_camera_xvkxwd.png',
        type: 'cameras',
        price: 1999.99,
    },
    {
        name: 'LG TV',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739061/lg_tv_yl0k03.png',
        type: 'televisions',
        price: 799.99,
    },
    {
        name: 'Nintendo Switch',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739061/nintendo_switch_diq6cy.png',
        type: 'games',
        price: 299.99,
    },
    {
        name: 'Xbox Series X',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/xbox_series_x_e9yex6.png',
        type: 'games',
        price: 499.99,
    },
    {
        name: 'Samsung TV',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/samsung_tv_adpfag.png',
        type: 'televisions',
        price: 1099.99,
    },
    {
        name: 'Google Pixel',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739064/google_pixel_r2bpdo.png',
        type: 'smartphones',
        price: 499.99,
    },
    {
        name: 'Sony ZV1F Camera',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/sony_zv1f_camera_o7kt3t.png',
        type: 'cameras',
        price: 799.99,
    },
    {
        name: 'Toshiba TV',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739037/toshiba_tv_sdsrnz.png',
        type: 'televisions',
        price: 499.99,
    },
    {
        name: 'iPhone 14',
        url: 'https://res.cloudinary.com/diefuqpsy/image/upload/v1757739062/iphone_14_fhu2gq.png',
        type: 'smartphones',
        price: 999.99,
    }
]

const productList = document.getElementById("product-list")
const filter = document.getElementById("filters-form")
const sort = document.getElementById("sort-product")
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search");
let content = ''
let filterContent = ''
let types = [];
products.forEach(p => {
    if (!types.includes(p.type)) {
        types.push(p.type);
    }
});
types.map(t => {
    filterContent += `
        <div>
            <input type="checkbox" name="type" value="${t}">
            <label for="type">${t}</label>
        </div>
    `
})
filter.innerHTML = filterContent


function renderProducts(list) {
    let content = "";
    list.forEach(p => {
        content += `
      <div class="product-card">
        <p>${p.name}</p>
        <p>${p.type}</p>
        <p>$${p.price}</p>
        <img src="${p.url}" alt="${p.name}" />
      </div>
    `;
    });
    productList.innerHTML = content;
}

function filterAndSort() {
    const formData = new FormData(filter);
    const checked = formData.getAll("type");
    let result = checked.length === 0
        ? products
        : products.filter(p => checked.includes(p.type));

    const keyword = searchInput.value.trim().toLowerCase();
    if (keyword) {
        result = result.filter(p => p.name.toLowerCase().includes(keyword));
    }

    const sortValue = sort.value;
    switch (sortValue) {
        case "price-asc":
            result.sort((a, b) => a.price - b.price);
            break;
        case "price-dsc":
            result.sort((a, b) => b.price - a.price);
            break;
        case "name-asc":
            result.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "name-dsc":
            result.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            break;
    }
    renderProducts(result);
}

filterAndSort();

filter.addEventListener("change", filterAndSort);
sort.addEventListener("change", filterAndSort);
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    filterAndSort();
});
