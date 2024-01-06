const image = document.querySelectorAll(".example__img");
const main = document.querySelector('.main');
const productCard = document.getElementById('productCard');
const cardCloseBtn = document.querySelector(".form__close--btn");
const errorCard = document.getElementById('errorCard');
const errorCloseBtn = document.querySelector(".error__close--btn");
const buyBtn = document.getElementById('formBuy');
const inputImage = document.querySelector('.form__img')
const headerCard = document.querySelector('.form__title')

const galery = {
  wedding: {
    title: 'The wedding',
    hash: ['#couple', '#bride', '#groom'],
    price: 10.99,
  },
  children: {
    title: 'The portrait of children',
    hash: ['#siblings', '#family', '#smile'],
    price: 10.99,
  },
  city: {
    title: 'The city in gray',
    hash: ['#architecture', '#buildings', '#detail'],
    price: 10.99,
  },
  wild: {
    title: 'The Woman with the Tiger',
    hash: ['#wild', '#tiger', '#nature'],
    price: 10.99,
  },
  landscape: {
    title: 'Japanese garden',
    hash: ['#Japan', '#garden', '#view'],
    price: 10.99,
  },
  nature: {
    title: 'In nature',
    hash: ['#happy', '#nature', '#relax'],
    price: 10.99,
  },
  portrait: {
    title: 'The portrait of a redhead girl',
    hash: ['#redhead', '#jasmine', '#beauty'],
    price: 10.99,
  },
  pets: {
    title: 'Cat',
    hash: ['#cat', '#animal', '#cute'],
    price: 10.99,
  },
};

const inputTitle = document.getElementById('formTitle');
const inputPrice = document.getElementById('formPrice');
const inputHash1 = document.getElementById('formHash1');
const inputHash2 = document.getElementById('formHash2');
const inputHash3 = document.getElementById('formHash3');

image.forEach((img) => {
  img.addEventListener('click', (e) => {
    const imageName = img.getAttribute('data-info');
    const imageData = galery[imageName];

    inputImage.src = `${e.target.src}`;
    inputTitle.textContent = imageData.title;
    inputPrice.textContent = `$${imageData.price.toFixed(2)}`;
    inputHash1.textContent = imageData.hash[0];
    inputHash2.textContent = imageData.hash[1];
    inputHash3.textContent = imageData.hash[2];

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