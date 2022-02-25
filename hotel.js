// Hotel Block Message Alert
var hotelMessage = document.getElementById("hotel-message-popup");
var hotelClose = document.getElementById("hotel-close");

window.addEventListener("load", function(){
  setTimeout(
    function open(event){
      hotelMessage.style.display = "block";
    },
    2000
  )
});

hotelClose.onclick = function() {
  hotelMessage.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == hotelMessage) {
    hotelMessage.style.display = "none";
  }
}