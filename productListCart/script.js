
const produtContainer = document.querySelector(".product-container")
let  cartSpan = document.querySelector(".cart-count")

const cart = JSON.parse(localStorage.getItem("cart")) || []
let cartCountData = cart.length
cartSpan.innerText = cartCountData
let renderProduct = () => {
    let productrender = ''
     shopItemsData.forEach((produt,index) => {
        // console.log(produt.img)
        productrender += `
        <div class='shop-item'>
         <img src="${produt.img}">
         <div class="prodc-info">
         <h4>name :${produt.name}</h4>
         <h5>price :${produt.price}</h5>
         <h6>desc :${produt.desc}</h6>
         <button onclick="addToCart(${index})">Add to Cart</button>
         </div>
        </div>
        
        `
    })
    produtContainer.innerHTML = productrender
    
}

let addToCart = (index) =>{

    const cartItem = shopItemsData[index]
    // const cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(cartItem)
    localStorage.setItem("cart",JSON.stringify(cart))
    cartCountData++
     cartSpan.innerText = cartCountData
    //console.log(cart)
}
renderProduct()