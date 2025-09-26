//TODO BLOCK SCOPE (var , let , const)
////CODE
{ 
    var x = 1;    //*   function scope
    let y = 2;    //*   block scope
    const z = 3;  //*   block scope

}
console.log(x);//! - 1  
console.log(y);//! - Reference error
console.log(z);//! - Reference error

//? Rewrite the code so all variables are accessible outside the block without error
// {
//   var x = 1;    
//   var y = 2; 
//   var z = 3; }
// now y,z both will be accessed from outside because we declared there variable using var 


//TODO  Temporal Dead Zone (TDZ)


console.log(a); //! undefined
console.log(b); //! error can not access before initilization
console.log(c); //! error can not access before initilization

var a = 1;
let b = 2;
const c = 3;


//* What will be logged? undefined , Error * 2 
//* Explain why b and c behave differently than a.
 /*//? Because var is hosted to the top of the scope during the execution phase and let and const are stored in the temperoal dead zone during the execution phase  ?*/


 //TODO Closures
 function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const c1 = counter();
console.log(c1()); //! 1 method call counter stored in new memory loaction because stored in a variable so it will behave different
console.log(c1()); //! 2 
const c2 = counter();
console.log(c2()); //! 1  c2 is different variable
//* why does c1 keep its own state separately from c2?

//TODO Pass by Value vs Pass by Reference
let num = 10;
let obj = {value: 10};

function changePrimitive(x) {
  x = 20;
}

function changeObject(y) {
  y.value = 20;
}

changePrimitive(num);
changeObject(obj);

console.log(num); //! not change  10 pass by value
console.log(obj); //! change   20     pass by reference

//TODO Type Coercion

console.log(1 + "2");   //!  "12"  uses type coersion
console.log("2" * 3);    //!  6    uses type coersion
console.log(0 == false);  //! true  uses type coersion
console.log(0 === false);  //! false not uses type coersion
console.log([] == false);  //! true uses type coersion
//console.log([] === false);//!  false not uses type coersion

//// implicit and explicit type coersion
//// one operator that  not trigger implicit type coercion is === operator 

//ToDO Hositing 
sayHello();
console.log(x);

function sayHello() {
  console.log("Hello!");
}

var x = 5;
let y = 10;

////what happens with sayHello()
//?print hello 
////What gets logged for x?
//?undifined  because of var
////What if you also add console.log(y) before declaration?
//? error  because of let TDZ

//TODO  Objects & References
const obj1 = { name: "Alice" };
const obj2 = obj1;
obj2.name = "Bob";

console.log(obj1.name); //! bob its copy refresnce
console.log(obj2.name); //! bob

console.log(obj1 === obj2);  //!TRUE both aare same because both have same reference

//// Why does changing obj2 also change obj1?
//? because it obj2 is carrying the refrence of ob1 s

//TODO  Array Mutation vs Non-Mutation
const arr = [1, 2, 3, 4, 5];
const a = arr.sort();
const a2 = arr.slice(0, 3);
console.log(a === arr); //!true
console.log(a2 === arr); //!false

//*  mutate means changes the original array 
//* non mutate means dosn't changes the original array returns new array 

////Which array methods mutate and which don’t?
//? sort method is mutate and slice is not 

////Why does a === arr return true, but b === arr doesn’t?
//? sort method does change the original array so the variavle 'a' is carrying sorted sorted array same as arr thats why 
//? a === arr is returning true 
//? b=== arr is not returning true because slice method return new array and it does not change original array thats why b === arr 
