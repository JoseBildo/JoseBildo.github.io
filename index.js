'use strict';

   



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 2500); // Change image every 2 seconds

}












   
   /*
   const imgs = ['/icon/Isologo/Profibra_isologo_color.ico',
   '/icon/Isologo/Profibra_isologo_negro.png', '/icon/Isologo/Profibra_isologo_blanco.png'];

  const Slide = document.querySelector('.carousel-item');
   const interval = setInterval(function(){
        startCarousel();
   }, 3000);
   var i = 1;
   startCarousel=() =>{
    Slide.style.backgroundImage = `url(${imgs[i]})`;
   for (let i = 0; i < array.length; i++) {
     const element = array[i];
     
   }
 };
   */
 

 /*
  
    window.addEventListener('DOMcontentLoaded',()=>{
      const Slide = document.querySelector('.carousel-item');
      Slide.classList.toggle('active', window.onloadstart() );
    });
   

  /*
    $(document).ready(function(){
 
      $('.carousel').carousel();
     
    });
    
  */


   