// Select the button and greeting div
const greetButton = document.getElementById('greetButton');
const greetingDiv = document.getElementById('greeting');

// Add a click event listener to the button
greetButton.addEventListener('click', () => {
  // Prompt the user for their name
  const userName = prompt('What is your name?');

  // If the user enters a name, display a personalized greeting
  if (userName) {
    greetingDiv.textContent = Hello, ${userName}! Welcome to my page!;

    // Apply styles to the greeting
    greetingDiv.style.color = '#0077cc';
    greetingDiv.style.fontSize = '2rem';
    greetingDiv.style.fontWeight = 'bold';

    // Add a fade-in effect
    greetingDiv.style.opacity = 1;
  } else {
    greetingDiv.textContent = 'Hello, Guest! Welcome to my page!';
    greetingDiv.style.opacity = 1;
  }
});