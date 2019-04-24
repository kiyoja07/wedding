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


// img 태그에 onclick="modalClick(this)" 추가해야 함
// <img class="galleryImg" onclick="modalClick(this)" src="image/PCSK_0743.jpg" alt="Elegant Moments">

