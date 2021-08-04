var cliffsideModal = document.getElementById("cliffside-modal");

var indigoModal = document.getElementById("indigo-modal");

var cliffsideButton = document.getElementById("cliffside-button");

var indigoButton = document.getElementById("indigo-button");

var cliffsideClose = document.getElementById("cliffside-close");

var indigoClose = document.getElementById("indigo-close");

// When the user clicks on the button, open the modal
cliffsideButton.onclick = function() {
  cliffsideModal.style.display = "block";
}

indigoButton.onclick = function() {
    indigoModal.style.display = "block";
  }

// When the user clicks on the close button, close the modal
cliffsideClose.onclick = function() {
  cliffsideModal.style.display = "none";
}

indigoClose.onclick = function() {
    indigoModal.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == cliffsideModal) {
    cliffsideModal.style.display = "none";
  }
  else if (event.target == indigoModal) {
      indigoModal.style.display = "none";
  }
}