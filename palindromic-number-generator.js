function palindromicNumberGenerator(num) {
  // Check if num is a palindrome
  // - Reverse the digits and compare
  //   - Convert to a string
  //   - Split the string
  //   - Reverse the digits and recombine
  //   - Check equality
  // If num is not a palindrome, then add num and its reverse and
  // check if the sum is a palindrome
  // Keep checking until a palindrome is reached
  // Increment a step count each time a sum is added

  let steps = 0;

  function iterator(value) {
    let eulav = parseInt(
      value
        .toString()
        .split("")
        .reverse()
        .join("")
    );
    if (value === eulav) {
      return { value, steps };
    } else {
      steps++;
      return iterator(value + eulav);
    }
  }
  return iterator(num);
}

module.exports = palindromicNumberGenerator;
