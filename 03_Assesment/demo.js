console.log("Start")

setTimeout(()=>{
console.log("Timeout");

})

Promise.resolve(console.log("Promise resolved"))

try{
data = fetch("https://jsonplaceholder.typicode.com/todos/1 ")
console.log("data fetched");

}catch(e){
console.log("Data not fetched " , e);

}




