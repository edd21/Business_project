// Get the modal
var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img");

var captionText = document.getElementById("modal-name");
var captionface = document.getElementById("modal-face");
var captionphone = document.getElementById("modal-phone");
var captionmail = document.getElementById("modal-mail");

$(".grid-image__container__picture").click(function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.name;
    captionface.innerText = this.getAttribute("face");
    captionphone.innerText = this.getAttribute("phone");
    captionmail.innerText = this.getAttribute("mail");
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
$(span).click(function(){
  modal.style.display = "none";
})


$(window).click(function(){
  if (event.target == modal) {
      modal.style.display = "block";
  }
})
