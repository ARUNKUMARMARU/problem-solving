//Write a function that checks if a given string is a palindrome.

function isPalindrome(str) {
    
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
   
    return cleanStr === cleanStr.split('').reverse().join('');
}
