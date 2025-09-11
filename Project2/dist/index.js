let cartData = [];
const productsContainer = document.querySelector("#productsContainer");
if (localStorage.getItem('store') === null)
    localStorage.setItem('store', JSON.stringify([]));
async function customFetch(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Network respone not ok - stats : ${response.status}`);
    }
    const data = await response.json();
    // console.log("Response : ", data);
    return data;
}
function fetchProducts(url) {
    customFetch(url).then((data) => {
        cartData = data;
        displayProducts(cartData);
    }).catch((error) => {
        console.log(error);
    });
}
fetchProducts("https://fakestoreapi.com/products");
export function displayProducts(products) {
    // const productsContainer = document.querySelector("#productsContainer") as HTMLElement
    if (products) {
        productsContainer.innerHTML = '';
        products.forEach((product, index) => {
            const col = document.createElement('div');
            col.setAttribute('class', 'col-md-4');
            col.innerHTML = `
        <div class='card g-2'>
            <div class = 'card-body'>
                <div class='d-flex justify-content-center mt-2'>
                    <img src = ${product.image} alt = '${product.id}'>
                </div>
                <div class = 'card-title text-center mt-2'>
                    <h3>${product.title}</h3>
                </div>
                <div class = 'card-subtitle text-center mt-2'>
                    <p>${product.description}</p>
                </div>
                <div class = 'text-center mt-2'>
                    <h6>$ ${product.price}</h6>
                <div>
                <div class='d-flex justify-content-center'>
                    <button class = "btn btn-dark" value = "${product.id},details">Details</button>
                    <button class = "btn btn-dark ms-2" value = "${product.id}">Add to Cart</button>
                </div>
            </div>
        </div>
        `;
            productsContainer.appendChild(col);
        });
    }
    else {
        productsContainer.innerHTML = `<h3 id = 'errormsg'>Can't Fetch Data</h3>`;
    }
}
// Filetr Products by category
function filterByCategory(category) {
    return function () {
        const filterData = cartData.filter((data) => {
            return data.category === category;
        });
        displayProducts(filterData);
    };
}
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
btn1.addEventListener('click', () => displayProducts(cartData));
btn2.addEventListener('click', filterByCategory("men's clothing"));
btn3.addEventListener('click', filterByCategory("women's clothing"));
btn4.addEventListener('click', filterByCategory("jewelery"));
btn5.addEventListener('click', filterByCategory("electronics"));
// Add Products in localStorage
productsContainer.addEventListener('click', (e) => {
    const target = e.target;
    // console.log(target.value);
    if (target.value) {
        // save signle product in local storage 
        if (target.value.includes("details")) {
            // console.log(target.value);
            let id = target.value.split(",")[0];
            let getProduct = cartData.find((product) => product.id.toString() === id);
            localStorage.setItem('product', JSON.stringify(getProduct));
            window.location.href = './assets/html/singleProduct.html';
        }
        // save products in local storage
        let storeData = JSON.parse(localStorage.getItem("store") || "");
        let existProduct = storeData.find((product) => {
            return product.id.toString() === target.value;
        });
        if (existProduct) {
            existProduct.quantity = existProduct.quantity + 1;
            storeData = [...storeData];
            localStorage.setItem('store', JSON.stringify(storeData));
            alert(`${existProduct.title} 📌quantity update`);
        }
        else {
            let findProduct = cartData.find((product) => product.id.toString() === target.value);
            if (findProduct) {
                findProduct.quantity = 1;
                storeData.push(findProduct);
                localStorage.setItem('store', JSON.stringify(storeData));
                alert(`${findProduct.title} 🛒Add Successfully`);
            }
        }
    }
});
//# sourceMappingURL=index.js.map