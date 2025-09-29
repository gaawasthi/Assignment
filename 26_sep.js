// 1 shallow vs deep copy
let obj = {x:1,y:{z:2}};
let copy1 = {...obj};
copy2 = structuredClone(obj)

copy1.y.z = 50
copy2.y.z = 100

console.log(obj.y.z) // 50 because spread object copies the reference and strucuredclone creates a new
//copy

// array destructuring 
const nums = [5]
const [a= 1 , b = 2 , c = 3] = nums
console.log(a,b,c); // out will [5,2,3]
//because it there is already a value it will not take default value

// object desructuring 

const student = {id:1 , name:'Ravi'}
const {id,name,grade="A"} =student
console.log(id,name,grade) // it will add grade

// string reverse 

const str = "JavaScript"
reversedStr = str.split('').reverse().join('')
console.log(reversedStr);
// if we have to use reverse method so we have to convert str in array because reverse() is an array method

//String Method 
console.log(" hello word ".trim().toUpperCase().slice(0))  // output will be 'HELLO WORD'first trim() method remove all unwanted space and then uppercase make string uppercase 

// ProtoType Inheritance
function Animal(type){
    this.type =type; 
}
Animal.prototype.speak = function(){
    console.log(this.type + " makes a sound");

    
}
Animal.prototype.eats= function(){
        console.log(this.type + " is eating");

}
//What will be logged?
const dog = new Animal("dog")
dog.speak() //'dog makes a soung'

dog.eats()

// this keyword 

const person = {
    name:"Amit",
    greet: function(){
        console.log("hello " + this.name);
    }
}
// const greetFn = person.greet;
// greetFn(); 
// Why does this print undefined
// we are copuing just the function not the person
//fixed
const greetFn = person.greet.bind(person)
greetFn()


//class vs constructor 
function Book(title, author) {
  this.title = title;
  this.author = author;
  this.detail = function() {
    console.log(this.title + " is written by " + this.author);
  };
}

const maths = new Book("maths", "alex john");
const bio = new Book("bio", "dr_dd");

maths.detail(); // maths is written by alex john
bio.detail();   // bio is written by dr_dd

class book {
    title = this.title;
    author  = this.author;
    details = function(){
        console.log(this.title +  " is written by " + this.author )
    } 
}
const aa = new Book("a" , "b")
const bb = new Book("aa" , "bb")

aa.detail()
bb.detail()

//Array Functions 

// Write code using:
// map() → multiply every element in [1,2,3,4] by 3.

// filter() → keep only even numbers.

// reduce() → find sum of all elements.

arr = [1,2,3,4]
console.log(arr.map(i=> i*3)
.filter(i => i  % 2 ==0)
.reduce((acc , curr)=>{
 return acc + curr
},0))


// ways to create Objects 

// object literals 
const laptop1 = {
    brand:"hp"
}
console.log(laptop1.brand);


// new Object()
const laptop2 = new Object()
laptop2.brand = "msi"
console.log(laptop2.brand)
// constructor function 

function Laptop(brand){
         this.brand = brand
}
const dell = new Laptop("dell")
console.log(dell)
// class 

class laptop3{
   brand = this.brand
}
const mac  = new laptop3("mac")
console.log(mac)
// object.create

const laptopObj ={}

laptopObj.brand ="acer"
console.log(laptopObj)