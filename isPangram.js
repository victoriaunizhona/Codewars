// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string) {
  var letters = "abcdefghijklmnopqrstuvwxyz"
  var lowerCaseString = string.toLowerCase();
  for (var i = 0; i < letters.length; i++) {
    if (lowerCaseString.indexOf(letters[i]) == -1)
      return false;

  }
  return true;

}

// Second possible solutiion
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. So if one of the letters is missing string.indexOf(x) !== -1 will return false for that letter.

// The reason why two returns are needed is because .every() runs the provided test function against every item in the array. Each test needs to either return true or false for it to work. Then if every test returned true .every() will return true, if one or more of the tests resulted in false .every() will return false. The final result of .every() is what we're after so it must be returned as well. 

function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    return string.indexOf(x) !== -1;
  });
}