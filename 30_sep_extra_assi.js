// Here is some basic questions so please share this with all teammates and solve it with one line reason.

// Question:
// Given the following object, how would you create a deep copy of it so that modifying the nested object in the copy does not affect the original?
   
// we will create deep copy using structured clone method  
   const original = { name: "Alice", address: { city: "Paris", zip: 75000 } };
   const copyObj = structuredClone(original)
   copyObj.address.city = "indore"
   console.log( "origunal" ,  original);
   console.log( "copied" ,  copyObj);
   
  
// Question:
// Write a function that reverses a string without using the built-in reverse() method.
 function  reverseString(str) {
    let reversed = ""
    for ( let i = str.length - 1  ; i >= 0 ; i--){
        reversed += str[i]
      
    }
      return reversed
 }
console.log(reverseString("JavaScript")); // should print "tpircSavaJ"


// Question:
// Given an array of numbers, write a function that returns a new array with only even numbers multiplied by 2 using array methods.
const numbers = [1, 2, 3, 4, 5, 6];
function task(numbers){
    let arr;
   arr =numbers.filter(i=>i % 2 ==0).map(i=>i*2)
  return arr
}
console.log(task(numbers))
// expected output: [4, 8, 12]


// Question:
// How can you create an object with keys dynamically based on an array of strings?
const keys = ["name", "age", "city"];
const values = ["Alice", 25, "Paris"];
obj = {}
function createObj(keys,values,obj){
    for(let i = 0 ; i <= keys.length -1 ; i++ ){
           obj[keys[i]] = values[i]
    }
    return obj 
}
console.log(createObj(keys,values,obj));
console.log(obj);



//create an object: { name: "Alice", age: 25, city: "Paris" }


// Question:
// What will be the output of the following and why?
console.log(5 + "5"); // 55 because + operator concats (it convert number in string)
console.log("5" - 2); //output will we  3 -  operator conversts str into number
console.log(true + 1); // true is 1 so 1 + 1 = 2
 console.log(null == 0); // false null is null 
 console.log(null === 0);// false because null is null


// Question:
// Write a closure that keeps track of a counter. Each time the function is called, it should increment and return the counter.
function createCounter(){
   let count = 0 
   return function(){
    count++
    return count
   }

}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


// Question:
// What will be logged to the console and why?
const obj1 = { a: 1 }; // 
 const obj2 = obj1;
 obj2.a = 2; 
console.log(obj1.a); // 2 because ob2 is shallow copy thats why ob2 is having obj1 refresnce 

// Question:
// Given an array of objects, find all objects where the age is greater than 18.
const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 25 }
];
 function greater18(users){
    for(objj of users){
        if(objj.age > 18 ){
            console.log(objj);
            
        }
        
    }
 }
greater18(users)
//expected output: [{name: "Bob", age: 20}, {name: "David", age: 25}]

// Question:
// Write a function to capitalize the first letter of each word in a string.
function capitalizeWords(str) { 
      return str.split(' ').map(word=>word.charAt(0).toUpperCase() +word.slice(1)).join(' ')

  
}
 console.log(capitalizeWords("hello world from js")); // "Hello World From Js"


// Question:
// What’s the difference between these two approaches? Which one is shallow and which is deep?


 const arr = [[1], [2], [3]];
 const copy1 = arr.slice();
 const copy2 = JSON.parse(JSON.stringify(arr));
  copy1[0][0] = 0
 copy2[0][0] = 0
 console.log(arr);

 console.log(copy1);
 console.log(copy2);
 
 

 // copy 1 slice creating shallow copy means it is copy only first level nested level are have refreence of original array  

 // copy2 is deep copy because copy is creating new arr (new copy created without refresnce)