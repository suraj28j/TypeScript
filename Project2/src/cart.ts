const showCartItem = document.getElementById('showCartItem') as HTMLElement;
let cartData: Products[] = [];
let shippingCharge: number = 30;
let cart_totalAmount: number = 0

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


function displayCartItems() {
    cartData = JSON.parse(localStorage.getItem('store') || "")
    // console.log("cartData ", cartData);
    // console.log("cart_totalAmount : ",cart_totalAmount);

    const totalProduct = document.getElementById("totalProduct") as HTMLElement;
    const totalAmount = document.getElementById("totalAmount") as HTMLElement;


    if (cartData === null || cartData.length === 0) {
        showCartItem.innerHTML = `
        <div class = 'd-flex justify-content-center align-items-center'>
            <h4>Cart is empty</h4>
        </div>
        `
        totalAmount.innerText = cart_totalAmount.toString()
    } else {

        showCartItem.innerHTML = ``

        cartData.forEach((item, index) => {
            let row = document.createElement('div');
            row.setAttribute('class', 'row border m-1');
            row.innerHTML = `
            <div class='col-md-3 d-flex justify-content-center align-items-center'>
                <img src=${item.image} alt=${item.title} class='w-75 h-75'>
            </div>
            <div class='col-md-6'>
                <h4 class='mt-4'>${item.title}</h4>
            </div>
            <div class='col-md-3'>
                <div class='d-flex justify-content-between mt-4'>
                    <button class='ms-1 ps-2 pe-2 pb-1' style="border: 0px" value = '${item.id},-'>-</button>
                    <p>${item.quantity}</p>
                    <button class='pb-1' style="border: 0px" value = '${item.id},+'>+</button>
                </div>
                <div class='d-flex justify-content-center mt-4'>
                    <h6>${item.quantity} * ${item.price}</h6>
                </div>
            </div>
        `
            showCartItem.appendChild(row)
        })

    }

    // for total cart item and price
    totalProduct.innerText = cartData.length.toString()
    cart_totalAmount = shippingCharge + cartData.reduce((acc, curr) => {
        return acc + (curr.price * curr.quantity);
    }, 0);
    totalAmount.innerText = "$ " + cart_totalAmount.toFixed(2)
}

displayCartItems()



// ...for change product quantity

showCartItem.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLInputElement
    if (target.value) {
        let [id, actionType] = target.value.split(",")
        if (id && actionType)
            changeQuantity(id, actionType);
    }
})

function changeQuantity(id: string, actionType: string) {
    const getItem = cartData.find((item) => {
        return item.id.toString() === id
    })
    if (getItem) {

        if (actionType === '+')
            getItem.quantity = getItem.quantity + 1;
        if (actionType === '-') {
            if (getItem.quantity > 1) {
                getItem.quantity--;
            } else {
                let updatedProducts = cartData.filter((item) => item.id.toString() !== id)
                cartData = [...updatedProducts];
            }
        }
        localStorage.setItem("store", JSON.stringify(cartData));
        displayCartItems();
    }
}