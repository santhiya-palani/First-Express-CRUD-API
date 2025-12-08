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

/*

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

  // regex method use slashes and within square brackets the search terms.
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

const diff = Math.abs (d2-d1);  //in milliseconds //aboslute positive value
const diffdays= diff / (1000 * 60 * 60 * 24); //converting it to a day
return (`Difference between given dates - ${diffdays}`);
}

console.log (dateDifference ( '', '2025-11-28'));

*/
/*

// 24 to 12 hour time format

function timeConversion(time) {

    let [H,M] = time.split(':').map(Number); //split is string function and time is about numbers.

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

*/
/*

//high order functions

// map- to transform an array

const array =[2,4,6,9,11];

function add2 (x){
    return x+2;
}
const array2 = array.map(add2) // add2 is the function added as parameter here.callback func
// we shall directly add the function inside map parameter.
console.log(array2);
console.log(array);


// filtering array - filter an array based on condition

function filArray(y){
    return y > 6;
}
const array3 =array.filter(filArray)

console.log(array3);

//reduce- tricky name- iterate the whole array with some function and come up with a single unit (reducing the array to one value)
//reduce function takes 2 arguements (accumulator & current)

const output =array.reduce(function (acc,curr){

    //acc - result of each iteration 
    //curr - current value in the iteration.
    acc= acc+curr;
    return acc;
},0); //passing initial value as 0.

console.log (output);

*/

/*
//Problem 14: Array Statistics -count, sum, average,min,max,range

function getStastics(num){
      if (!Array.isArray(num) || num.length === 0) {
    return 'Error: invlid input';
      }

let sum = 0;
let max = num [0];
let min = num [0];

//for of loop iterate for each item in array.

for (let x of num){
     sum += x;
    if (x < min) min = x;
    if (x > max) max = x;
}
  const count = num.length;
  const average = sum / count;
  const range = max - min;

  return { count, sum, average, min, max, range };
}

console.log (getStastics([17,25,380,400,250]));

*/

/*

//Problem 13: Find Second Largest -pending

// Birthday Countdown

function birthdayCountdown(bdayDt){

const bday = new Date(bdayDt);
const today = new Date();

if (isNaN (bday.getTime())){ // check if the date is valid 
    return 'enter valid date.'
}

 // If birthday already passed this year, set to next year
  if (bday < today) {
    bday.setFullYear(today.getFullYear() + 1);
  }
const diffInMs = bday - today // difference in milliseconds

// smallest integer greater than or equal to x.
//4.4 days left is actually 5 days in real life days calculation.

const diffDays = Math.ceil (diffInMs /(1000*60*60*24)) //partial day as full one
return `${diffDays} days are left for your bday!`;
}

console.log(birthdayCountdown ('2026-09-09'));

*/
/*
//Array Methods.

toString()
join()
concat()
splice()
slice()
indexOf()
lastIndexOf()
forEach()
map()
filter()
reduce()
some()
every()
flat()
find()
findIndex()
sort()

//converting it to a string.

let Names =['Santhiya','Bala','Pranav','Iniyan'];

let stringnames = Names.toString();

console.log(stringnames);

// Join method- We can specify separators

let joinednames= Names.join('-');
console.log(joinednames);

// Concatenate

let names2 =['Palani', 'Indira', 'Anushya', 'Natraj'];
let concatNames = Names.concat(names2);
console.log(concatNames);

//splice -remove &/ update-start index,no of elements, / new elements if applicable
//changes the original array-caution needed when using.

let splicedNames = concatNames.splice(6,3,'Anushya','Natraj','Sai',);
console.log(splicedNames);
console.log(concatNames);

//copying an array-spread operator...

let copyNames= [...Names];
console.log(copyNames);

//Push to add item at the end of the array.
names2.push('Mohan');
//console.log (names2);

//slice -index, end index is exclusive.here 2 is excluded and index 1 is sliced.
//Does not change the actual array.
let slicedNames= Names.slice (1,2);
console.log(slicedNames);

//Index of -first occurance

let index = names2.indexOf('Natraj');
//console.log (names2);
//console.log (index);

names2.push('laddoo');
names2.push('Brownie');
names2.push ('Anushya');


// last index- final occurance of the element.

let names2 =['Palani', 'Indira', 'Anushya', 'Natraj'];
names2.push ('Anushya');
let lastindex = names2.lastIndexOf('Anushya');
let index1 = names2.indexOf('Anushya');
console.log(lastindex);
console.log(index1);
console.log (names2);



// flat- to flatten the nested array

let nestedNames =['Palani', 'Indira', ['Anushya', 'Natraj'],['Brownie','laddoo']];
console.log(nestedNames);

let flatNames= nestedNames.flat();
console.log(flatNames);

*/


//high order functions
//foreach- to loop over an 


//Multiplication Table

/*
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
//multiplication Table

function multitable(x,upto){

    if (typeof x !== 'number'|| typeof upto !=='number') {
        return 'Error: enter valid numbers'
    }
    
    let table =[];
    for (let i=1 ;i<=upto ; i++){
    table.push(x*i);
    }
    
    return table;

}

console.log (multitable(5,10));

*/

/*
// variables

let name = 'Santhiya';
let age = 25;
let city ='Chennai'

console.log(`Hi this is ${name} my age is ${age} and i live in ${city}!`);
*/

//swap variables with out using 3rd one.
/*
let a =10;
let b =15;

console.log (`before swap values of ${a} & ${b}`);

    a = a+b; // 25
    b = a-b // 10
    a = a-b //15
 
    console.log (`after swap values of ${a} & ${b}`);

//destructuring

let a = 10, b = 15;
[a, b] = [b, a];
console.log(a, b); // 15, 10

*/
/*
//Even or odd

function evenOdd(num) {
    if (num === undefined || typeof num !== 'number'){
       return 'Error:enter valid input to process' }

if (num%2 === 0){
    return 'Given number is even';
}

return 'Given number is odd';
}

// return num % 2 === 0 ? 'Given number is even' : 'Given number is odd';

console.log(evenOdd(15));

*/
/*
//Find the largest of three numbers.

function largestNum(a,b,c){

    let largenum = Math.max(a,b,c);
    return largenum;
}

console.log(largestNum(45,67,98));

// extend to any numbers using spread operator ...

function largestNum(...numbers) {
  return Math.max(...numbers);
}

console.log(largestNum(45, 67, 98, 120, 5000));
 */
/*
// leap year

function leapYear(year){
    if (typeof year !== 'number'){
        return 'enter valid year to process';
    }
// && || precedence logic
    if ((year%4 === 0 && year%100 !== 0) || year%400 === 0){
        return 'its leap year'
    }
    return 'its not leap year'
}

console.log(leapYear(2007));

*/
/*
// vowel or consonant

function alphabetFinder(char){

    if (typeof char !== 'string' || char.length !== 1){
        return 'error enter valid character to process';
    }

    const vowels ='aeiou';
    const lowerchar = char.toLowerCase();

    if (vowels.includes(lowerchar)){
        return 'it is a vowel'
    }

    return 'it is a consonant';
}

console.log(alphabetFinder('u'));
*/
/*
//Write a program that grades students based on marks.

function studentGrades(score){

if (typeof score !== 'number'|| score >100 || score <0){

    return 'error enter valid score'
}

if (score>=90){
    return 'Grade A';
}

else if (score>=80){
    return 'Grade B';
}

else if (score>=70){
    return 'Grade C';
}

else if (score>= 60){
    return 'Grade D' ;

}

// else is not required
    return 'Grade F';
}


console.log(studentGrades(63));

*/

/*

//Determine if a number is positive, negative, or zero.

function signFinder(num){

    if (typeof num !== 'number')
        {return 'error enter a valid number to proceed'}

let x = Math.sign(num);

if (x === -1){console.log ('Given number is negative')};
if (x === 1) {console.log ('Given number is positive')};
if (x === 0) {console.log ('Given number is zero')};
}

console.log(signFinder(-1000));

*/
/*
// Core Workout (Arrays & CRUD)

let employees = ["Alice", "Bob", "Charlie"];

employees.push ("Rob");
employees.unshift ("Melissa");
employees.splice(1,1);
employees[2]= "Diana";

console.log(employees);
*/

/*
// array with positive negative and zeros

let numbers = [10, -5, 0, 7, -3];

let posNum_count = 0;
let negNum_count = 0;
let Zeros = 0;

for (let num of numbers) {
  let x = Math.sign(num);

  if (x === -1) {
    negNum_count++;
    console.log(`${num} is negative`);
  } else if (x === 1) {
    console.log(`${num} is positive`);
    posNum_count++;
  } else if (x === 0) {
    console.log(`${num} is zero`);
    Zeros++;
  }
}
*/
/*
//Print numbers from 1 to 10 using a loop.

for (let i=1 ; i<=10 ; i++){
    console.log(i);
}
*/
/*
//Print the multiplication table of a given number.

function multitable (number, upto){
let table = [];
let result = 1

for (let i=1;i<=upto; i++) {
    result = i* number
    table.push((result));
}
return table;
}

console.log (multitable(5,10));
*/
/*

//Find the sum of numbers from 1 to n.

function findSum(n){

    let sum = 0;
    for (let i=1; i<=n; i++){
  sum = sum+i;
    }
    return sum;
}

    if (typeof n !== 'number' || n <0){return 'error: enter valid input'}
*/
/*
//Reverse a given string using a loop.

function reverseStr(str){

    if (typeof str !== 'string')
        {
            return 'error enter a valid string'
        }

let revStr =''
let len = str.length-1;
let cleanedstr = str.toLowerCase().trim();

for (let i= len ; i>=0; i--){
    revStr += cleanedstr[i];
}
return revStr;
}

console.log(reverseStr("LondoN"));
*/
/*
//Count the number of vowels in a string.

function vowelCounter(str){
     if (typeof str !== 'string')
        {
            return 'error enter a valid string'
        }

        let vowels ='aeiou'
        let cleanedstr= str.toLowerCase().trim();
        let count = 0
        let len = cleanedstr.length-1

        for (i=0 ;i<=len; i++){
            if (vowels.includes(cleanedstr[i])){
                count++
            }
        }
        return `${count} vowels are present in the given string ${str}`;
}

console.log(vowelCounter('emily in paris'));
*/
/*
//Find the largest number in an array.


function findLargest(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 'error: provide a non-empty array';
    }

    let largest = arr[0]; // start with the first element

    for (let num of arr) {
        if (num > largest) {
            largest = num; // update if we find a bigger number
        }
    }

    return largest;
}
   
console.log(findLargest([10,678,5890]));

*/
/*

//Reverse an array without using .reverse().

function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return 'error: enter a valid array';
  }

  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5])); 

*/
/*
//Write a function to calculate factorial of a number.

function factorial (n) {
    
    if (typeof n !== 'number' || n <0){
        
    return 'error: enter valid input'
}

let result =1;
for (i=1 ; i<=n; i++){
 result *= i;
}
return `factorial of ${n} is ${result}`;
}

console.log(factorial(10));
*/

//Write a function to generate a random number between two values.

/*
let x= Math.floor(Math.random() * 1000);
console.log (x);
*/
/*
function getRandomNumber(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    return 'error: enter valid numbers';
  }
  if (min > max) {
    return 'error: min should be less than max';
  }
//math.random rturns random value between 0 to 1. 
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomNumber(10, 1000)); // random number between 10 and 1000
*/
/*
//remove duplicates from an array

function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    return 'error: enter a valid array';
  }
  return [...new Set(arr)]; // set - stores only unique values , ... converts it back into an array.
}


console.log(removeDuplicates([1,1,2,2,3,3,4,8,7,4,5]));
*/
/*
// spread- unpacking an array or string. - we shall also use this to create shallow copy of an array

// largest in the array

let num =[0,69,578,3400,3400,768,-879]
let numcopy=[...num]; //copy the array

let max= Math.max(...num);// ... operator unpacks the array into elements
let min = Math.min(...num)
console.log(max);
console.log(min);
console.log(num);
console.log(numcopy);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"]; //concatenating an array

console.log(foods);

//spread = expands an array into separate elements
// rest = bundles separate elements into an array
*/
/*
//sorting an array in ascending order
// Sorts elements as strings in lexicographic order, not alphabetical
// lexicographic = (alphabet + numbers + symbols) as strings

let num =[0,69,578,3400,3400,768,-879]

//num.sort(); lexoicographic order-works for strings not for numbers
// for numbers with sort compare arrow function must be combined.
num.sort ((a,b) => a-b); //ascending
num.sort((a, b) => b -a); //descending


console.log(num);

*/
/*
//lexoicographic order-works for strings not for numbers
let veg =['brinjal','carrot','raddish','drumstick','pumpin','beetroot']
veg.sort();
veg.reverse()

console.log(veg);

*/

/*
//Array Statistics

function getStatistics(num){

    const max = Math.max(...num);
    const min = Math.min (...num);

    console.log (max)
    console.log (min)

    return {max,min}
}

console.log(getStatistics([10,20,30]));

*/
/*
//count the no of alphabets in string.


function countAlphabets(str){
    let count = {} //going to store the counts as key value pair
    let cleanedstr = str.trim().toLowerCase()
    for (let char of cleanedstr){
if (count[char]){
    count[char]++
}
else{
    count[char]=1;
    }
    }
return count
}

console.log(countAlphabets("santhiya"))
*/
/*
//remove duplicates/repeating letters
let str ="good morning"
const letters =new Set(str);
console.log (letters);
*/
/*
//string manipulation.

let name = "santhiya palani "

let firstname = name.slice(0,8);
let firname= name.slice(0, name.indexOf(" "));
let firchar =name.indexOf("a");
let lastchar =name.lastIndexOf("a");
let charat= name.charAt(5); 
let uppercase=name.toUpperCase();
let lcase=name.toLowerCase();
let trimstr=name.trim();
let repeatstr= name.repeat(3);


console.log(firstname);
console.log(firname);
console.log(firchar);
console.log(lastchar);
console.log(charat);
console.log(uppercase);
console.log(lcase);
console.log(trimstr);
console.log(repeatstr)
*/
/*
//fizzbuzz

function fizzBuzz(n){

for (let i= 1 ; i<=n; i++){
if (i %3 === 0 && i%5 === 0){
    console.log("fizz buzz!");
}
else if (i%3 === 0){
    console.log ("Fizz");
}
else if(i%5 === 0){
    console.log("buzz");
}
else{
    console.log(i);
}
}
}

console.log(fizzBuzz(100));

*/
/*
// string reversal

function stringReversal(str){

    let cleanedStr= str.trim().toLowerCase();
    return cleanedStr.split("").reverse().join("");
}

console.log(stringReversal(" Hello world "));
*/
/*
// without inbuilt method

function reverseStr(string){

    let revString = ""
    let len =string.length-1;

    for (i=len; i>=0; i--){
        revString +=string[i];
    }

    return revString;
}

console.log(reverseStr("i love javascript"));
*/

/*
//capitalize letter


function capitalizeLetters(str){
   let strArr = str.toLowerCase().split(" ") //spiliting each word as array element with space.
   for (let i = 0; i<strArr.length; i++){

    // substring-first parameter starting index, second parameter length of the extracted part
    //If you omit the second parameter, substring() will slice out the rest of the string.
   //concatenating with remaining part of array.

strArr[i]= strArr[i].substring(0,1).toUpperCase()+strArr[i].substring(1)}
return strArr.join(" ");
}

console.log(capitalizeLetters("i love to drive CAR!!"))

*/
/*
// count the max characters in the string

function countChar(str){

   let countArr = {}; //initalizing an empty object. key value pair

   let maxNum = 0;
   let maxChar= 0;

   str.split("").forEach(function(char){ // splitting the string into array and using foreach
    if(countArr[char]){
        countArr[char]++;
    }
    else{
        countArr[char]= 1; // initalizing for new characters in the string
    }
   })
  for(let char in countArr){ //for in loop to iterate over object
  if (countArr[char] > maxNum){
    maxNum = countArr[char];
    maxChar= char;
  }
  }
  return {maxChar,maxNum};
}

console.log(countChar("i love javascripttttt"))

*/


/*
//printing alteranate alphabets
// ASCII codes for A-Z 65-90 -character encoding system.


for( let i = 65; i<=90; i+=2){
    console.log(String.fromCharCode(i)); 

}

for (let i = 97; i <= 122; i += 2) {  
  console.log(String.fromCharCode(i));
}
*/
/*
//printing even numbers

for(let i =2; i<=100; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

//printing Odd numbers

for(let i =1; i<=100; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}

*/

// reverse a string

// function reverseStr(str){
//     //return str.trim().toLowerCase().split("").reverse().join("");
//  let result = ""
//     for (let i = str.length-1; i>=0; i--){
//         result += str[i]
//     }
//     return result;
// }

// console.log(reverseStr(" My kids mean the world to me!"))
// ;


// //longest word in the sentence

// function longestWordFinder(sent){
//     let wordArray = sent.split(" ");
//     //let result = {} //creating an object( key value pair to store the lengths)
//     let longestWord=""
//     for(word of wordArray){
//    if (word.length > longestWord.length){
//     longestWord= word;
//    }
//     }
//     return longestWord;
// }


// console.log(longestWordFinder("Lets go and watch sunrise!"));

// //palindrome checker

// function palindromeChecker(str){

//     let cleanedStr = str.trim().toLowerCase(); //cleaning the string separately so matching it against would yield the corret results.
//     let reversedStr=cleanedStr.split("").reverse().join("");
//     return cleanedStr===reversedStr;
// }

// console.log(palindromeChecker(" RaCeCaR "));
// console.log(palindromeChecker(" MalayAlam"));
// console.log(palindromeChecker("hello"));


// //removing duplicate elments from an array
// function removeDuplicates(arr){
// //return cleanedArr = [...new Set(arr)]; // set stores only unique elements.

// let cleanedArr=[];
// for(i=0; i<arr.length;i++){
//     if( cleanedArr.indexOf(arr[i])=== -1) //if the element is not avilable index would be -1.
//         cleanedArr.push(arr[i]);
// }
// return cleanedArr;
// }


// console.log(removeDuplicates([1,2,3,1,2,3,4,4,5,1,0,40]));

//anagrams

// function anagramsFinder(str1,str2){
//     cleanedStr1=str1.toLowerCase().split("").sort().join(""); // sort ->for strings alphabetical order for numbers dictionary order.
//     cleanedStr2=str2.toLowerCase().split("").sort().join("");
    
//     return cleanedStr1 === cleanedStr2;
// }

// console.log(anagramsFinder("LiSten","SilEnt"));
// console.log(anagramsFinder("mad","dam"));
// console.log(anagramsFinder("earth","heart"));

// //count vowels and consonants

// function vowelsCounter(str){

//     let vowelCount = 0;
//     let vowels =["a","e","i","o","u"]
//     let cleanedStr = str.toLowerCase();

//     for(let i=0; i<str.length;i++){
// if (vowels.includes(cleanedStr[i])){
//         vowelCount++
//     }
// }
// return vowelCount
// }
// console.log(vowelsCounter("helloworld"))

// convert 24 hour format to 12 hour

// function convertTime(inputTime){

//     let [hours,mins] =inputTime.split(":").map(Number) // destructuring, splitting and converting it to a num.

//     let period = hours >=12 ? "PM" : "AM" //ternary operator
//     hours = hours%12; 
//     if (hours===0) {hours=12} // edgecase handling.
//     return `${hours}:${mins.toString().padStart(2, "0")} ${period}`;//converting as string to use the string operation padding.
// }
// console.log(convertTime("12:00"));

//num range

// function numRangeSum(num1,num2){

//     if (num1>num2){
//         return 'error: enter valid number range'
//     }
    
// let result = 0
//     for (let i =num1; i<=num2; i++){
//       result+=i;
//     }
//     return result;
// }

// console.log(numRangeSum(5,10));

// digit calculator

// function digitCalc(num){

// let numString =num.toString(); //converting it to string to use the digit advantage
// let len = numString.length;
// let result =0;

// for (i=0; i<len; i++){
// result += Number(numString[i]); //converting back as number to use matheatical operation addition.
// }
// return result;
// }

// console.log(digitCalc(123456789));

// //perfect squarechecker

// function squareChecker(num){

//     let result = Math.sqrt(num);
//     return Number.isInteger(result);
//     }

//     console.log(squareChecker(20));
//     console.log(squareChecker(16));
//     console.log(squareChecker(100));

//user name validator

// function userNameValidator(uname){

//     if (typeof uname !=='string'){
//         return 'enter valid string';
//     }
// if (uname.length <5 || uname.length>15) {
//     return 'error: user name must be 5-15 characters long';
// }
// const regex = /^[a-zA-Z0-9_]+$/ ; //+anyof it $-end of the string
// if (!regex.test(uname)){
//     return 'error uname can contain only the allowed characters';    
// }

// const regex2 = /^[a-zA-Z]/; // ^start of the string
// if (!regex2.test(uname)){
//     return 'error:uname must start with a letter';
// }
// if (uname.endsWith('_')) {
//     return 'error:uname cannot end with underscore    '
// }

// return true;
// }

// console.log(userNameValidator("santhiya123"))

