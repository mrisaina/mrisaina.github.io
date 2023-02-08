import { $$ } from "./selectors.js";
// let productsCountEL = document.querySelector("#products-count");
// let addToCartBtns = document.querySelectorAll(".btn-add-to-cart");

// let moreDetailsBtns = document.querySelectorAll(".btn-more-details");
// let modal = document.querySelector(".modal");

// let closeBtn = document.querySelector(".btn-close");

// let likeBtns = document.querySelectorAll(".likeBtn");

// let sendMessageBtn = document.querySelector(".btn-send-message");

$$.addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    $$.productsCountEL.textContent = Number($$.productsCountEL.textContent) + 1;
  })
);

$$.moreDetailsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    $$.modal.style.display = "block";
  });
});

$$.closeBtn.addEventListener("click", () => {
  $$.modal.style.display = "none";
  if ($$.sendMessageBtn.disabled) {
    $$.sendMessageBtn.disabled = false;
  }
  if (!checkNameInput()) {
    $$.validationMessages[0].style.display = "none";
    $$.nameInput.style.border = "1px solid black";
  }
  if (!checkPhoneInput() || !$$.phoneInput.value.match(match)) {
    $$.validationMessages[1].style.display = "none";
    $$.phoneInput.style.border = "1px solid black";
  }
  document.querySelector(".modal-block").style.height = "200px";
  $$.nameInput.value = "";
  $$.phoneInput.value = "";
});

$$.likeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("likeBtnClick");
  });
});

// form validation

const checkNameInput = () => {
  if ($$.nameInput.value.length === 0) return false;
  return true;
};

const checkPhoneInput = () => {
  if ($$.phoneInput.value.length === 0) return false;
  return true;
};

const checkModalSize = () => {
  if (document.querySelector(".modal-block").style.height == "230px") {
    document.querySelector(".modal-block").style.height = "210px";
  } else if (document.querySelector(".modal-block").style.height == "210px") {
    document.querySelector(".modal-block").style.height = "200px";
  }
};

const match = /^\d+$/;

$$.sendMessageBtn.addEventListener("click", () => {
  if (!checkNameInput()) {
    $$.sendMessageBtn.disabled = true;
    $$.validationMessages[0].style.display = "block";
    $$.nameInput.style.border = "1px solid red";
    document.querySelector(".modal-block").style.height = "210px";
  }
  if (!checkPhoneInput() || !$$.phoneInput.value.match(match)) {
    $$.sendMessageBtn.disabled = true;
    $$.validationMessages[1].style.display = "block";
    $$.phoneInput.style.border = "1px solid red";
    document.querySelector(".modal-block").style.height = "210px";
  }

  if (checkPhoneInput() && !$$.phoneInput.value.match(match)) {
    document.querySelector('[name="phone"]').nextElementSibling.textContent =
      "Phone Field can contain only digits";
  }
  if (
    !checkNameInput() &&
    (!checkPhoneInput() || !$$.phoneInput.value.match(match))
  ) {
    document.querySelector(".modal-block").style.height = "230px";
  }
});

$$.nameInput.addEventListener("change", () => {
  checkModalSize();
  if ($$.validationMessages[0].style.display == "block") {
    $$.validationMessages[0].style.display = "none";
    $$.nameInput.style.border = "1px solid black";
    $$.sendMessageBtn.disabled = false;
  }
});

$$.phoneInput.addEventListener("change", () => {
  checkModalSize();
  if ($$.validationMessages[1].style.display == "block") {
    $$.validationMessages[1].style.display = "none";
    $$.phoneInput.style.border = "1px solid black";
    $$.sendMessageBtn.disabled = false;
  }
});
