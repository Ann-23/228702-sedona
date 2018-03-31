 var link = document.querySelector(".interested-in-button");
 
 var popup = document.querySelector(".modal");
 
 	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		if (popup.classList.contains("modal-open")) {
        popup.classList.remove("modal-open");
        popup.classList.add("modal-close");
      } else{
	  	popup.classList.toggle("modal-show");
	  }
    });