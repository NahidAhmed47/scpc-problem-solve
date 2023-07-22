// Problem: 
// Write a code on how to calculate the number of vowels and consonants in a string?(Use Javascript only)

const calculateVowelsAndConsonants = (params) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    let consonantCount = 0;
    
    params.split('').forEach((letter) => {
        if (vowels.includes(letter.toLowerCase())) {
        vowelCount++;
        } else {
        consonantCount++;
        }
    });
    
    return `Vowels: ${vowelCount}, Consonants: ${consonantCount}`;
}

console.log(calculateVowelsAndConsonants('Education'));