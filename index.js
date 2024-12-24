// Definition of the function EmployeeInfo
function EmployeeInfo(name, Salary) {
    console.log("Welcome " + name + ", Your monthly salary is " + Salary);
}

console.log("This is my first program");

// Variables for employee details
var EmpName = "John";
var EmpSalary = 50000;

// Calling the EmployeeInfo function
EmployeeInfo(EmpName, EmpSalary);

// Arrow function definition
const EmpSkills = (skills) => {
    console.log("Expert in " + skills);
}

// Calling the EmpSkills function
EmpSkills("Java");

const student = require('./studentinfo');
const Person = require('./person');

// Using functions from StudentInfo.js
console.log("Student Name: " + student.getName());
console.log("Campus Location: " + student.Location());
console.log("Date of Birth: " + student.dob);
console.log("Grade: " + student.StudentGrade(55));

// Creating a new Person object from Person.js
const person1 = new Person("Jim", 25, "jim@example.com");
console.log("Using Person Module: " + person1.getPersonInfo());
console.log("Programe Ended")