export const $$ = {
  get productsCountEL() {
    return document.querySelector("#products-count");
  },
  get addToCartBtns() {
    return document.querySelectorAll(".btn-add-to-cart");
  },
  get moreDetailsBtns() {
    return document.querySelectorAll(".btn-more-details");
  },
  get modal() {
    return document.querySelector(".modal");
  },
  get closeBtn() {
    return document.querySelector(".btn-close");
  },
  get likeBtns() {
    return document.querySelectorAll(".likeBtn");
  },
  get sendMessageBtn() {
    return document.querySelector(".btn-send-message");
  },
  get nameInput() {
    return document.querySelector('[name="userName"]');
  },
  get phoneInput() {
    return document.querySelector('[name="phone"]');
  },
  get validationMessages() {
    return document.querySelectorAll(".validation-message");
  },
};
