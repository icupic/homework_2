
const num=document.querySelectorAll(".numbers");
const operators=document.querySelectorAll(".operators");
let displayVarEl=document.querySelector("#result");
const clearBtn=document.querySelector('#clear');
const decimal=document.querySelector('#decimal');
const keyCalc=document.querySelector('body');
let displayVar='';
let pendingVal;
let evalStringArray=[];
let evalStringA=[];

let  number=(e)=>{
    let btnText=e.target.textContent;
    displayVar+=btnText;
    displayVarEl.innerText=displayVar;
}
let whatOperator=(e)=>{
    let op=e.target.textContent;
    switch(op){
        case '+':
            pendingVal=displayVar;
            displayVar='';
            displayVarEl.innerText=displayVar;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
         case '-':
            pendingVal=displayVar;
             displayVar='';
             displayVarEl.innerText=displayVar;
             evalStringArray.push(pendingVal);
             evalStringArray.push('-');
             break;
         case '*':
                pendingVal=displayVar;
                displayVar='';
                displayVarEl.innerText=displayVar;
                evalStringArray.push(pendingVal);
                evalStringArray.push('*');
                break;
         case '/':
              pendingVal=displayVar;
              displayVar='';
              displayVarEl.innerText=displayVar;
              evalStringArray.push(pendingVal);
              evalStringArray.push('/');
              break;
        case '=':
            evalStringArray.push(displayVar);
            let evaluate=eval(evalStringArray.join(' '));
            displayVar=evaluate+ '';
            displayVarEl.innerText=displayVar;
            evalStringArray=[];
            break;
    }
}
let keysPress=(e)=>{
    let btnText= e.key ;
 if(btnText=='0' || btnText=='1' || btnText=='2' || btnText=='3' || btnText=='4' || btnText=='5' || btnText=='6' ||btnText=='7' ||btnText=='8' ||btnText=='9' ||btnText=='+' ||btnText=='-' ||btnText=='*' ||btnText=='/' ||btnText=='=' ||btnText=='.'){
    displayVar+=btnText;
      if(btnText==='='){
        evalStringA.push(displayVar.slice(0, -1));
       let ev=eval(evalStringA.join(' '));
        displayVar=ev+ '';
        displayVarEl.innerText=displayVar;
        evalStringA=[];
    }
    else{
    displayVarEl.innerText=displayVar;}}
  //c is for delete
    else if( btnText=='c' || btnText=='C' ){
        displayVar='';
        pendingVal=undefined;
        evalStringArray=[];
        evalStringA=[];
        displayVarEl.innerText=displayVar; 
    }
    
} 

 


num.forEach(num=>{
    num.addEventListener("click", number);
});
operators.forEach(op=>{
    op.addEventListener("click", whatOperator);
});
keyCalc.addEventListener("keypress",keysPress)



clearBtn.onclick=()=>{
    displayVar='';
    pendingVal=undefined;
    evalStringArray=[];
    displayVarEl.innerText=displayVar;
}
decimal.onclick=()=>{
    if(!displayVar.includes('.')){
        displayVar+='.';
        displayVarEl.innerText=displayVar;
    }
}