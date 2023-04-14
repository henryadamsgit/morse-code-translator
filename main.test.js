import { englishToMorse, morseToEnglish } from "./main";

describe("englishToMorse", () => {
  it("should return a string", () => {
    const result = englishToMorse("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
  });
  it("should return an empty string when given an empty string", () => {
    const result = englishToMorse("");
    expect(result).toBe("");
  });

  it("should handle uppercase letters correctly", () => {
    const result = englishToMorse("HELLO");
    expect(result).toBe(".... . .-.. .-.. ---");
  });

  it("should handle spaces correctly", () => {
    const result = englishToMorse("hello world");
    expect(result).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
  });

  it("should handle commas correctly", () => {
    const result = englishToMorse("Hello, world");
    expect(result).toBe(".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -..");
  });

  it("should handle exclamation points correctly", () => {
    const result = englishToMorse("Hello!");
    expect(result).toBe(".... . .-.. .-.. --- -.-.--.");
  });

  it("should handle question marks correctly", () => {
    const result = englishToMorse("Hello?");
    expect(result).toBe(".... . .-.. .-.. --- ..--..");
  });

  it("should handle email adresses with @", () => {
    const result = englishToMorse("hello@email.com");
    expect(result).toBe(
      ".... . .-.. .-.. --- .--.-. . -- .- .. .-.. .-.-.- -.-. --- --"
    );
  });

  it("should handle numbers correctly", () => {
    const result = englishToMorse("123");
    expect(result).toBe(".---- ..--- ...--");
  });

  it("should handle consecutive spaces correctly", () => {
    const result = englishToMorse("hello  world");
    expect(result).toBe(".... . .-.. .-.. --- / / .-- --- .-. .-.. -..");
  });

  it("should throw an error when given a string with invalid characters", () => {
    expect(() => englishToMorse("hello$world")).toThrow();
  });
});

describe("morseToEnglish", () => {
  it("should translate Morse code to English", () => {
    const result = morseToEnglish(".... . .-.. .-.. ---");
    expect(result).toBe("hello");
  });

  it("should handle spaces between Morse code characters", () => {
    const result = morseToEnglish(
      ".... . .-.. .-.. ---    .-- --- .-. .-.. -.. ..."
    );
    expect(result).toBe("hello world");
  });

  it("should handle spaces between Morse code words", () => {
    const result = morseToEnglish(
      ".... . .-.. .-.. ---   .-- --- .-. .-.. -.. ..."
    );
    expect(result).toBe("hello world");
  });

  it("should handle uppercase and lowercase Morse code characters", () => {
    const result = morseToEnglish(
      ".... . .-.. .-.. ---   .-- --- .-. .-.. -.. ...   - --- -..- -.-.--"
    );
    expect(result).toBe("hello world!");
  });

  it("should handle empty input", () => {
    const result = morseToEnglish("");
    expect(result).toBe("");
  });

  it("should handle input with only one Morse code character", () => {
    const result = morseToEnglish(".-");
    expect(result).toBe("a");
  });

  it("should throw an error when given an invalid Morse code character", () => {
    expect(() => morseToEnglish(".... .- .-.. .-.. --- #")).toThrow();
  });
});
