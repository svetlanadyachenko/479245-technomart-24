var link = document.querySelector(".modal-form-link");
var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".close-button");
var username = popup.querySelector("[name=name]");
var form = popup.querySelector("form");
var email = popup.querySelector("[name=e-mail]");
var text = popup.querySelector("[name=letter-text]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-form-show");
  if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-form-show");
  popup.classList.remove("modal-form-error");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", username.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27)
  evt.preventDefault(); {
    if (popup.classList.contains("modal-form-show")) {
      popup.classList.remove("modal-form-show");
      popup.classList.remove("modal-form-error");
    }
  }
});

var linkmap = document.querySelector(".map-link");
var popupmap = document.querySelector(".modal-map");
var closemap = popupmap.querySelector(".close-button");

linkmap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.add("modal-map-show");
});

closemap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27)
  evt.preventDefault(); {
    if (popupmap.classList.contains("modal-map-show")) {
        popupmap.classList.remove("modal-map-show");
    }
  }
});

var linkbasket = document.querySelector(".buy-button");
var popupbasket = document.querySelector(".modal-basket");
var redbasket = document.querySelector(".basket-link");
var closebasket = popupbasket.querySelector(".close-button");
var parent = document.querySelector(".index-catalog-list");

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

linkbookmarks.addEventListener("click", function (evt) {
  evt.preventDefault();
  redbookmarks.classList.add("bookmarks-link-red");
});

var linkperforators = document.querySelector(".drills-show .slider-no-active") ;
var linkdrills = document.querySelector(".perforators .slider-no-active");
var sliderperforators = document.querySelector(".perforators");
var sliderdrills = document.querySelector(".drills-show");
var linkleft = document.querySelector(".drills-show .icon-left") ;
var linkright = document.querySelector(".drills-show .icon-right");
var linkleftperforators = document.querySelector(".perforators .icon-left") ;
var linkrightperforators = document.querySelector(".perforators .icon-right");

linkperforators.addEventListener("click", function(evt) {
  evt.preventDefault();
  sliderperforators.classList.add("perforators-show");
  sliderdrills.classList.add("drills");
});

linkdrills.addEventListener("click", function(evt) {
  evt.preventDefault();
  sliderdrills.classList.remove("drills");
  sliderperforators.classList.remove("perforators-show");
});

linkleft.addEventListener("click", function(evt) {
  evt.preventDefault();
  sliderperforators.classList.add("perforators-show");
  sliderdrills.classList.add("drills");
});

linkright.addEventListener("click", function(evt) {
  evt.preventDefault();
  sliderperforators.classList.add("perforators-show");
  sliderdrills.classList.add("drills");
});

linkleftperforators.addEventListener("click", function(evt) {
  evt.preventDefault();
  sliderdrills.classList.remove("drills");
  sliderperforators.classList.remove("perforators-show");
});

linkrightperforators.addEventListener("click", function(evt) {
  evt.preventDefault();
  sliderdrills.classList.remove("drills");
  sliderperforators.classList.remove("perforators-show");
});

var linkdeliveryonwar = document.querySelector(".warranty-list .delivery-button");
var linkdeliveryoncred = document.querySelector(".credit-list .delivery-button");
var linkwarrantyondel = document.querySelector(".delivery-list-show .warranty-button");
var linkwarrantyoncred = document.querySelector(".credit-list .warranty-button");
var linkcreditondel = document.querySelector(".delivery-list-show .credit-button");
var linkcreditonwar = document.querySelector(".warranty-list .credit-button");
var sliderdelivery = document.querySelector(".delivery-list-show");
var sliderwarranty = document.querySelector(".warranty-list");
var slidercredit = document.querySelector(".credit-list");

linkdeliveryonwar.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderdelivery.classList.remove("delivery-list");
  sliderwarranty.classList.remove("warranty-list-show");
  slidercredit.classList.add("credit-list");
});

linkdeliveryoncred.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderdelivery.classList.remove("delivery-list");
  sliderwarranty.classList.add("warranty-list");
  slidercredit.classList.remove("credit-list-show");
});

linkwarrantyondel.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderdelivery.classList.add("delivery-list");
  sliderwarranty.classList.add("warranty-list-show");
  slidercredit.classList.add("credit-list");
});

linkwarrantyoncred.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderdelivery.classList.add("delivery-list");
  sliderwarranty.classList.add("warranty-list-show");
  slidercredit.classList.remove("credit-list-show");
});

linkcreditondel.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderdelivery.classList.add("delivery-list");
  sliderwarranty.classList.add("warranty-list");
  slidercredit.classList.add("credit-list-show");
});

linkcreditonwar.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderdelivery.classList.add("delivery-list");
  sliderwarranty.classList.remove("warranty-list-show");
  slidercredit.classList.add("credit-list-show");
});
