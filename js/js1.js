 var link = document.querySelector(".interested-in-button");
 var popup = document.querySelector(".modal");

 var form = popup.querySelector("form");
 var adults = popup.querySelector("[name="adults-amount"]");
 var children = popup.querySelector("[name="children-amount"]");

 /*при отсутствии поддержки localStorage*/
 var isStorageSupport = true;
 var storage = "";
 try {
    storage = localStorage.getItem("adults-amount");
 }  catch (err) {
    isStorageSupport = false;
 }

 link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-show");

    if (storage) {
      adults-amount.value = storage;
      children-amount.focus();
    } else {
      adults-amount.focus();
    }
});

form.addEventListener("submit", function (evt) {
    if (!adults-amount.value || !children-amount.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
	  popup.classList.add("modal-error");
	} else {
	  if (isStorageSupport) {
      localStorage.setItem("adults-amount", adults-amount.value);
    }
  }
});
