const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },
];

const inputSearch = document.querySelector(".input-search");
const menuProducts = document.querySelector(".list-products");
const containerProducts = document.querySelector(".cards-watch");

const getDataProducts = (products) => {
 
  containerProducts.innerHTML = products.map(
    (e) =>
      `<div class="card-product">
        <img src=${e.img} alt=${e.name} class="image-product">
        <p class="description-product">${e.name}</p>
        <span class="price-product">${e.price}</span>
      </div>`
  );
};
getDataProducts(data);

inputSearch.addEventListener("keyup", (event) => {
  const value = event.target.value;
  console.log(value);

  if (value) {
    getDataProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    getDataProducts(data);
  }
});


const getItemsProducts=(products)=>{
  const dataItems=products.map((e)=>e.cat)

  menuProducts.innerHTML = products
  .map((e) => `<li class="item-product">${e.cat}</li>`)
  .join("");

}
getItemsProducts(data)