// Problem: 
// Write a code to calculate if the string is palindrome ? (Use javascript only)

const checkPalindrome = (params) => {
    params = params.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reverseStr = params.split('').reverse().join('');
    if(params === reverseStr) {
        return true;
    }
    return false;
}

console.log(checkPalindrome('mam'));