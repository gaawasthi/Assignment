//*Easy level 
// TODO  Operators Practice
////  Predict the output of given console.log statements:
console.log(3 + 3 * 6 / 6);  //!  6 first multiply then divide and then add
console.log(10 % 4 * 2 + 5);  //! 9  because of operater presedence
console.log(1 + "1" - 1);     //! 10 type coersion
console.log(true + false);     //! 1  0 + 1 = 1
console.log("5" * 2 + 1);     //! 11 10 + 1 = 11 
// TODO  Truthy/Falsy Filters
const arr = [0, "", null, undefined, NaN, 1, "hello", true, false];
//// Filter only truthy values from an array.
newarr = arr.filter(i=>i)
console.log(newarr);

////Filter only falsy values from an array.
newarr1 = arr.filter(i=>!i)
console.log(newarr1);

// TODO  Optional Chaining
const user = { profile: { name: "Pablo" } };
////Access a property safely when the path exists.
console.log(user.profile.name);

////Try accessing a deeply nested property that doesn’t exist (without throwing error).
// console.log(user?.profile?.name)


// TODO  Object Freeze/Seal

const car1 = { brand: "Tesla", model: "X" };
Object.seal(car1);

car1.brand = "suzuki";    // allowed can modify existing props
console.log(car1);        // { brand: "suzuki", model: "X" }

const car2 = { brand: "Tesla", model: "X" };
Object.freeze(car2);

car2.brand = "suzuki";    //not allowed frozen object is immutable
console.log(car2);        // { brand: "Tesla", model: "X" }


//* Medium Level 
//TODO 
//?Array Function

////Given an array of numbers, use map, filter, and reduce in a chain to:
/////Multiply each number by 2.
/////Keep only numbers >= 6.
////Return the sum of the resulting numbers. 
const nums = [1, 2, 3, 4, 5];   // assuming nums like this
const result = nums
  .map(i => i * 2)          // [2, 4, 6, 8, 10]
  .filter(i => i >= 6)      // [6, 8, 10]
  .reduce((sum, i) => sum + i, 0); // 24

console.log(result); // 24


//TODO Custom Reduce → Object

////Convert an array of students (e.g., ["Alice", "Bob", "Charlie"]) into an object where indices are keys.
students = ["alice" , "Bob" , "charlie"]
console.log(students.reduce((obj,value ,index)=>{
    obj[index] = value
    return obj
   
},obj={})
)

//TODO Find uniques values 
const arr2 = [1, 2, 2, 3, 4, 4, 5];


////Given an array with duplicates, return an array of unique values.
////Solve once with filter.


const uniqueArr1 = arr2.filter((item, index) =>
  arr2.indexOf(item) === index
);

console.log(uniqueArr1); // [1, 2, 3, 4, 5]

////Solve again with reduce.
const uniueArr2 = arr2.reduce((a, value)=>{
      if (!a.includes(value)){
        a.push(value)

      }
     return a 
},  [])
console.log(uniueArr2);



// TODO Dynamic Object Keys
function addKeyValue(obj, key, value) {
  obj[key] = value;
  return obj;
}


const person = { name: "Pablo" };
console.log(addKeyValue(person, "age", 25));
// { name: "Pablo", age: 25 }

const sealedPerson = { name: "Pablo" };
Object.seal(sealedPerson);

sealedPerson.age = 25;         // cannot add new key
sealedPerson.name = "raj";    // can modify existing key
console.log(sealedPerson);     
// { name: "raj" }

// Frozen object
const frozenPerson = { name: "Pablo" };
Object.freeze(frozenPerson);

frozenPerson.age = 25;         //  cannot add
frozenPerson.name = "raj";    //  cannot modify
delete frozenPerson.name;      //  cannot delete
console.log(frozenPerson);     
// { name: "Pablo" }


