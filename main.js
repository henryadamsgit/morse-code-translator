import { morseData1, morseData2 } from "./data.js";

//const outputDiv = document.querySelector("#output");
//const translateButton = document.querySelector("#translate");

export const englishToMorse = (string) => {
  const stringToMorse = string
    .toLowerCase()
    .split("")
    .map((char) => {
      if (morseData1[char]) {
        return morseData1[char];
      } else {
        throw new Error(`This character is invalid:  ${char}`);
      }
    });
  return stringToMorse.join(" ");
};

export const morseToEnglish = (string) => {
  const morseCharacters = string.split(" ");
  const englishCharacters = morseCharacters.map((char) => {
    if (char === "") {
      return "";
    } else if (morseData2[char]) {
      return morseData2[char];
    } else {
      throw new Error(`This Morse code character is invalid: ${char}`);
    }
  });
  return englishCharacters.join("");
};

//translateButton.addEventListener("click", englishToMorse, morseToEnglish);
