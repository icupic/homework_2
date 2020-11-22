const displayC=document.querySelector('.display_clock');
const start=document.querySelector('.start');
const restart=document.querySelector('.reset');
const stopp=document.querySelector('.stop');
const title=document.querySelector('title');
const pomodoro=document.querySelector('.pomodoro');
const shortBreak=document.querySelector('.short_break');
const longBreak=document.querySelector('.long_break')
let i;
let ind=false;
let duration;
let di;
let p;
let k;
let isItStopped=1;

function countDown(e){

    clearInterval(i);
    let display=displayC;
    let start=new Date();
    if(e.target.textContent=='Short break'){
        clearInterval(i);
        duration=60*10;
        p=1;
    }
    else if(e.target.textContent=='Long break'){
        clearInterval(i);
        duration=60*15;
        p=2;
    }
    else if(e.target.textContent=='Pomodoro'){
        clearInterval(i);
        duration=60*25;
        p=3;
    }
    function stopC(e){
        clearInterval(i);
        isItStopped=0;
        
        
    }
    if(isItStopped==0){
        duration=diff;
        isItStopped=1;
    }
 
    function startC(){
        diff = duration - (((Date.now() - start) / 1000) | 0);
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        if(diff==0){
            var audio = new Audio( 
                'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3'); 
                audio.play();  
                clearInterval(i);
        
        }
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
         
        title.innerHTML = minutes + ":" + seconds; 
        displayC.innerText = minutes + ":" + seconds; 

        if (diff <= 0) {
            start = Date.now() + 1000;
        }
}

function restartC(e){
    clearInterval(i);
    if(p==1){
        duration=60*10;
    }
    else if(p==2){
        duration=60*15;
    }
    else if(p==3){
        duration=60*25;
    }
}
stopp.addEventListener('click',stopC);
startC();
 i=setInterval(startC,1000);
 restart.addEventListener('click',restartC);
}


start.addEventListener('click',countDown);

shortBreak.addEventListener('click',countDown)
longBreak.addEventListener('click',countDown);
pomodoro.addEventListener('click',countDown);

