import { morseToEnglish, morseOrEnglish, englishToMorse } from "./main.js";

const outputText = document.querySelector("#output");
const translateButton = document.querySelector("#translate");
const input = document.querySelector(".input");

translateButton.addEventListener("click", (event) => {
  outputText.value = morseOrEnglish(input.value);
  console.log(outputText);
});
