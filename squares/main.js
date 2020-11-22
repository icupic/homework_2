
const divS=document.querySelector('.square-div');
const plus=document.querySelector('#plus');
let askString=prompt("Enter number of character: ","0");
let elementX=document.createElement('button');
let array=[];
let arrayClose=[];
let i=0;
let j=0;
let letters;
let addS;

function CreateSquares(){
let int=parseInt(askString,10);

for( i=0;i<int;i++){

    let squares=document.createElement('div');
    let elementX=document.createElement('button');
    let paragraph=document.createElement('p');
    elementX.innerHTML='X';
    elementX.setAttribute("id","close");
    paragraph.setAttribute("class","para");
    squares.appendChild(elementX);
    squares.appendChild(paragraph);
    squares.classList.add('square');
    array[i]=squares;  
    arrayClose[i]=elementX;
    divS.append(squares);

}}
 CreateSquares();

function addDivs(e){
    let squares=document.createElement('div');
    let elementX=document.createElement('button');
    let paragraph=document.createElement('p');
    elementX.innerHTML='X';
    elementX.setAttribute("id","close");
    paragraph.setAttribute("class","para");
    squares.appendChild(elementX);
    squares.appendChild(paragraph);
    squares.classList.add('square');
    array[i]=squares;  
    arrayClose[i]=elementX;
    divS.append(squares);
    i++;
    arrayClose.forEach(ar => {
        ar.addEventListener('click',removeSquare); 
     });
    array.forEach(ar => {
        ar.addEventListener('click',addText); 
     });
}

function removeSquare(e){
    let t=e.target.parentElement.remove();

}
function addText(e){
    letters= /^[A-Za-z ]+$/;
     let t=e.target;
     let p=t.querySelector('.para');
     if(t.classList.contains('square')){
        addS=prompt("Enter word","");
         if(addS.match(letters)){
          p.innerText=addS;
  
        if( addS != addS.split('').reverse().join('')){
          alert('It is not a palindrome');
           }

       }
    else{
        addS=prompt("Enter again(only letters a-z)","");
        if(addS.match(letters)){
          p.innerText=addS;
        if( addS != addS.split('').reverse().join('')){
          alert('It is not a palindrome');
        }}
    }
  }}
  arrayClose.forEach(ar => {
    ar.addEventListener('click',removeSquare); 
 });
plus.addEventListener('click',addDivs);
array.forEach(ar => {
    ar.addEventListener('click',addText); 
 });