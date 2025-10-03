
# 🧠 JavaScript 2-Hour Assessment

**Total Time:** 2 Hours  
**Total Marks:** 100  
**Format:** MCQs + Short Code + Practical Coding

---

## 🟡 Section A – MCQs & Conceptual Questions (30 Marks → 15 × 2 marks)  
**Time:** 25 minutes

1. Which of the following is **not** a valid JavaScript data type?  
   a) String b) Number c) Character d) Boolean

Answer 1 ->  c) Character 

2. What will the following code log?
```js
let x = 10;
x += "5";
console.log(typeof x);
```
a) number b) string c) undefined d) object

Answer 2 -> b) string 

3. What is the difference between `let` and `const`? (1 line)
Answer let value can be changed and const value cannot 

4. Which operator is used for **spread syntax** in JavaScript?  
a) `...` b) `??` c) `=>` d) `**`
Answer -> a) `...` 

5. What will this code output?
```js
console.log([1, 2, 3].map(n => n * 2));
```
a) `[2, 4, 6]` b) `2,4,6` c) `undefined` d) `null`
Anwer b) 2,4,6

6. Which of the following is true about arrow functions?  
a) They have their own `this`  
b) They cannot be anonymous  
c) They don’t have their own `this`  
d) They must always return explicitly

answer c) They don’t have their own `this`  

7. Identify the DOM method used to select elements by class name:  
a) `querySelector('#className')`  
b) `getElementById('className')`  
c) `querySelector('.className')`  
d) `getElementsByTagName('className')`

answer c) `querySelector('.className')`  

8. What is the output?
```js
console.log(typeof null);
```
a) "null" b) "object" c) "undefined" d) "string"

Answer -> a) "null"

9. Which string method removes whitespace from both ends?  
a) `slice()` b) `trim()` c) `split()` d) `substring()`
Answer -> b) `trim()` 

10. What does `event.preventDefault()` do?
Answer event.preventDefault remove the default behaviour of element like Form when we submit form page reloads but with prevent default we stop this behaviour

11. Which method can be used to **iterate over arrays** without creating a new array?  
a) map b) filter c) forEach d) reduce
Answer c) forEach
12. What will be the output?
```js
const arr = [1,2,3];
const newArr = [...arr, 4];
console.log(newArr);
```
a) `[1,2,3,4]` b) `[4,1,2,3]` c) `[1,[2,3],4]` d) error
answer a) `[1,2,3,4]`
13. What is the difference between **synchronous** and **asynchronous** code in JS? (1-2 lines)
Answer synchronous means code runs line by line like one block code execute then after completion other block executes and asynchronous means code executes acording to priority asynchronously like proises settimeout etc

14. Which of the following executes first in the event loop?  
a) setTimeout callback b) Promise `.then()` c) fetch response d) DOMContentLoaded

Answer d) DOMContentLoaded

15. What is the **purpose of destructuring** in JavaScript? (1 line)

Answer -> its a easy way to unpack data from an array or object into a variable we use it when we have to exract value from object like json etc

---

## 🟢 Section B – Short Code Questions (30 Marks → 6 × 5 marks)  
**Time:** 35 minutes

1. **Conditional:**  
Write a function `checkNumber(num)` that logs:
- "Positive" if num > 0  
- "Negative" if num < 0  
- "Zero" otherwise.

```js
    function checkNumber(num){
       if(num >0){
        return "Positive"
       }else if(num < 0){
        return "Negative"
       }else {
       return 0
       }
    } 
let num = 10
console.log(checkNumber(num));
```



2. **Loop & Arrow Function:**  
Write a function that takes an array of numbers and returns a **new array with each number doubled** using a `forEach` loop and arrow function.

```js
function doubledArr(arr){
    let doubledArray = []
arr.forEach(element => {
      doubledArray.push(element * 2)
});
return doubledArray
}

arr = [1,2,3,4]
console.log(doubledArr(arr));
```

3. **Object Destructuring & Template Literals:**  
```js
const user = { name: "John", age: 25 };
// Use destructuring and template literals to log:
// "John is 25 years old."

const user = { name: "John", age: 25 };
const {name ,age} = user
console.log(`${name} is ${age} years old `);
```



4. **DOM Manipulation:**  
Write code to select a button with ID `#btn` and a paragraph with class `.msg`. When the button is clicked, change the paragraph text to **“Button Clicked!”**

```js
  const btn = document.getElementById("btn")


btn.addEventListener("click",()=>{
    let para = document.querySelector(".msg")
    para.innerText = "Button Clicked!"
  console.log("cl");
  

})
```

5. **Array Methods:**  
Given:
```js
const numbers = [1, 2, 3, 4, 5];
```
- Use `filter` to get even numbers.  
- Use `reduce` to get the sum of numbers.  
- Log both results.

```js

const numbers = [1, 2, 3, 4, 5];
console.log(numbers
    .filter(n=>n % 2 ==0)
    .reduce((a, b) => a + b))
 ```

6. **Async/Await:**  
Write a function that fetches data from `https://jsonplaceholder.typicode.com/todos/1` using **async/await** and logs the JSON response.
```js
async function getData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    console.log(data);
    
}

getData()
```
---

## 🔵 Section C – Practical Coding Questions (40 Marks → 2 × 20 marks)  
**Time:** 60 minutes

### 1. DOM + Callbacks + Array Methods (20 Marks)

Implement a small webpage that:
- Has an input field and a button “Add Task”.  
- When the user enters a string and clicks the button → the string should be added to a list below.  
- Use `querySelector`, `addEventListener`, and `createElement`.  
- Use `map` or `forEach` to render the list after each addition.

**Marking Scheme:**
- DOM selection & event listener → 5  
- Correct rendering logic → 5  
- Array method usage → 5  
- Clean code & readability → 5

### 2. Async + Event Loop + Fetch (20 Marks)

Write a script that:
- Logs “Start”  
- Uses `setTimeout` with 0 ms to log “Timeout”  
- Uses a Promise that resolves immediately to log “Promise resolved”  
- Fetches `https://jsonplaceholder.typicode.com/todos/1` and logs `"Data fetched"`.  
- Logs “End” at the end.
```js
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


console.log("end");

```

**Marking Scheme:**
- Correct order of console logs → 10  
- Correct usage of Promise + setTimeout + async → 5  
- Fetch usage and error handling → 5

---

## 🧾 Mark Distribution

| Section | Type                  | Marks | Time  |
|---------|-----------------------|-------|-------|
| A       | MCQ / Conceptual      | 30    | 25 min |
| B       | Short Code           | 30    | 35 min |
| C       | Practical Coding     | 40    | 60 min |
|         | **Total**             | 100   | 120 min |