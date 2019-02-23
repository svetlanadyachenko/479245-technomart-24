var link = document.querySelector(".modal-form-link");
var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".close-button");
var linkmap = document.querySelector(".map-link");
var popupmap = document.querySelector(".modal-map");
var closemap = popupmap.querySelector(".close-button");
var linkbasket = document.querySelector(".buy-button");
var popupbasket = document.querySelector(".modal-basket");
var closebasket = popupbasket.querySelector(".close-button");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-form-show");
});

close.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.remove("modal-form-show");
 });

 linkmap.addEventListener("click", function (evt) {
   evt.preventDefault();
   popupmap.classList.add("modal-map-show");
 });

 closemap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupmap.classList.remove("modal-map-show");
  });

  linkbasket.addEventListener("click", function (evt) {
     evt.preventDefault();
     popupbasket.classList.add("modal-basket-show");
  });

  closebasket.addEventListener("click", function (evt) {
     evt.preventDefault();
     popupbasket.classList.remove("modal-basket-show");
  });
