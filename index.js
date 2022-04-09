// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function dupicate(string) {
  try {
    let tempArr = string.split('');
    console.log(tempArr);
  } catch (err) {
    console.log(err.message);
  }
}
dupicate('Hello World! How are you');

function validatePalin(str) {
  // get the total length of the words
  const len = string.length;

  // Use for loop to divide the words into 2 half
  for (let i = 0; i < len / 2; i++) {
    // validate the first and last characters are same
    if (string[i] !== string[len - 1 - i]) {
      alert('It is not a palindrome');
    }
  }
  alert('It is a palindrome');
}

// accept the string or number from the prompt
const string = prompt('Enter a string or number: ');

const value = validatePalin(string);

console.log(value);
