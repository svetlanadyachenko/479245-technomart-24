var link = document.querySelector(".modal-form-link");
var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".close-button");
var linkmap = document.querySelector(".map-link");
var popupmap = document.querySelector(".modal-map");
var closemap = popupmap.querySelector(".close-button");
var linkbasket = document.querySelector(".buy-button");
var popupbasket = document.querySelector(".modal-basket");
var closebasket = popupbasket.querySelector(".close-button");
var linkdelivery = document.querySelector(".service-delivery-button");
var sliderdelivery = document.querySelector(".slider-delivery-list");
var linkwarranty = document.querySelector(".service-warranty-button");
var sliderwarranty = document.querySelector(".slider-warranty-list");
var linkcredit = document.querySelector(".service-credit-button");
var slidercredit = document.querySelector(".slider-credit-list");
var redbasket = document.querySelector(".basket-link");
var linkbookmarks = document.querySelector(".bookmarks-button");
var redbookmarks = document.querySelector(".bookmarks-link");
var iconleftlink = document.querySelector(".icon-left");
var perforators = document.querySelector(".perforators");
var drills = document.querySelector(".drills");
var iconrightlink = document.querySelector(".icon-right");
var iconleftlinkperforators = document.querySelector(".icon-left-perforators");
var perforators = document.querySelector(".perforators");
var drills = document.querySelector(".drills");
var iconrightlinkperforators = document.querySelector(".icon-right-perforators");
var perforatorsshow = document.querySelector(".perforators-show");
var drillsnone = document.querySelector(".drills-none");

iconleftlink.addEventListener("click", function (evt) {
  evt.preventDefault();
  perforators.classList.add("perforators-show");
  drills.classList.add("drills-none");
});

iconrightlink.addEventListener("click", function (evt) {
  evt.preventDefault();
  perforators.classList.add("perforators-show");
  drills.classList.add("drills-none");
});

iconleftlinkperforators.addEventListener("click", function (evt) {
  evt.preventDefault();
  perforatorsshow.classList.add("perforators");
  drillsnone.classList.add("drills");
});

iconrightlinkperforators.addEventListener("click", function (evt) {
  evt.preventDefault();
  perforatorsshow.classList.add("perforators");
  drillsnone.classList.add("drills");
});

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

linkwarranty.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderwarranty.classList.add("slider-warranty-list-show");
  slidercredit.classList.add("slider-credit-list");
  sliderdelivery.classList.add("slider-delivery-list-none");
});

linkcredit.addEventListener("click", function (evt) {
  evt.preventDefault();
  slidercredit.classList.add("slider-credit-list-show");
  sliderdelivery.classList.add("slider-delivery-list-none");
  sliderwarranty.classList.add("slider-warranty-list");
});

linkdelivery.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderdelivery.classList.add("slider-delivery-list");
  sliderwarranty.classList.add("slider-warranty-list");
  slidercredit.classList.add("slider-credit-list");
});

linkbasket.addEventListener("click", function (evt) {
  evt.preventDefault();
  redbasket.classList.add("basket-link-red");
});

linkbookmarks.addEventListener("click", function (evt) {
  evt.preventDefault();
  redbookmarks.classList.add("bookmarks-link-red");
});
