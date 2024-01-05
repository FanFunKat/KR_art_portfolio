const image = document.querySelectorAll(".example__img");
const main = document.querySelector('.main');
const productCard = document.getElementById('productCard');
const cardCloseBtn = document.querySelector(".form__close--btn");
const errorCard = document.getElementById('errorCard');
const errorCloseBtn = document.querySelector(".error__close--btn");
const buyBtn = document.getElementById('formBuy');
const inputImage = document.querySelector('.form__img')

const title = document.getElementsByClassName('form__title')

image.forEach((img) => {
  img.addEventListener('click', (e) => {
    inputImage.src = `${e.target.src}`;
    main.classList.add('show');
    productCard.classList.add('show');
  })
});

buyBtn.addEventListener('click', () => {
  productCard.classList.remove('show');
  errorCard.classList.add('show');
});

cardCloseBtn.addEventListener('click', (e) => {
  main.classList.remove('show');
  productCard.classList.remove('show');
});

errorCloseBtn.addEventListener('click', () => {
  main.classList.remove('show');
  errorCard.classList.remove('show');
});

// img.addEventListener("click", () => main.classList.add("show"))
// const image = document.querySelectorAll(".example__img");
// const magicBox = document.getElementById("magicBox");
// const nav = document.getElementsByClassName("nav__items");


// image.forEach((image) => {
//   image.addEventListener("click", (e) => {
//     const title = "Tytuł";
//     const price = "10$"
//     const tags = "przykładowe tagi: tag 1, tag 2";
//     const location = "przykładowa lokalizacja";
//     const productCard = document.createElement("div");
//     const infoWindow = document.createElement("div");
//     productCard.classList.add("product_card");
//     productCard.innerHTML = `
//       <form>
//       <input type="image" src="${e.target.src}"/>
//         <h2>${title}</h2>
//         <h2>${price}</h2>
//         <p>${tags}</p>
//         <p>${location}</p>
//         <button class="closeBtn">x</button>
//         <button class="buyBtn">Add to basket</button>
//       </form>`
//       ;
//     magicBox.appendChild(productCard);

//     const buyBtn = document.querySelector(".buyBtn");
//     buyBtn.addEventListener("click", () => {
//       const cart = [];
//       const productInfo = { title: title, price: price, imageSrc: e.target.src };
//       cart.push(productInfo);
//       const cartJson = JSON.stringify(cart);
//       localStorage.setItem("cartJson", cartJson);
//     });

//     const closeBtn = document.querySelector(".closeBtn");
//     closeBtn.addEventListener("click", () => {
//       magicBox.removeChild(productCard);
//     });
//   });
// });