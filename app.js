import { galery } from './photoInfo.js';

const image = document.querySelectorAll(".example__img");
const main = document.querySelector('.main');
const productCard = document.getElementById('productCard');
const cardCloseBtn = document.querySelector(".form__close--btn");
const errorCard = document.getElementById('errorCard');
const errorCloseBtn = document.querySelector(".error__close--btn");
const buyBtn = document.getElementById('formBuy');
const inputImage = document.querySelector('.form__img');
const basketLink = document.querySelector('.basket')
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
  });
});

buyBtn.addEventListener('click', () => {
  let basket = JSON.parse(localStorage.getItem("basketJson")) || [];

  const existingProductIndex = basket.findIndex(product => product.title === inputTitle.textContent);
  if (existingProductIndex !== -1) {
    basket[existingProductIndex].quantity += 1;
  } else {
    const productInfo = { title: inputTitle.textContent, price: inputPrice.textContent, imageSrc: inputImage.src, quantity: 1 };
    basket.push(productInfo);
  }

  const basketJson = JSON.stringify(basket);
  localStorage.setItem("basketJson", basketJson);

  productCard.classList.remove('show');
  main.classList.remove('show');
  basketLink.classList.add('show');
});

cardCloseBtn.addEventListener('click', (e) => {
  main.classList.remove('show');
  productCard.classList.remove('show');
});

// errorCloseBtn.addEventListener('click', () => {
//   main.classList.remove('show');
//   errorCard.classList.remove('show');
// });

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    productCard.classList.remove('show');
    main.classList.remove('show');
    errorCard.classList.remove('show');
  }
});