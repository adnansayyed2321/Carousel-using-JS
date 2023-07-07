document.addEventListener("DOMContentLoaded", function(){
    
    var sliderContainer = document.querySelector(".bg-container");
    var slider = document.querySelector(".slide-container");
    var prevBtn = document.querySelector('.prev-btn');
    var nextBtn = document.querySelector('.next-btn');
    var images = slider.querySelectorAll('img');
    var slideInterval = 3000;
    var slideIndex = 0;
    
    
    function slideNext() {
    slideIndex++;
    if (slideIndex >= images.length) {
      slideIndex = 0;
    }
    slideToCurrent();
   }
    
    function slidePrev() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = images.length - 1;
    }
    slideToCurrent();
  }
    
    function slideToCurrent(){
        var slideWidth = sliderContainer.offsetWidth;
        var slideOffset = -slideIndex * slideWidth;
        slider.style.transform = 'translateX(' + slideOffset + 'px)';
    }
    
    
    function slideNext(){
        slideIndex++;
        if (slideIndex >= images.length){
            slideIndex = 0;
        }
        slideToCurrent()
    }
    
    function startSlideShow(){
       slideShowInterval = setInterval(slideNext,slideInterval);
    }
    
    function pauseSlideShow() {
    clearInterval(slideShowInterval);
  }
    prevBtn.addEventListener('click', slidePrev);
    nextBtn.addEventListener('click', slideNext);
    sliderContainer.addEventListener('mouseover', pauseSlideShow);
    sliderContainer.addEventListener('mouseout', startSlideShow);
    startSlideShow();
});