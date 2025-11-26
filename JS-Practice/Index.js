//console.log ("Good Morning");

/*

//Exercise 1- Simple calculator

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

console.log (calculator (60,40,'*'));


/*

/*
//Execrcise-2 -Temperature Converter

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

/*

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
    let l = str.length-1;
    for (let i = l; i>=0;i--) { //string index starts from 0
        revstr += str[i];
    }
    return revstr; /after the loop stops final string would be returned.
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
    l= strnum.length;
   for (let i =0; i< l ;i++) {
    sum += Number(strnum[i]);
   }
 return sum;
}

console.log(DigitSum (123456));

*/


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

//Age Calculator -2 -approx age

function ageCalc(birthDate){

    const today= new Date();
    const birth =new Date(birthDate);

    if (isNaN (birth)) { //Checking if the date object is invlaid
        return 'Error: Input a valid date';
    }

let diffinms = today- birth; //diff in milliseconds
let age = diffinms/ (1000*60*60*24*365.25); //year
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

//JS calls date objects .toString() method to make it human-readable.


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
//console.log (string.reverse); //wouldnt work as string doesnt have reverse. only arrays have it
console.log (string.indexOf('h'));
console.log (string.lastIndexOf('y'));
console.log (string.slice(0,7)); // enof position is excluded.
console.log (string.trim());
console.log (string.includes('lo')); //returns boolean
console.log (string.search('lo')); // returns position
console.log (string.charAt('10'));

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
//largest of given numbers

function largestFinder (a,b,c,d,e,f){
    
    let largenum = Math.max (a,b,c,d,e,f);
return largenum;
}
console.log (largestFinder(10,50,300,0,78,56789));


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

//reversing & sorting

console.table (employee.reverse());
console.table (employee.sort());


//The difference between toSorted() and sort() is that the first method creates a new array, 
// keeping the original array unchanged, while the last method alters the original array.

const sorted =employee.toSorted();
console.log (sorted);
console.log (employee);

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

/*
//Multiplication Table


function multiplicationTable (n,upto) {

    if (typeof n !== 'number' || typeof upto !== 'number' || n===0 || upto === 0) {

        console.error('Give valid inputs to generate table');
    }
    let table =[];
    for (let i =1 ; i<= upto; i++){
    table.push ({multiplicand: n, multiplier: i, product: n * i});
    }
    return table;
}

console.log(multiplicationTable (10,10));

*/

/*
//Vowels counter

function vowelFinder(str){
    if (typeof str !== 'string'){
        console.error ('enter a valid string to process');
        return //if invlaid execution can stop here.
    }

    const vowels ='aeiou';
    let string = str.toLowerCase();
    let l = string.length;
    let count = 0;  //initializing the counter with 0.

    for (let i=0 ; i<l; i++){
    if (vowels.includes(string[i])){
   count++;
    }  
    }
    return `the count of vowels in given string are ${count}`;
}

console.log (vowelFinder('I would lIke to visIt parIs!'));
//console.log (vowelFinder(12345));
console.log (vowelFinder("I LOVE ROSES"));

/*
// factorial series

function factorial (n){
    if (typeof n !== 'number'){
        return 'invalid input';
    }
     let result = 1;
     let series =[];
    if (n===0 || n===1){ //base case
        return 1;
    }

    for (let i =2; i<=n; i++){
        result = result * i;
        series.push(result);
    }
return series;
 
}

console.log(factorial(10));

*/

/*
//number to words

function numToWords (n){
    if (typeof n !== 'number'|| n>9 ||n ===null){
       return  'enter valid number.'
    }
    const numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }
 return numbers[n];
    }
console.log(numToWords(8));

*/

/*

// Arrow function 

let numbers = [1, 2, 3, 4];

//foreach = for every item in Array.
//Return value: Always undefined (it does not return a new array).

numbers.forEach(num => {  //num call back fucntion recvs current element of the array
  console.log(num * 2); // prints 2, 4, 6, 8
});

console.log(numbers); 

*/

/*

//Grade distribution

function gradeDis (marks){

    //counter initialization - as Object.

    let reportCard = {A :0, B:0 ,C :0, D:0, F:0};

    
//for of loop. - iterates over every item in the array
// each value in the marks array= mark
for (let mark of marks) {

    if (mark>=90 && mark<=100){
        reportCard.A++;
    }
     else if (mark>=80 && mark<=89){
        reportCard.B++;
    }
     else if (mark>=70&& mark<=79){
         reportCard.C++;
     }
     else if (mark>=60 && mark<=69){
        reportCard.D++;
    }
    else if (mark>=0 && mark<=59){
         reportCard.F++;
    }
    else {
        console.log ('Invalid Score')
    }
}
return reportCard;
}

console.log(gradeDis([98,99,56,45,74,83,89,16,101,48]));

*/

/*
function validatePassword(password) {

  if (typeof password !== 'string') {
    return 'Error: Password must be a string';
  }

  if (password.length < 8) {
    return 'Error: Password must be at least 8 characters long';
  }

  // regex method use slashes and within square brackets the searcht terms.
  const hasNumber = /[0-9]/.test(password); //.test returns true or false.
  if (!hasNumber) {
    return 'Error: Password must contain at least one number';
  }

  const hasUppercase = /[A-Z]/.test(password);
  if (!hasUppercase) {
    return 'Error: Password must contain at least one uppercase letter';
  }

  return true;
}

console.log (validatePassword('AKJURNHMBJ23'));

*/

/*
//difference between dates

// A Date object in JavaScript is essentially a wrapper around a timestamp. for precision.
// JavaScript counts months from 0 to 11: January = 0.December = 11.
// JavaScript stores dates as number of milliseconds since January 01, 1970.

function dateDifference(date1,date2){
const d1 = new Date(date1);  // date strings are converted as date objects. strings are easy toread so this conversion works the best.
const d2 = new Date(date2);
if (isNaN(d1) || isNaN(d2)) {
    return 'Error: Invalid date format';
  }

const diff = Math.abs (d2-d1);  //in milliseconds
const diffdays= diff / (1000 * 60 * 60 * 24); //converting it to a day
return (`Difference between given dates - ${diffdays}`);
}

console.log (dateDifference ( '', '2025-11-28'));

*/
/*

// 24 to 12 hour time format

function timeConversion(time) {

    let [H,M] = time.split(':').map(Number); //split is string function and tine is about numbers.

    if (isNaN(H) || isNaN(M) || H < 0 || H > 23 || M < 0 || M > 59) {
        return 'enter valid time';
    }
    let x = H >= 12 ?'PM': 'AM';
H = H % 12 ; //reminder is hours
 if (H === 0) H = 12 //12 AM or 12 Pm case handling
return  (`${H}: ${M} ${x}`);
}

console.log (timeConversion('19:22'));

*/

/*
//Number methods

let X = 875.785;


X= X.toPrecision(1);
console.log(X);

X= X.toFixed(2);
console.log(X);

X= X.toString();
console.log(X);
*/
/*

// Time untill event

function timeUntillEvent(date) {
    const futureDate = new Date (date);
    const today = new Date();

      if (isNaN(futureDate)) {
    return "Error: Invalid date format";
      }
    const diffinms = futureDate - today;
    const diffdays = diffinms / (1000*60*60*24);
  return diffdays;
}
console.log (timeUntillEvent('2025-12-31'));
*/

/*

//Remove Extra Spaces (5 points)

function removeSpaces(str){

if (typeof str !== 'string'){
return 'error give valid string to process';
}                                     
//let cleanedstr = str.trim(); cleans only beginning and ending,

let cleanedstr1= str.replace(/\s+/g, ' '). trim(); //replacing the spaces with single space.
let cleanedstr2= str.replace(/\s+/g, '');  //to remove all the spaces
return {With_spaces :cleanedstr1, without_spaces: cleanedstr2} ;
}

console.log (removeSpaces('  hello  hiii where  are you  ?  '));
*/

/*

// Acronym generator

function acronymGenerator(string){
if (typeof string !== 'string') {
    return 'enter valid string to process';
}
//let ignoreWords = ["and", "of", "in", "the"];
let trimmedstr = string.trim().split(/\s+/);
let acronym = trimmedstr.map(str => str[0].toUpperCase()).join('');
return acronym;
}

console.log(acronymGenerator(' talk to you later'));

*/


/*
//Random number- need clarity
// built in method just gives value between o to 1. so made some calculations and then rounded it to near by integer.

function getRandomNumber(min,max) {
  return Math.floor(Math.random()* (max-min)); 
}

console.log(getRandomNumber(10,1000));
*/
/*

//user name validator

function userNameValidator(uname){

    if (typeof uname !=='string'){
        return 'enter valid string';
    }
if (uname.length <5 || uname.length>15) {
    return 'error: user name must be 5-15 characters long';
}
const regex = /^[a-zA-Z0-9_]+$/ ; //^-starting of string, $ ending
if (!regex.test(uname)){
    return 'error uname can contain only the allowed characters';    
}

const regex2 = /^[a-zA-Z]/;
if (!regex2.test(uname)){
    return 'error:uname must start with a letter';
}
if (uname.endsWith('_')) {
    return 'error:uname cannit ends with underscore    '
}

return true;
}

console.log(userNameValidator('Pranav_123'))
*/
/*
//month name converter

function monthName(monthNum){
   
    if (isNaN(monthNum) || monthNum>12 || monthNum <1){
        return 'error'
    }
//arrays in javascripts indexed 0.
    const months = ['Jan','feb','march','apr','may','jun',
        'july','aug','sep','oct','nov','dec'];
    return months[monthNum-1];
    }

console.log(monthName(12));

/*


