let productsCountEL = document.querySelector("#products-count");
let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    productsCountEL.textContent = Number(productsCountEL.textContent) + 1;
  })
);

let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
let modal = document.querySelector(".modal");

moreDetailsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

let closeBtn = document.querySelector(".btn-close");

closeBtn.addEventListener("click", () => (modal.style.display = "none"));

let likeBtns = document.querySelectorAll(".likeBtn");

likeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.style.backgroundColor === "transparent") {
      btn.style.backgroundColor = "#2c71b8";
      btn.style.backgroundImage = "url(./img/like-white.png)";
    } else {
      btn.style.backgroundColor = "transparent";
      btn.style.backgroundImage = "url(./img/like.png)";
    }
  });
});
