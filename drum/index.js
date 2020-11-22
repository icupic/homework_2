const drumC=document.querySelector('.button_container');
const buttonDrums=document.querySelectorAll('.button_drum');
const buttonK=document.querySelector('body');
const display=document.querySelector('.text');
const bankOne=document.querySelectorAll('.bank_1');
const bankTwo=document.querySelectorAll('.bank_2');
const bank1=document.querySelector('.bank-1');
const bank2=document.querySelector('.bank-2');
const volumeControl=document.querySelector('#volume_show');
let isOn=true;
let isBank=true;
let val;


    function drumOn(){
        isOn=true;
        function play(e){
            if(isOn==true){
            if(isBank==true){
            let p=e.target.textContent;
            for(let i=0;i<bankOne.length;i++){
               if(bankOne[i].classList.contains(p)){
                bankOne[i].currentTime = 0;
                bankOne[i].play();
                display.innerHTML=bankOne[i].id;
            }}}
           else if(isBank==false){
            let p=e.target.textContent;
            for(let i=0;i<bankTwo.length;i++){
               if(bankTwo[i].classList.contains(p)){
                bankTwo[i].currentTime = 0;
                bankTwo[i].play();
                display.innerHTML=bankTwo[i].id;
           }}}
        
        }}

        function playDrumKeys(e){
            if(isOn==true){
            if(isBank==true){
                let p=e.keyCode;
                for(let i=0;i<bankOne.length;i++){
                   if(bankOne[i].classList.contains(p)){
                    bankOne[i].currentTime = 0;
                    bankOne[i].play();
                    display.innerHTML=bankOne[i].id;
                }}}
            else if(isBank==false){
                let p=e.keyCode;
                for(let i=0;i<bankTwo.length;i++){
                   if(bankTwo[i].classList.contains(p)){
                    bankTwo[i].currentTime = 0;
                    bankTwo[i].play();
                    display.innerHTML=bankTwo[i].id;
                }}}
            
            }}

buttonDrums.forEach(bttn=>{
bttn.addEventListener('click',play);
});
buttonK.addEventListener('keydown',playDrumKeys);
}



    function thisVolume(volume_value)
    {
        volumeControl.innerHTML=volume_value;
        bankOne.forEach(bank=>{
            bank.volume=volume_value / 100;
            });
        
    }
  

function drumOff(){
        isOn=false;
}
 
 document.addEventListener('DOMContentLoaded', function () {
    let checkbox = document.querySelector('input[type="checkbox"]');
    let checkBank=document.querySelector('.check_bank');
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        drumOn();
      } else {
        drumOff();
      }
    });
    checkBank.addEventListener('change', function () {
        if (checkBank.checked) {
          isBank=false;
        } else {
          isBank=true;
        }
      });


  });