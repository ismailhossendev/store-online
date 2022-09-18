const mobileApi = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json();
    displayData(data)
}
mobileApi()
const displayData = (data) => {
    console.log(data);
    const mainContainer = byId('main-container') 
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
            <button class="btn btn-primary">BUY NOW</button>
          </div>
        `
        mainContainer.appendChild(cardDiv);
    });
}

const buyNow = () => {
    
}