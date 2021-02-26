const typingDelay = 100;
const newPhraseDelay = 1000;
let phrasesArrayIndex = 0;
let deleteDelay = 50;
let charIndex = 0;
const cursor = document.querySelector(".cursor");
const textSpan = document.getElementById("typing");
const phrasesArray = [
  " Make Websites",
  " Make Mobile Applications",
  " Make Bread",
  " Am a Front-End Developer",
  " Write",
  " Am a Student",
  " Love To Code </>",
];


export function typeWriter() {
  if (charIndex < phrasesArray[phrasesArrayIndex].length) {
    textSpan.textContent += phrasesArray[phrasesArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingDelay);
    cursor.classList.add("is-typing");
  } else {
    cursor.classList.remove("is-typing");
    setTimeout(erase, newPhraseDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    textSpan.textContent = phrasesArray[phrasesArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, deleteDelay);
    cursor.classList.add("is-typing");
  } else {
    if (charIndex <= 0) {
      phrasesArrayIndex++;
      if (phrasesArrayIndex >= phrasesArray.length) {
        phrasesArrayIndex = 0;
      }
      setTimeout(typeWriter, typingDelay);
    }
  }
}
