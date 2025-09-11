let cartData: Products[] = [];
const productsContainer = document.querySelector("#productsContainer") as HTMLElement

if (localStorage.getItem('store') === null)
    localStorage.setItem('store', JSON.stringify([]))

interface Products {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number
    }
    quantity: number
}


async function customFetch<T>(url: string): Promise<T> {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Network respone not ok - stats : ${response.status}`)
    }
    const data = await response.json()
    // console.log("Response : ", data);
    return data;
}

function fetchProducts(url: string) {
    customFetch<Products[]>(url).then((data) => {
        cartData = data;
        displayProducts(cartData)
    }).catch((error) => {
        console.log(error);
    })
}

fetchProducts("https://fakestoreapi.com/products")

export function displayProducts(products: Products[]) {
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
                    <button class = "btn btn-dark">Details</button>
                    <button class = "btn btn-dark ms-2" value = "${product.id}">Add to Cart</button>
                </div>
            </div>
        </div>
        `
            productsContainer.appendChild(col);
        })
    } else {
        productsContainer.innerHTML = `<h3 id = 'errormsg'>Can't Fetch Data</h3>`
    }
}


// Add Products in localStorage
productsContainer.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLInputElement
    // console.log(target.value);
    if (target.value) {
        let storeData: Products[] = JSON.parse(localStorage.getItem("store") || "")

        let existProduct = storeData.find((product) => {
            return product.id.toString() === target.value
        })

        if (existProduct) {
            existProduct.quantity = existProduct.quantity + 1;
            storeData = [...storeData]
            localStorage.setItem('store', JSON.stringify(storeData))
            alert(`${existProduct.title} 📌quantity update`)
        } else {
            let findProduct = cartData.find((product) => product.id.toString() === target.value)
            if (findProduct) {
                findProduct.quantity = 1;
                storeData.push(findProduct)
                localStorage.setItem('store', JSON.stringify(storeData))
                alert(`${findProduct.title} 🛒Add Successfully`)
            }
        }

    }
})


