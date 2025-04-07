var slideText = 0;
showSlide();

function showSlide() {
    var i;
    var slides = document.getElementsByClassName("slides");

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show");
      }
      
      slideIndex++;
      
      if (slideIndex > slides.length) {slideIndex = 1}
      
      slides[slideIndex-1].classList.add('show');
      
      setTimeout(tampilkanSlide, 3000);
}




