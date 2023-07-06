 const products = [
    {
    name: "Cherry",
    price: 3.45,
    quantity: 0,
    productId: 1,
    image:"../src/images/cherry.jpg",
  },
  {
    name:"orange",
    price: 4.35,
    quantity: 0,
    productId: 2,
    image:"../src/images/orange.jpg",
  },
  {
    name: "stawberry",
    price:3.23,
    quantity:0,
    productId:3,
    image:"../src/images/strawberry.jpg",
  },
];


const cart = [];
function addProductToCart(productId) {
  const productIndex = cart.findIndex(product => product.productId === productId);
  if (productIndex !== -1) {
     cart[productIndex].quantity += 1;
    } else {
      const product = products.find(product => product.productId === productId);
      if (product) {
        const productCopy = { ...product }; 
        productCopy.quantity = 1;
        cart.push(productCopy);
      } else {
    
      }
    }
  }
  
  
  function increaseQuantity(productId) {
    const product = cart.find(product => product.productId === productId);
    if (product) {
      product.quantity += 1;
    } else {
    
    }
  };
  

  function decreaseQuantity(productId) {
    const product = cart.find(product => product.productId === productId);
    if (product) {
      product.quantity -= 1;
      if (product.quantity === 0) {
        removeProductFromCart(productId);
      }
    } else {
        
    }};
    
  
function removeProductFromCart(productId){
    const productIndex = cart.findIndex(product => product.productId === productId);
    if (productIndex !== -1) {
      cart[productIndex].quantity = 0;
      cart.splice(productIndex, 1);
    } else {
      
    }
  };
  
  function cartTotal() {
    
    let total=0;
    cart.forEach(product => {
      total += product.price * product.quantity;
    });
  
    return total;
  }

  function emptyCart() {
    cart.length =0;       
  }

  let totalPaid = 0;

  function pay(amount) {
    const total = cartTotal();
    const remainingBalance = total - (amount + totalPaid);
    
    if (remainingBalance > 0) {
      totalPaid += amount;
      return -remainingBalance;
    } else if (remainingBalance === 0) {
      emptyCart();
      totalPaid = 0;
      return 0;
    } else {
      emptyCart();
      const refundAmount = -remainingBalance;
      totalPaid = 0;
      return refundAmount;
    }
  }
    

 
  




module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   
}
