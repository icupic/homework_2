const images=document.querySelectorAll(".img1");
const imageConatiner=document.querySelector('.image-conatiner');
const clickLeft=document.querySelector("#left");
const clickRight=document.querySelector('#right');
const clickToShrink=document.querySelector(".shrink");
let initialShow=images[0].style.display='block';
let slideIndex=0;

let i=0;
let changeImgR=(e)=>{
   slideIndex++;
    if(slideIndex==images.length){
        slideIndex=0;
    }
    let i=0;
    for (i= 0; i < images.length; i++) {
    if(i!=slideIndex){
        images[i].style.display = "none";  
    }
    else{
        images[slideIndex].style.display='block';
    }
}}

let changeImgL=(e)=>{
    slideIndex--;
if(slideIndex<0){
    slideIndex=images.length-1;
}
for(i=images.length-1;i>=0;i--){
    if(i!=slideIndex){
        images[i].style.display = "none";  
    }
    else{
        images[slideIndex].style.display='block';
    } 
}}

let mouseSlide=(e)=>{
   let j=e.code;
    if(j=='ArrowRight'){
        slideIndex++;
        if(slideIndex==images.length){
            slideIndex=0;
        }
        let i=0;
        for (i= 0; i < images.length; i++) {
        if(i!=slideIndex){
            images[i].style.display = "none";  
        }
        else{
            images[slideIndex].style.display='block';
        }}}

  else if(j=='ArrowLeft'){
    slideIndex--;
    if(slideIndex<0){
        slideIndex=images.length-1;
    }
    for(i=images.length-1;i>=0;i--){
        if(i!=slideIndex){
            images[i].style.display = "none";  
        }
        else{
            images[slideIndex].style.display='block';
        }}}
}


function widen(e) {
    let i = e.target;
    images.forEach(imag=>{
        imag.style.width = '90vw';
        imag.style.height = '90vh';
    })
    clickToShrink.style.display='block';

}
function shrink(e){
    images.forEach(imag=>{
        imag.style.width = '700px';
        imag.style.height = '500px';
    })
 clickToShrink.style.display='none';
}
clickRight.addEventListener('click',changeImgR);
clickLeft.addEventListener('click',changeImgL);
images.forEach(imag=>{
    imag.addEventListener('click',widen);
 });
clickToShrink.addEventListener('click',shrink);
imageConatiner.addEventListener('keydown',mouseSlide);
imageConatiner.addEventListener('mouseover',mouseSlide);


