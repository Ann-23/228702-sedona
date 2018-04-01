var no_js = document.querySelector(".no-js");
var form = popup.querySelector("interested-in-form");
var link = document.querySelector(".interested-in-button");
var popup = document.querySelector(".modal");

if (no_js) {
    document.body.classList.remove("no-js");
}

link.addEventListener("click", function (evt) {
     evt.preventDefault();
     if (popup.classList.contains("modal-open")) {
         popup.classList.remove("modal-open");
         popup.classList.add("modal-close");
     } else {
         popup.classList.toggle("modal-show");
    }
 });
