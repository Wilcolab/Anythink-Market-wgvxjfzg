/**
 * BASIC PROMPT TECHNIQUE
 *
 * A basic prompt adds minimal examples and clear structure.
 * Good for straightforward tasks with standard implementations.
 */

/**
 * BASIC PROMPT FOR toCamelCase FUNCTION:
 *
 * "Create a JavaScript function called toCamelCase that converts a string to camelCase.
 *
 * The function should:
 * - Take a string as input
 * - Split the string into words (separated by spaces, hyphens, or underscores)
 * - Keep the first word lowercase
 * - Capitalize the first letter of each remaining word
 * - Join all words together without separators
 * - Convert the entire string to lowercase first
 *
 * Example: toCamelCase('hello world') returns 'helloWorld'
 * Example: toCamelCase('user_id') returns 'userId'
 *
 * Include proper error handling and comments in your code."
 */

/**
 * RESULT OF BASIC PROMPT:
 */

function toCamelCase(str) {
  // Validate input
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }

  // Handle empty strings
  if (str.trim().length === 0) {
    return "";
  }

  // Convert to lowercase and split by delimiters
  return str
    .toLowerCase()
    .split(/[\s\-_]+/)
    .filter((word) => word.length > 0)
    .map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

/**
 * ANALYSIS OF BASIC PROMPT:
 * ========================
 *
 * Strengths:
 * ✓ Clear, straightforward instructions
 * ✓ Two concrete examples provided
 * ✓ Covers main functionality
 * ✓ Asks for basic error handling
 *
 * Limitations:
 * ✗ Doesn't specify edge cases (special characters, multiple delimiters)
 * ✗ No guidance on performance considerations
 * ✗ Doesn't address null/undefined
 * ✗ Missing documentation requirements
 *
 * Result Quality: Good for basic implementation, but incomplete
 *
 * Use this when:
 * - Task is straightforward and well-defined
 * - Basic examples give sufficient context
 * - Edge cases are minimal
 * - Performance isn't critical
 *
 * Don't use when:
 * - Complex requirements need detailed examples
 * - Edge cases are important
 * - Performance is critical
 * - Task is novel or non-standard
 */

module.exports = toCamelCase;
