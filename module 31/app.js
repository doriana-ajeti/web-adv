for ( i = 0; i < 5; i++){
   console.log ("the number is" + i );
}
 
var person ={
    firstname: "john",
    lastname: "doe",
    age: 26
};

var text = '';
var x;
for(x in person){
    console.log( text += person[x])
};

var names = ['steve', 'bill'];
var x;

for(x of names){
  //  console.log(x);
    document.write(x + "<br>")
};

var txt = "JavaScript"
var x;
for( x of txt){
    dpcument.write(x + "<br>")
};

let j = 0;
do{
    j =+ 1;
    console.log(j);
} while (j < 5);

let n = 0;
let y = 0;
while(n < 3){
    n++;
    console.log(y += n)
};

//1. Try to recreate a for loop to be reeated based on the length of an array
const myArray = ["apple", "banana", "kiwi"];
for (let i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}
