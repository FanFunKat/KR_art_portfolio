const image = document.querySelectorAll(".example__img");
const main = document.querySelector('.main');
// const productCard = document.getElementById('productCard');
// const cardCloseBtn = document.querySelector(".form__close");
// const buyBtn = document.querySelector("#formBuy");


image.forEach((img) => {
  img.addEventListener('click', () => {
    main.classList.add('show');
  })
})

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