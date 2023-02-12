import { $$ } from "./selectors.js";

function openModal() {
  $$.modal.classList.add("show");
  $$.modal.classList.remove("hide");
}

function closeModal() {
  $$.modal.classList.add("hide");
  $$.modal.classList.remove("show");
}

$$.modal.addEventListener("click", function (e) {
  if (e.target === $$.modal) {
    closeModal();
  }
});

$$.addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    $$.productsCountEL.textContent = Number($$.productsCountEL.textContent) + 1;
  })
);

$$.moreDetailsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    openModal();
  });
});

$$.closeBtn.addEventListener("click", () => {
  closeModal();
  if ($$.sendMessageBtn.disabled) {
    $$.sendMessageBtn.disabled = false;
  }
  if (!checkNameInput()) {
    $$.validationMessages[0].classList.remove("show");
    $$.validationMessages[0].classList.add("hide");
    $$.nameInput.style.border = "1px solid black";
  }
  if (!checkPhoneInput() || !$$.phoneInput.value.match(match)) {
    $$.validationMessages[1].classList.remove("show");
    $$.validationMessages[1].classList.add("hide");
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

window.addEventListener("scroll", function scrolling() {
  if (window.scrollY >= document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", scrolling);
  }
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
    $$.validationMessages[0].classList.remove("hide");
    $$.validationMessages[0].classList.add("show");
    $$.nameInput.style.border = "1px solid red";
    document.querySelector(".modal-block").style.height = "210px";
  }
  if (!checkPhoneInput() || !$$.phoneInput.value.match(match)) {
    $$.sendMessageBtn.disabled = true;
    $$.validationMessages[1].classList.remove("hide");
    $$.validationMessages[1].classList.add("show");
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
  if ($$.validationMessages[0].classList.contains("show")) {
    $$.validationMessages[0].classList.remove("show");
    $$.validationMessages[0].classList.add("hide");
    $$.nameInput.style.border = "1px solid black";
    $$.sendMessageBtn.disabled = false;
  }
});

$$.phoneInput.addEventListener("change", () => {
  checkModalSize();
  if ($$.validationMessages[1].classList.contains("show")) {
    $$.validationMessages[1].classList.remove("show");
    $$.validationMessages[1].classList.add("hide");
    $$.phoneInput.style.border = "1px solid black";
    $$.sendMessageBtn.disabled = false;
  }
});

//slick

$(".slider-block").slick({
  dots: true,
  arrows: true,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
});
