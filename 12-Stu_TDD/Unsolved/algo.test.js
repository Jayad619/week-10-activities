const Algo = require("./algo.js");

describe("Algo", () => {
  it("reverse", () => {
    console.log(typeof Algo)
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    const algorithm = new Algo();
    const result = algorithm.reverse('hello');

    expect(result).toBe('olleh');
  });

  it("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    const algorithm = new Algo();
    const result = algorithm.isPalindrome('racecar');

    expect(result).toBe(true);
  });

  it("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    const algorithm = new Algo();
    const result = algorithm.capitalize('hello');

    expect(result).toBe('Hello');
  });
});
