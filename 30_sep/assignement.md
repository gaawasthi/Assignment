Javscript aysnc and evenp loop -- assignment 
Part 1 event Loop and Execution order 

1 predict output of the following code before running it 
console.log('1')

setTimeout(()=>console.log('timeout 1') , 0);
 Promise.resolve().then(()=>console.log('promise 1'));
console.log('2')
setTimeout(()=>
    console.log('timeout 2') , 0 
)
Promise.resolve().then(()=>{
    console.log('promise 2')
})
console.log('3');


output 
1 ,2,3
promise 1 
promise 2 
timeout 1 
timeout 2 

2 analyze this code and explain the exact order of execution 

async function test() {
    console.log("A");
    await Promise.resolve();
    console.log('B');
}
test()
console.log("C");

outout 
A ,C ,B
What happens inside the microtask queue when await is used

when we use await we stop and have to wait for the promise before execution 
timer and blocking 
run this code and measure the delay 

console.time('timer');
setTimeout(() => {
  console.timeEnd('timer');
}, 2000);

for (let i = 0; i < 1e9; i++) {} // heavy loop


why does the setTimeOut callback run later than 2s

Ans for loop blocks the main thread and javascript is single threaded and setTimeout graunteed that it will execute after given time but dosnt graunteed that how much it will take to execute after the given time

part 3 callbacks vs Promises vs async / await 

write the same logiv in 3 different ways 
usning setTimeout(callBack)
setTimeout(()=>console.log("Done setTimeout "),2000)

using Promise.then 
Promise.resolve().then(

    
    setTimeout(()=>console.log("Done promise "),2000)

)

using async / await

async function fn() {
  setTimeout(() => {
    console.log("Done async wait");
  }, 2000);
}

fn();

logic wait for two seconds and then print "Done!"


part 5 debugging 
console.log(1);
setTimeout(()=>console.log(4),0)
Promise.resolve().then(()=>{
    console.log(3);
    
})
console.log(2);

expexted output 1 , 2, 3, 4

deliverables 
Write predictions before running each snipper

