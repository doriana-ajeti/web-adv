var ProgrammingLanguages = ["python", "javaScript", "ruby"]
console.log("original array:", ProgrammingLanguages)
console.log(ProgrammingLanguages[1]);
console.log(ProgrammingLanguages.length);
console.log(programmingLanguages[programmingLanguages.length -1]);

programmingLanguages.push("go")
console.log("after push", programmingLanguages);

programmingLanguages.pop("go")
console.log("after pop", programmingLanguages);

programmingLanguages.shift()
console.log("after shift", programmingLanguages);

programmingLanguages.unshift("Typescript")
console.log("after unshift", programmingLanguages);

//splices
programmingLanguages.splice(0, 2 ,"c++")
console.log("after splice", programmingLanguages);


//random number
console.log("Random number between 0 and 1:", Math.random() * 5)
console.log("Random integer between 0 and 4:", Math.floor(Math.random() * 5))

// Array Destructuring
var students = ["Alice", "Bob", "Charlie",];
var [student1, student2, student3] = students;
console.log("destructured students:", student1, student2, student3); 
console.log("first student:", student1);    
console.log("second student:", student2);
console.log("third student:", student3); 

var numbers = [1, 2, 3, 4, 5, 6.7, 8, 9, 10];
var [num1, num2 , num3, ...othernumbers] = numbers;
console.log("destructured numbers:", num1, num2, num3, othernumbers);
console.log("first number:", num1);
console.log("second number:", num2);
console.log("third number:", num3);
console.log("other numbers:", othernumbers);
console.log(othernumbers.toString()); 

