const gallery = document.querySelector('.gallery');
let modal = gallery.querySelector('#myModal');
let span = gallery.getElementsByClassName("close")[0];

// close the modal
function closeModal() {
  modal.style.display = "none";
}

function closeClick() {
  span.addEventListener('click', closeModal); 
}

// active the modal
function modalClick(element) {
  modal.style.display = "block";
  document.getElementById("modaledImg").src = element.src;
  closeClick();
}


