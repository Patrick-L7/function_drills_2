'use strict';

// Jedi name
function jediName(firstName, lastName) {
    return firstName.substring(0, 3) + lastName.substring(0, 2);
}

// To infinity
function beyond(num) {
    if (num === Infinity) {
        console.log('And beyond');
    }
    if (num > 0) {
        console.log('To infinity');
    }
    if (num < 0) {
        console.log('To negative infinity');
    }
    if (num === 0) {
        console.log('Staying home');
    }
}

// Cracking the code
function decode(word) {
    if (word.charAt(0) === 'a') {
        return 2;
    }
    if (word.charAt(0) === 'b') {
        return 3;
    }
    if (word.charAt(0) === 'c') {
        return 4;
    }
    if (word.charAt(0) === 'd') {
        return 5;
    }
    else {
        return ' ';
    }
}

let one = decode('craft');
let two = decode('block');
let three = decode('argon');
let four = decode('meter');
let five = decode('bells');
let six = decode('brown');
let seven = decode('croon');
let eight = decode('droop');

console.log(one + two + three + four + five + six + seven + eight);

//How many days in a month
function daysInMonth(month, leapYear) {
    if (month === 'January') {
        return 31;
    }
    if (month === 'March') {
        return 31;
    }
    if (month === 'April') {
        return 30;
    }
    if (month === 'May') {
        return 31;
    }
    if (month === 'June') {
        return 30;
    }
    if (month === 'July') {
        return 31;
    }
    if (month === 'August') {
        return 31;
    }
    if (month === 'September') {
        return 30;
    }
    if (month === 'October') {
        return 31;
    }
    if (month === 'November') {
        return 30;
    }
    if (month === 'December') {
        return 31;
    }
    if (leapYear === true && month === 'February') {
        return 29;
    }
    if (leapYear === false && month === 'February') {
        return 28;
    }
    else {
        throw new Error('Must provide a valid month');
    }
}

// Rock paper scissors
function generateNo() {
    return Math.floor(Math.random() * 3) + 1;
  }

function rockPaperScissors(num) {
    const randomNo = generateNo();
    if (num === 1 && randomNo === 3) {
        return 'You win';
    }
    if (num === 3 && randomNo === 2) {
        return 'You win';
    }
    if (num === 2 && randomNo === 1) {
        return 'You win';
    }
    if (num === 3 && randomNo === 1) {
        return 'You lose';
    }
    if (num === 2 && randomNo === 3) {
        return 'You lose';
    }
    if (num === 1 && randomNo === 2) {
        return 'You lose';
    }
    else {
        throw new error('Number has to be between 1, 2, or 3')
    }
} 