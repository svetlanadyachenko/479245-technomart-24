var linkbasket = document.querySelector(".buy-button");
var popupbasket = document.querySelector(".modal-basket");
var redbasket = document.querySelector(".basket-link");
var closebasket = popupbasket.querySelector(".close-button");
var parent = document.querySelector(".catalog-list");

parent.addEventListener("click", function (evt) {
	evt.preventDefault();
	var target  = evt.target;
	while (target !== parent) {
		if (target.className === "buy-button") {
		  popupbasket.classList.add("modal-basket-show");
		  redbasket.classList.add("basket-link-red");
		  return;
		}
	target = target.parentNode;
	}
});

closebasket.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupbasket.classList.remove("modal-basket-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27)
  evt.preventDefault(); {
    if (popupbasket.classList.contains("modal-basket-show")) {
        popupbasket.classList.remove("modal-basket-show");
    }
  }
});

var linkbookmarks = document.querySelector(".bookmarks-button");
var redbookmarks = document.querySelector(".bookmarks-link");

parent.addEventListener("click", function (evt) {
	evt.preventDefault();
	var targetbookmarks  = evt.target;
	while (targetbookmarks !== parent) {
		if (targetbookmarks.className === "bookmarks-button") {
		  redbookmarks.classList.add("bookmarks-link-red");
		  return;
		}
	targetbookmarks = targetbookmarks.parentNode;
	}
});
