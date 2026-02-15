/**
 * Adds two numbers and returns their sum.
 *
 * Validates that both inputs are actual numbers (not strings, null, undefined, etc.)
 * and throws a descriptive error if validation fails.
 *
 * @param {number} num1 - The first number to add.
 * @param {number} num2 - The second number to add.
 * @returns {number} The sum of num1 and num2.
 * @throws {TypeError} If either input is not a valid number.
 *
 * @example
 * addNumbers(5, 3);
 * // Returns: 8
 *
 * @example
 * addNumbers(10.5, 2.3);
 * // Returns: 12.8
 *
 * @example
 * addNumbers(-5, 3);
 * // Returns: -2
 *
 * @example
 * addNumbers('5', 3);
 * // Throws: TypeError: First argument must be a number, received string
 *
 * @example
 * addNumbers(5, null);
 * // Throws: TypeError: Second argument must be a number, received object
 *
 * @example
 * addNumbers(5, undefined);
 * // Throws: TypeError: Second argument must be a number, received undefined
 */
function addNumbers(num1, num2) {
  // Validate first argument
  if (typeof num1 !== "number" || isNaN(num1)) {
    const type = num1 === null ? "null" : typeof num1;
    throw new TypeError(
      `First argument must be a number, received ${type}`
    );
  }

  // Validate second argument
  if (typeof num2 !== "number" || isNaN(num2)) {
    const type = num2 === null ? "null" : typeof num2;
    throw new TypeError(
      `Second argument must be a number, received ${type}`
    );
  }

  // Return the sum
  return num1 + num2;
}

module.exports = addNumbers;
