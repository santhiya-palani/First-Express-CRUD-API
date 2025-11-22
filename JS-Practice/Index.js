//console.log ("Good Morning");

//Exercise 1- Simple calculator
/*
function calculator (a,b,operation){
   
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return 'Error: Inputs must be integers';
    }

  switch (operation){
    case '+':
        return a+b;
        break;
    case '-':
      return a-b; 
      break;
    case '*':
      return a*b;
      break;
    case '/':
        if (b===0){
            return 'error:Cannot be divided by zero';
        }
        return a/b;
        break;
        default:
            return 'Error:Invalid Operation';
  }  
}

console.log (calculator ('a','40','*'));

/*

//Execrcise-2 -Temperature Converter
/*
function celsiustofaran (Celsius) {
if (typeof(Celsius) !== 'number') {
return 'error:enter a numeric value for conversion';
}
    return (Celsius * 9/5) +32 ;
}
console.log(celsiustofaran('gthf'));


function farantocelsius(faran){
    return (faran-32) * 5/9 ;
}

console.log(farantocelsius(78));

*/

//Exercise -3 - Odd or even checker
/*
function iseven (num1) {
if (num1 === null){
    return 'number cannot be null';
}
if (typeof num1 !=='number'){
    return 'enter valid number' ;
   }
return num1 % 2 === 0;
}
console.log (iseven (8));

*/

//4. reversing a number
/*
function reversenum (num1) {
    if (typeof num1 !== 'number'){
        return 'error: Input a valid number';
    }
    const result = num1.toString().split('').reverse().join(''); //in JS numbers dont have digits concepts.
    return Number(result);
}

console.log (reversenum(123456789));

*/

// 5. palindrome checker.

/*
function ispalindrome (number){
    if (typeof number !== 'number'){
        return 'Error: Enter the valid number';
    }
    const Reversednum = number.toString().split('').reverse().join('');
    if (number == Reversednum){
        return 'Given number is palindrome';
    }
    return 'given number is not a palindrome';
}

console.log (ispalindrome(141021));
*/



/*
//6. Vowel counter

function CountVowel(str){
    if (typeof str !== 'string') {
        return 'enter a valid string';
    }
    const vowels ='aeiouAEIOU'; //vowels not gonna change
    let count = 0;  //count would change for each iteration.initializing the counter
    let l = str.length; //best practice. so the function needn't be called for each iteration.

for (let i=0; i<l; i++)

    {
    if (vowels.includes(str[i])){ //includes not include.
count++
    }
}
return count;
}

console.log (CountVowel('my india'));
*/

/*
//7.Factorial Calculator.

function FactorialCalc (num) {

if (typeof num !== 'number' || num < 0) {
return 'Error:Enter a valid number';
}
let result = 1 ;
for (let i=2; i<=num;i++){
result *=i; //keep multiplying the current result by the next number
}
return result;
}
console.log(FactorialCalc(4));

*/

/*
// 8. Prime number checker.

function PrimeCheck (num) {
    if (num <2 ||!Number.isInteger(num)){
        return 'Error:Give a valid input';
    }
for (let i=2 ; i<=Math.sqrt(num); i++) {
    if (num % i ===0){
        return 'Not a prime number';
    }
    }
return 'It is a prime number'; // Loop needs to get executed until num'th time return must be placed outside the loop.
}
console.log (PrimeCheck(8));

*/

/*
// 9. nth number in Fibo

function FiboSeq (n){
    // typeof- omits types other than numbers, isinteger- consider only Whole number
    if (typeof n !== 'number' ||n<1 ||!Number.isInteger(n)){  
        return 'Error:Give a valid input';
    } 

 if (n===1 || n===2) { //base case for 1 and 2 fibo is 1.
    return 1;
 }
let a = 1, b = 1;
    for (let i=3; i<= n ; i++){
       let next= a+b;
       a=b;
       b=next;
    }
    return b;
}

console.log(FiboSeq(9));
*/

/*
// 15.Leap year Checker

function LeapCheck(year) {
if (typeof year !== 'number'|| year <){
    return 'Error: Invalid year';
}
return (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
}
console.log (LeapCheck(2020));

*/

/*
//17. Grade Calculator

function GetGrade(score){
    if (score<0 || typeof score !== 'number'|| score >100) {
        return 'Error: Enter valid score';
    }
    if (score>=90) {
        return 'Grade A';
    }
    else if (score >=80) { //earlier conditions already filter higher scores.
        return 'Grade B';
    }
     else if (score >=70) {
        return 'Grade C';
    }
     else if (score >=60) {
        return 'Grade D';
    }
     else {
        return 'Grade F';
     }   
}
 console.log(GetGrade (95))  ;

 */
    //Assignment 19: Simple Interest Calculator.
/*
    function IntCalc(principal,rate,time){
        //sanitizing the input
        const p = Number (principal);
        const r = Number (rate);
        const t = Number (time);
     if(isNaN(p) ||isNaN(r) || isNaN(t)){
        return 'Error: All inputs must be numbers';
     }
        let int = (p*r*t)/100 ;
        return int;
    }

    console.log(IntCalc(10000,8.5,5));
/*

// Problem 1- Number range Sum

function sumrange (num1,num2){
    if ( num1 > num2 || typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Invalid Inputs';
    }
    let sum =0;
    for (let i = num1 ; i<= num2; i++){
        sum = sum+i; // sum += i
    }
    return sum;
}

console.log(sumrange(10,15));

*/

/*
//String reversor without built in method.

function StrReverse (str) {
    if (typeof str !== 'string'){
        return 'Error: Enter a string value';
    }

    let revstr = '';
    for (let i = str.length-1; i>=0;i--) { //string index starts from 0
        revstr += str[i];
    }
    return revstr;
}

console.log(StrReverse (12345));

*/

/*
// Digital Sum calculator

function DigitSum (num){

    if(typeof num !== 'number'){
        return 'Error: Enter a valid number';
    }
    let sum = 0;
    const strnum = num.toString();
   for (let i =0; i< strnum.length ;i++) {
    sum += Number(strnum[i]);
   }
 return sum;
}

console.log(DigitSum (123456));

/*

// Squareroot Checker

function Sqrt (num){
 if (typeof num !=='number'){
    return 'Error:Enter a valid number';
 }
let result = Math.sqrt (num);
return Number.isInteger(result);
}

console.log(Sqrt(64));

*/

/*
//Age Calculator

function ageCalc(birthDate){

    const today= new Date();
    const birth =new Date(birthDate);

    if (isNaN (birth)) { //Checking if the date object is invlaid
        return 'Error: Input a valid date';
    }
let age = today.getFullYear() - birth.getFullYear(); //as we may adjust the age as per this year bday occurence.
const months =today.getMonth() - birth.getMonth();
const days = today.getDate()- birth.getDate();

if( months<0 || (months===0 && days<0)){
    age--;
}
return age;
}

console.log (ageCalc('1990-09-09')); //datestring

*/

/*
//day of week

function dayFinder(datestring){ //date constructor can accept string as input. Easier one.

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; //Array of weekdays.
    const date = new Date(datestring);  //creating a date object with datestring parameter.
if (isNaN(date) || date !== null ){
    return 'error:Enter a valid number';
}
    const dayIndex =date.getDay();
    return days[dayIndex]; //result of getDay fuction is sent as index to the day array.
}

console.log(dayFinder(''));

*/

/*

//Weekend Checker -getday return values 0 & 6 are weekends.

function weekendFinder (datestring)
{

const date = new Date (datestring);

if (isNaN(date)){
    return 'error:Enter a valid number';
}
    const dayindex = date.getDay();

    if (dayindex === 0 || dayindex === 6){
        return 'it is a weekend.Lets party!!';
    }

    return 'Its workday!'
}

console.log(weekendFinder('2023-12-13'));

*/

/*
// String palindrome checker

function palindrome (string) {
    if (typeof (string) !== 'string'){
        return 'error:enter a string to convert';
    }
const cleanString = string.toLowerCase(); //string needs to be cleaned due to case sensitivity.
const reversedString = cleanString.split('').reverse().join('');
return cleanString === reversedString;
}

console.log(palindrome('Malayalam'));

*/

/*

//Overtime Calculator

function PayCalc (Hours,HourlyPay){
 
if (typeof Hours !== 'number' || typeof HourlyPay !== 'number') {
    return 'Error: Valid inputs are required';
}

if (Hours <= 40){
    const RegularPay = Hours * HourlyPay;
return {
regularhours : Hours,
regularpay: RegularPay,
Overtimehours :0,
Overtimepay : 0,
total :RegularPay
}  
}

else {
let BasePay = HourlyPay * 40;
let OvertimeHours = Hours-40;
let OvertimePay = OvertimeHours *HourlyPay *1.5;
return {
regularhours : 40,
regularpay: BasePay,
Overtimehours :OvertimeHours,
Overtimepay : OvertimePay,
total : BasePay + OvertimePay
}
}
}
console.log(PayCalc(45,20));

*/

/*
//Shopping cart calculator

function finalPrice (amount){
    if (typeof amount !== 'number' || amount ===null){

    return 'Enter valid Bill value';
    }

    let discount = 0;
    let disPrice = amount;

if (amount >100){
   discount= amount*0.1; //10% disclount
   disPrice = amount- discount;
}

// Ternary Operator to avoid another if block

const shippingFee = disPrice >50 ? 0 :5
const tax = disPrice * 0.08 // 8% discount
let total = disPrice + shippingFee + tax;

return {
original : amount,
discount : discount,
Subtotal : disPrice,
shippingfee :shippingFee,
tax: tax,
total:total
}
}

console.log (finalPrice(100));

*/

/*

//string operations

let string = '  Hello how are you  '

console.log(string.length);
console.log(string.toLowerCase());
console.log (string.toUpperCase());
console.log (string.split(' '));
console.log (string.indexOf('h'));
console.log (string.slice(0,7));
console.log (string.trim());

*/
/*
//swapping 2 numbers without 3rd variable.

    let a = 20;
    let b = 10;

console.log ( 'Before Swap',a,b);

a= a+b;
b= a-b;
a= a-b;
console.log ('after swap',a,b);

*/
/*

//largest of 3 numbers

function largestFinder (a,b,c){
    
    let largenum = Math.max (a,b,c);
return largenum;
}
console.log (largestFinder(10,50,3000));

*/

//Without builtin Method

/*
function largest (a,b,c) {
    let largest =a;

   if (b>largest) {
    largest = b;
   }

   if (c>largest){
   largest = c;
   }
   return largest;
}

console.log(largest(34,43,87));
*/

/*
// employee table creating using array and methods.

//creating base employee table.

let employee = [

    {Empid :1, name: 'Bala', designation:'manager',salary:100000},
    {Empid :2, name: 'Sandy', designation:'teamlead',salary:50000},
    {Empid :3, name: 'Pranav', designation:'QA',salary:80000},
    {Empid :4, name: 'Iniyan', designation:'Developer',salary:65000}
]

//console.table (employee);

// Adding Employee names.

function addEmployee (empId,name,designation,salary){
    employee.push({empId,name,designation,salary});
}
addEmployee(5,'SaiDurga','tester',78000);
//console.table (employee);

//adding employee at the beginning of table.
function addEmployeeFirst (empId,name,designation,salary){
    employee.unshift({empId,name,designation,salary});
}
addEmployeeFirst(6,'Anushya','DERM',88000);
//console.table (employee);

//Removes First element from array.

employee.shift()
console.table (employee);

*/

/*
//accepting user input

let username;
username = window.prompt ('Enter your user name');

console.log(username);

*/

/*

//Template Literals. backticks, $ ,{}
//embedding variables/expressions directly inside a string)
let name = 'Santhiya';
let designation = 'Developer';

console.log (`Hi! my name is ${name} and i work as ${designation}.`)

*/

 /* type conversion = change the datatype of a value to another
(strings, numbers, booleans) */

// when we accept user input it is string- it needs to be converted before we do any math.


/*
let age = window.prompt("How old are you?");
age = Number(age); // converting the input to number otherwise addition wouldnt be possible.
age+=1;

console.log(age);

*/

/*

//Program to check if one of two number is 100 or sum of two number is 100.


function findCalc(n1,n2){

    if (typeof n1 !== 'number' || typeof n2 !== 'number'){
        return 'Error: Enter valid numbers to validate';
    }

if (n1===100 || n2===100 || n1+n2 === 100) {
return 'Condition is met';
}
return 'Condition is not met';
}

console.log(findCalc(50,50));

*/

/*
//to get the extension of file.

function extensionOfFile(str) {

    if(typeof str !== 'string'){
        return 'enter a string to extract the extension';
    }
  let extension = str.slice (str.lastIndexOf('.'));
  return extension;

}

console.log(extensionOfFile('index.txt.js'));

*/

