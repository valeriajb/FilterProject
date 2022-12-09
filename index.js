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
const inputRange=document.querySelector(".input-range")
const numberRange=document.querySelector(".number-range")

const getDataProducts = (filteredProducts) => {
  containerProducts.innerHTML = filteredProducts.map(
    (e) =>
      `<div class="card-product">
        <img src=${e.img} alt=${e.name} class="image-product">
        <p class="description-product">${e.name}</p>
        <span class="price-product">$${e.price}</span>
      </div>`
  );
};
getDataProducts(data);

inputSearch.addEventListener("keyup", (event) => {
  const value = event.target.value.toLowerCase();
  console.log(value);
  if (value) {
    getDataProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    getDataProducts(data);
  }
});

const getItemsProducts = (products) => {
  const categoriesData = products.map((item) => item.cat);
  const categoriesFilter = categoriesData.filter(
    (item, index) => categoriesData.indexOf(item) === index // Recordemos que el indexOf, retorna la posiciòn de lo que se entre por paràmetro, solo envìa la posiciòn de un elemento, y envia el primer.
  );
  const allCategories = ["All",...categoriesFilter]; //Si solo se le pone coma, se toma como si solo ese array fuera un elemento, mientras colcando los 3 puntos me concatena el array, conviertiendo en varios elementos

  menuProducts.innerHTML = allCategories
    .map((item) => `<li class="item-product">${item}</li>`).join(""); //El join en cada elemnto se inserta lo que se entra por paràmetro en la funciòn
    console.log(allCategories);
};
getItemsProducts(data);

menuProducts.addEventListener("click", (e) => {
  const valueCategorie = e.target.textContent;
  valueCategorie !== "All"
    ? getDataProducts(data.filter((item) => item.cat === valueCategorie))
    : getDataProducts(data);
});



const priceProducts=data.map((item)=>item.price)
const priceMin=Math.min(...priceProducts)
const priceMax=Math.max(...priceProducts)

inputRange.min=priceMin
inputRange.max=priceMax

inputRange.addEventListener("input",(e)=>{ 
  const valueRange=e.target.value
  numberRange.textContent=`$ ${valueRange}`

  getDataProducts(data.filter((item)=>item.price<=valueRange))
})