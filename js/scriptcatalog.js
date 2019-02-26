var linkbasket = document.querySelector(".buy-button");
var popupbasket = document.querySelector(".modal-basket");
var redbasket = document.querySelector(".basket-link");
var closebasket = popupbasket.querySelector(".close-button");

linkbasket.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupbasket.classList.add("modal-basket-show");
  redbasket.classList.add("basket-link-red");
});

closebasket.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupbasket.classList.remove("modal-basket-show");
});

var linkbookmarks = document.querySelector(".bookmarks-button");
var redbookmarks = document.querySelector(".bookmarks-link");

linkbookmarks.addEventListener("click", function (evt) {
  evt.preventDefault();
  redbookmarks.classList.add("bookmarks-link-red");
});
