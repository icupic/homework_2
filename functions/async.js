/* CHALLENGE 1 */

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?


/* CHALLENGE 2 */

function delayedGreet() {
  setTimeout(() => console.log("welcome"), 3000);

}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */

function helloGoodbye() {
    console.log("hello");
  setTimeout(() => console.log("good bye"), 2000);
}
// Uncomment the following line to check your work!
 //helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */

function brokenRecord() {
   setInterval(()=>console.log('hi again'),1000);
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */

function limitedRepeat() {
  let j=0;
  function rep(){
  j++;
    console.log('hi for now');
    if(j==5){
      clearInterval(i);
    }
  }
 let i=setInterval(rep,1000);
}
// Uncomment the following line to check your work!
//limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
    let counter = 0;
  let executeCallback = setInterval(() => {
    if (counter < duration) {
      func();
    }
    counter++;
  }, interval * 1000);
}

// Uncomment the following lines to check your work!
//function theEnd() {
 // console.log('This is the end!');
 //}
// everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */

function delayCounter(target, wait) {
  let intervalId;
  let counter = 0;
  return function inner() {
    if (counter === 0) {
      counter++;
      intervalId = setInterval(() => console.log(inner()), wait);
    } else if (counter === target) {
      clearInterval(intervalId);
      return counter;
    } else {
      return counter++;
    }
  }

}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(3, 1000)
//countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

  function promised (val) {
  let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(val)
    }, 2000);
  })
  return promise;}

// UNCOMMENT THESE TO TEST YOUR WORK!
 const createPromise = promised('wait for it...');
 createPromise.then((val) => console.log(val)); 
// will log "wait for it..." to the console after 2 seconds