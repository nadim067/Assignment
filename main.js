// 1. Difference Calculate
function calculateDifference(num1, num2) {
    return num1 - num2;
}

console.log(calculateDifference(10, 3));  // Output: 7

// 2. Boolean types Function
function isOdd(number) {
    return number % 2 !== 0;
}

console.log(isOdd(5));  // Output: true
console.log(isOdd(4));  // Output: false


// 3. Min Number finding
function findMin(numbers) {
    return Math.min(...numbers);
}
console.log(findMin([5, 1, 9, 3, 7]));  // Output: 1


// 4. Even Numbers filtering
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));  // Output: [2, 4, 6]


// 5. Descending sort
function sortArrayDescending(numbers) {
    return numbers.sort((a, b) => b - a);
}
console.log(sortArrayDescending([5, 1, 9, 3, 7]));  // Output: [9, 7, 5, 3, 1]

// 6. LowerCase First
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter("Hello"));  // Output: "hello"

// 7. Count Vowels
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Programming"));  // Output: 3

// 8.Average Finding
function findAverage(numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

console.log(findAverage([10, 20, 30, 40]));  // Output: 25








