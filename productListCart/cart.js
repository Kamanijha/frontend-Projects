
const shopingCart = document.querySelector("#shoping-cart")
const label = document.querySelector("#label")

let cart = JSON.parse(localStorage.getItem("cart")) || []

let calculate = () => {
    let cartIcon = document.querySelector(".cart-count")
    cartIcon.innerHTML = cart.length
}


let generateCartItem = () => {
    if (cart.length !== 0) {
        shopingCart.innerHTML = cart.map((data) => {
            // console.log(data)
            return `
            <div class='cart-item'>
            <div class='cart-img'>
             <img src="${data.img}">
            </div>
            <p>name :${data.name}</p>
            <h6>price :${data.price}</h6>
            <div class="quantity-control">
            <button onclick="countIncrease(${data.id})">+</button>
            <span>${data.quantity}</span>
            <button onclick="countDecrease(${data.id})">-</button>
            </div>
            
            <button onclick="addCartRemove(${data.id})">Remove</button>
            </div>
            `;
        }).join('')
    } else {
        shopingCart.innerHTML = "your cart is empty"
    }
}

let addCartRemove = (id)=>{
   cart = cart.filter((x)=>x.id != id)
   localStorage.setItem('cart',JSON.stringify(cart))
   calculate()
   generateCartItem()
}
calculate()
generateCartItem()
let countIncrease = (id)=>{
    let item = 
}