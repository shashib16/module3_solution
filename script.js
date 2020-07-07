// var message="in global";
// console.log("global:message = " + message);

//  var a=function() {
//      var message="inside a";
//       console.log("a: message = " + message);
//  }
//  function b()
//   {
//        console.log("b:message =" + message);
//   }
//  a();
// //  b();

// var x = 10;
// if ( (null) || (console.log("Hello")) || x > 5 ) {
//   console.log("Hello");
// }

// function makeMultiplier(multiplier) {

//     var myFunc=function (x)
//      {
//         console.log(x);
//         return multiplier * x;
//      };


//        return myFunc;
// }
 
// var multiplyBy3=makeMultiplier(3); 
// // multiplyBy3 is reference 
//   console.log(multiplyBy3(10));

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function () {
//   console.log(this.name + " likes barking! Bark!");
// }

// var max = new Dog("Max", "Buddy");
// max.bark();



//  ARRAY IN JAVASCRIPT

// var names2=["shashi","Bhushan", "Tiwari", 123]
// //  console.log(names2);
// // names2[100]=122;
// // for(var i=0;i<names2.length;i++){
//  names2.greeting="Hi!"
// for(name in names2){   
// console.log(names2[name]);
// }
  

// var myObj={
//    name:"shashi",
//    course:"HTML/CSS/JS",
//     plateform:"coursera",
// }
// for(var prop in myObj){
//   console.log(prop+" : "+myObj[prop]);
// }

// var counter=0;
// var myArray=["Yaakov",2,{handle:"yaadkovchaikin"}];
// for(var i=0;i<myArray.length;i++)
//   counter++;
//   console.log(myArray[counter])[handle]);



// var arr= new Array(10);
// console.log(typeof(Array),Array,arr,arr.length);
// arr[0]="Shashi";
// console.log(typeof(Array),Array,arr,arr.length,typeof(arr));
// arr[1]=2;
// arr[2]= function (name) {
//   console.log("hello " + name);
// };
// arr[3]={course:"HTML, CSS & JS"};
// arr.greeting="Tiwari"
// arr.name="CallSibu"
// arr.push("callBHUSHAN")
// console.log(arr);
// console.log(arr.length)
// arr[3]("SHASHI");
// console.log(arr[6]);
// for(prop in arr){
//    console.log(prop +" "+ arr[prop]);
// }

// var names=[
//     {firstName:"shashi"},
//      {secondName:"bhushan"},
// {thirdName:"tiwari"}
//   ,121,
// ]
// names.fourthadd="Machakana"
// names.push("ti")
// for(prop in names){console.log(names[prop]);
// }
// console.log(names.length,typeof(names))



  // CLOUSER IN FUNCTION
// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() { // displayName() is the inner function, a closure
//     alert(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

function makeMultiplier (multiplier){
   return(
       function (x){
          return multiplier*x;

       }
   );
}
var doubleAll=makeMultiplier(2);
console.log(doubleAll(10));