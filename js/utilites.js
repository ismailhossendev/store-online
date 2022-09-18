const byId = (id) => {
    const output = document.getElementById(id);
    return output;
}
const displayProduct = (data,container) => {
    data.forEach(product => {
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
          <button onclick="buyNow('${title}','${image}','${price}','${id}')" class="btn btn-primary">BUY NOW</button>
        </div>
      `
      container.appendChild(cardDiv);
  });
}

function cartDisplay(array) {
  const cartContainer = document.getElementById("cart-items-container");
  cartContainer.textContent = '';
  array.forEach(item => {
    const { value, name ,image,id,price} = item;
    const div = document.createElement("div");
    div.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "p-2",
      "rounded-md",
      "mb-4",
      "cart-item-style"
    );
    div.innerHTML = `
  
    <img
      src="${image}"
      class="w-[15%]"
      alt=""
    />
    <div class="flex items-center justify-between w-[80%]">
      <h1 class="font-semibold">${name}</h1>
      <input
        type="text"
        class="border-2 border-green-800 w-10 text-center rounded-md"
        value="${value}"
        readonly
      />
      <span onclick="trashHandle(${id},${price})" 
        ><i "
          class="check fa-sharp fa-solid fa-trash text-red-700 cursor-pointer text-xl"
        ></i
      ></span>
  
  </div>
    
    `;
    cartContainer.appendChild(div)
  })
  const total = prices.reduce((p,c) => p + c,0)
  byId('total').innerText = total.toFixed(2)
}
