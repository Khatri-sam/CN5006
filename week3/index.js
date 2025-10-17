function EmployeeInfo(name,Salary) {
    console.log("Welcome "+name+" Your monthly salary is:"+Salary)
}
console.log("This is my first Program")
var EmployeeName= "Samir"
var EmployeeSalary="40000"
EmployeeInfo(EmployeeName,EmployeeSalary)

    //Excercise 2
    EmployeeSkills= (skills)=>{
        console.log("Expert in "+ skills)
    }
    EmployeeSkills("java")
// Link
const student= require('./StudentInfo')
const person = require('./Person')
// because the name is  the function so we use()
console.log("Student name:" +student.getName())
console.log(student.dob)
console.log (student.Studentgrade())
console.log("grade is "+student.Studentgrade(55))
// creating new Person
Person1= new person("Ram","UK","myemail@gmail.com")
console.log("Using Person Module",Person1.getPersonInfo())
console.log("__Programe ended__")



