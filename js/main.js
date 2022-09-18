const mobileApi = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json();
    displayData(data)
}
mobileApi()

// Global variable and array 
let prices = []
const oldData = getStore('key')
let cartProducts = [...oldData];




const displayData = (data) => {
  const mainContainer = byId('main-container') 
  displayProduct(data,mainContainer)
}

const buyNow = (name, img, price, id , description) => {
  prices.push(parseFloat(price))
  const title = name.slice(0, 10)
  let couts = 1
  const products = {
    title: title,
    image: img,
    price: price,
    id: id,
    value: couts,
    description: description
  };
  const test = cartProducts.findIndex(x => x.id === id);
  if (test === -1) {
    cartProducts.push(products)
  }
  else {
    cartProducts[test].value += 1
  }
  setStore('key',[...cartProducts])
  const bage = cartProducts.reduce((p,c) => p+c.value,0)
  byId('bage').innerText = bage;
};


byId('cart').addEventListener('click', function () {
  cartDisplay(cartProducts);
  defPrice(cartProducts);
});


// delete button sections
const trashHandle = (id,price) => {
  const afterDelete = cartProducts.filter(item => id != item.id)
  cartProducts = afterDelete
  cartDisplay(cartProducts);


  const afterPrice = prices.filter(p => p != price);
  prices = afterPrice
  defPrice(cartProducts);

  const bage = cartProducts.reduce((p,c) => p+c.value,0)
  byId('bage').innerText = bage;

  setStore('key',cartProducts)
};



const bage = cartProducts.reduce((p,c) => p+c.value,0)
byId('bage').innerText = bage;
defPrice(cartProducts);


byId('confirm').addEventListener('click', function () {
  const oldOrders = getStore('confirm');
  const totalOrders = [...oldOrders,...cartProducts]
  setStore('confirm', totalOrders);
  cartProducts = [];
  cartDisplay(cartProducts);
  localStorage.removeItem('key')
  byId('bage').innerText = 0;
  location.href = "/pages/order.html"
})