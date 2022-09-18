const mobileApi = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json();
    displayData(data)
}
mobileApi()

// Global variable and array 
let prices = []
let cartProducts = [];



const displayData = (data) => {
  const mainContainer = byId('main-container') 
  displayProduct(data,mainContainer)
}

const buyNow = (name, img, price, id) => {
  prices.push(parseFloat(price))
  const title = name.slice(0, 10)
  let couts = 1
  const products = {
    name: title,
    image: img,
    price: price,
    id: id,
    value: couts
  };
  const test = cartProducts.findIndex(x => x.id === id);
  if (test === -1) {
    cartProducts.push(products)
  }
  else {
    cartProducts[test].value += 1
  }
  const bage = cartProducts.reduce((p,c) => p+c.value,0)
  byId('bage').innerText = bage;
};
byId('cart').addEventListener('click', function () {
  cartDisplay(cartProducts);
});

// delete button sections
const trashHandle = (id,price) => {
  const afterDelete = cartProducts.filter(item => id != item.id)
  cartProducts = afterDelete
  cartDisplay(cartProducts);


  const afterPrice = prices.filter(p => p != price);
  prices = afterPrice
  const total = prices.reduce((p,c) => p + c,0)
  byId('total').innerText = total.toFixed(2)

  const bage = cartProducts.reduce((p,c) => p+c.value,0)
  byId('bage').innerText = bage;
} 