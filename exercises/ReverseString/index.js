/**
 * Reverse String
 * 
 * For given string return a new string
 * with the reversed order of characters.
 * 
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

const reverse = (str) => {
  return str.split('').reverse().join('');
};

module.exports = reverse;
