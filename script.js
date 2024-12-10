let products = fetch("https://fakestoreapi.com/products");
let body = document.body;
products
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((product) => {
      body.style.display = "grid";
      body.style.gridTemplateColumns = "1fr 1fr 1fr";

      body.innerHTML += `<div class="card"  style="width: 80%;  margin-bottom:2rem">
  <img src="${product.image}" class="card-img-top" style="width: 80%; padding:1rem; height:50%" alt="...">
  <div class="card-body ">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Price : ${product.price}</li>
    <li class="list-group-item">Rating : ${product.rating.rate}</li>
    <li class="list-group-item">Count : ${product.rating.count}</li>
  </ul>
  <div class="card-body">
    <p  class="card-link">Category : ${product.category}</p>
  </div>
</div>`;
      console.log(product);
    });
  });
