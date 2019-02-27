var linkbasket = document.querySelector(".buy-button");
var popupbasket = document.querySelector(".modal-basket");
var redbasket = document.querySelector(".basket-link");
var closebasket = popupbasket.querySelector(".close-button");
var linkbookmarks = document.querySelector(".bookmarks-button");
var redbookmarks = document.querySelector(".bookmarks-link");
var parent = document.querySelector(".catalog-list");

parent.addEventListener('click', function (evt) {
	evt.preventDefault();
	var target  = evt.target;
	while (target !== parent) {
		if (target.className === 'buy-button') {
		  popupbasket.classList.add("modal-basket-show");
		  redbasket.classList.add("basket-link-red");
		  return;
		}
		if (target.className === "bookmarks-button") {
		  redbook.classList.add("bookmarks-link-red");
		  return;
		}
	target = target.parentNode;
	}
});


closebasket.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupbasket.classList.remove("modal-basket-show");
});


linkbookmarks.addEventListener("click", function (evt) {
  evt.preventDefault();
  redbookmarks.classList.add("bookmarks-link-red");
});
