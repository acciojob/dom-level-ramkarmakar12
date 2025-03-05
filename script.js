//your JS code here. If required.
// Select the element with id="level"
const element = document.getElementById("level");

let level = 0;
let currentElement = element;

// Traverse up the DOM tree until reaching the <html> element
while (currentElement) {
    level++;
    if (currentElement === document.documentElement) break; // Stop at <html>
    currentElement = currentElement.parentElement;
}

// Display the result
alert(`The level of the element is: ${level}`);
