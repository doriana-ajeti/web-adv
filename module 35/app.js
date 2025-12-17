var slideIndex = 0;

function showSlides(n){
    var slides = document.getElementsByClassName("slide");

for(i = 0; 1 < slides.length; i++){
        slides[1].style.display = "none";}

if(
    n > slides.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length;
    }
slides[slidesIndex -1].style.display = "block";}
showSlides(slideIndex);
function plusSlides(n){
    slideINdex += n;
    showSlides(slideIndex);
}
setInterval(plusSloides, 3000,1);