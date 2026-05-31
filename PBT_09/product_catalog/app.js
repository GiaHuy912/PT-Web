const products = [
    {id:1,name:"iPhone 16",price:25990000,category:"phone",image:"https://placehold.co/200",rating:4.5,inStock:true},
    {id:2,name:"Samsung S24",price:22990000,category:"phone",image:"https://placehold.co/200",rating:4.4,inStock:true},
    {id:3,name:"Pixel 9",price:19990000,category:"phone",image:"https://placehold.co/200",rating:4.6,inStock:true},

    {id:4,name:"MacBook Pro",price:45990000,category:"laptop",image:"https://placehold.co/200",rating:4.8,inStock:true},
    {id:5,name:"Dell XPS",price:35990000,category:"laptop",image:"https://placehold.co/200",rating:4.7,inStock:true},
    {id:6,name:"ThinkPad X1",price:32990000,category:"laptop",image:"https://placehold.co/200",rating:4.5,inStock:true},

    {id:7,name:"iPad Air",price:16990000,category:"tablet",image:"https://placehold.co/200",rating:4.6,inStock:true},
    {id:8,name:"Galaxy Tab",price:12990000,category:"tablet",image:"https://placehold.co/200",rating:4.4,inStock:true},
    {id:9,name:"Xiaomi Pad",price:7990000,category:"tablet",image:"https://placehold.co/200",rating:4.2,inStock:true},

    {id:10,name:"AirPods Pro",price:6990000,category:"accessory",image:"https://placehold.co/200",rating:4.3,inStock:true},
    {id:11,name:"Galaxy Buds",price:3490000,category:"accessory",image:"https://placehold.co/200",rating:4.1,inStock:true},
    {id:12,name:"Logitech MX",price:2490000,category:"accessory",image:"https://placehold.co/200",rating:4.7,inStock:true}
];

let cartCount = 0;
let currentProducts = [...products];

const app = document.querySelector("#app");

app.innerHTML = `
<div class="container">

    <div class="cart">
        🛒 <span class="badge">0</span>
    </div>

    <div class="top-bar">

        <input
            type="text"
            id="search"
            placeholder="Search..."
        >

        <button data-category="all">All</button>
        <button data-category="phone">Phone</button>
        <button data-category="laptop">Laptop</button>
        <button data-category="tablet">Tablet</button>
        <button data-category="accessory">Accessory</button>

        <select id="sort">
            <option value="">Sort</option>
            <option value="priceAsc">Giá tăng</option>
            <option value="priceDesc">Giá giảm</option>
            <option value="name">Tên A-Z</option>
            <option value="rating">Rating cao nhất</option>
        </select>

        <button id="darkMode">
            Dark Mode
        </button>

    </div>

    <div id="productContainer" class="products"></div>

</div>
`;

const productContainer =
document.querySelector("#productContainer");

function renderProducts(list){

    productContainer.innerHTML = "";

    list.forEach(product => {

        const card =
        document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString()}đ</p>
            <p>⭐ ${product.rating}</p>
            <button class="add-cart">
                Thêm giỏ
            </button>
        `;

        card.addEventListener(
            "click",
            () => showModal(product)
        );

        card.querySelector(".add-cart")
        .addEventListener("click",(e)=>{

            e.stopPropagation();

            cartCount++;

            document.querySelector(".badge")
            .textContent = cartCount;

        });

        productContainer.appendChild(card);

    });

}

function searchProducts(keyword){

    currentProducts =
    products.filter(product =>
        product.name
        .toLowerCase()
        .includes(keyword.toLowerCase())
    );

    renderProducts(currentProducts);

}

function filterByCategory(category){

    if(category === "all"){
        currentProducts = [...products];
    }
    else{
        currentProducts =
        products.filter(product =>
            product.category === category
        );
    }

    renderProducts(currentProducts);

}

function sortProducts(type){

    const list = [...currentProducts];

    if(type === "priceAsc"){
        list.sort((a,b)=>a.price-b.price);
    }

    if(type === "priceDesc"){
        list.sort((a,b)=>b.price-a.price);
    }

    if(type === "name"){
        list.sort((a,b)=>
            a.name.localeCompare(b.name)
        );
    }

    if(type === "rating"){
        list.sort((a,b)=>
            b.rating-a.rating
        );
    }

    renderProducts(list);

}

function showModal(product){

    const modal =
    document.createElement("div");

    modal.className = "modal";

    modal.innerHTML = `
        <div class="modal-content">
            <h2>${product.name}</h2>
            <img src="${product.image}">
            <p>Giá:
            ${product.price.toLocaleString()}đ</p>
            <p>Rating:
            ${product.rating}</p>

            <button id="closeModal">
                Đóng
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    modal
    .querySelector("#closeModal")
    .addEventListener("click",()=>{

        modal.remove();

    });

}

renderProducts(products);

document
.querySelector("#search")
.addEventListener("input",(e)=>{

    searchProducts(e.target.value);

});

document
.querySelectorAll("[data-category]")
.forEach(btn=>{

    btn.addEventListener("click",()=>{

        filterByCategory(
            btn.dataset.category
        );

    });

});

document
.querySelector("#sort")
.addEventListener("change",(e)=>{

    sortProducts(e.target.value);

});

document
.querySelector("#darkMode")
.addEventListener("click",()=>{

    document.body.classList.toggle(
        "dark-mode"
    );

});