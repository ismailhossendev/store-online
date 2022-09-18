const oldOrders = getStore('confirm')
const displayOrders = () => {
    const mainContainer = byId('main-container')
    oldOrders.forEach(product => {
        const { description, image, title, id, price } = product
        const des = description.slice(0,100)
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'glass');
        cardDiv.innerHTML = `
        <figure><img class="w-full h-[400px]" src="${image}" alt="car!"/></figure>
        <div class="card-body bg-slate-300">
          <h2 class="card-title">${title}</h2>
          <p>${des}..</p>
          <p>Price: ${price}$</p>
        </div>   
        <div class="card-actions justify-around bg-slate-300 pb-4">
            <button class="btn">Details</button>
          </div>
        `
        mainContainer.appendChild(cardDiv);
    });
}
displayOrders()

let cartProducts = getStore('key')
const bage = cartProducts.reduce((p,c) => p+c.value,0)
byId('bage').innerText = bage;
defPrice(cartProducts);
cartDisplay(cartProducts);
console.log(cartProducts);

// delete button sections
const trashHandle = (id) => {
    const afterDelete = cartProducts.filter(item => id != item.id)
    cartProducts = afterDelete
    cartDisplay(cartProducts);
  
  
    const bage = cartProducts.reduce((p,c) => p+c.value,0)
    byId('bage').innerText = bage;
  
    setStore('key',cartProducts)
  };
  