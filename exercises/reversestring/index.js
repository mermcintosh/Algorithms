// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('')

}

module.exports = reverse;


//another way to solve the problem.. similar as above, but juse more concise
// function reverse(str) {
//     return str
//     .split('')
//     .reverse()
//     .join('');
// }

// another way to solve the problem using a for loop
// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed
//     }

//     return reversed
// }

//one more way to solve the problem
// function reverse(str) {
//    return str.split('').reduce((reversed, character) => {
//         return character + reversed
//     }, '');
// }
