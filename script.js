const phrases = [
  "Web Developer ",
  "AI Enthusiast ",
  "Problem Solver ",
  "Google Dev Aspirant "
];

let currentPhraseIndex = 0;
let currentCharacterIndex = 0;
let currentPhrase = phrases[currentPhraseIndex];
const typingSpeed = 100; // Time between each character
const eraseSpeed = 50;  // Speed to erase characters
const delayBetweenPhrases = 2000; // Time between finishing a phrase and starting the next one

const typingTextElement = document.getElementById("typing-text");

function typePhrase() {
  if (currentCharacterIndex < currentPhrase.length) {
    typingTextElement.innerHTML += currentPhrase.charAt(currentCharacterIndex);
    currentCharacterIndex++;
    setTimeout(typePhrase, typingSpeed); // Continue typing
  } else {
    setTimeout(erasePhrase, delayBetweenPhrases); // Start erasing after typing
  }
}

function erasePhrase() {
  if (currentCharacterIndex > 0) {
    typingTextElement.innerHTML = typingTextElement.innerHTML.slice(0, -1); // Erase last character
    currentCharacterIndex--;
    setTimeout(erasePhrase, eraseSpeed); // Continue erasing
  } else {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Loop to the next phrase
    currentPhrase = phrases[currentPhraseIndex];
    setTimeout(typePhrase, typingSpeed); // Start typing next phrase
  }
}

// Start typing effect when the page loads
window.onload = function() {
  typePhrase();
};
