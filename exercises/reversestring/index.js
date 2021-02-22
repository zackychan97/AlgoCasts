// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // 1. Using split() method to return a new array of single string characters
    let splitString = str.split("");

    // 2. Use the reverse() method to reverse the new created array
    var reversedArray = splitString.reverse();

    // 3. Use the join() method to join all elements of the array into a string
    var joinReversedArray = reversedArray.join("");

    return joinReversedArray;

}

module.exports = reverse;
