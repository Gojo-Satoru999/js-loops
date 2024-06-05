function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

console.log(isLeapYear(2000)); // 2000 is a leap year.
console.log(isLeapYear(1900)); // 1900 is not a leap year.
console.log(isLeapYear(2024)); // 2024 is a leap year.
console.log(isLeapYear(2023)); // 2023 is not a leap year.

function getTicketPrice(age) {
    let price;
    if (age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else if (age >= 18) {
        price = 20;
    } else {
        price = "Invalid age";
    }
    return `The ticket price is $${price}.`;
}

console.log(getTicketPrice(10)); // The ticket price is $10.
console.log(getTicketPrice(15)); // The ticket price is $15.
console.log(getTicketPrice(30)); // The ticket price is $20.
console.log(getTicketPrice(-5)); // The ticket price is $Invalid age.

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55

function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return checkPalindrome(str, 0, str.length - 1);
}

function checkPalindrome(str, start, end) {
    if (start >= end) {
        return true;
    }
    if (str[start] !== str[end]) {
        return false;
    }
    return checkPalindrome(str, start + 1, end - 1);
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false

