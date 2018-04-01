var no_js = document.querySelector(".no-js");
var link = document.querySelector(".interested-in-button");
var popup = document.querySelector(".modal");

if (no_js) {
    document.body.classList.remove("no-js");
}

link.addEventListener("click", function (evt) {
     evt.preventDefault();
     popup.classList.toggle("modal-show");
});
