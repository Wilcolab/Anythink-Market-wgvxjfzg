/**
 * FEW-SHOT PROMPT TECHNIQUE
 *
 * Few-shot prompting provides multiple examples to demonstrate the pattern.
 * Better than basic prompts for complex tasks or ambiguous requirements.
 */

/**
 * FEW-SHOT PROMPT FOR toCamelCase FUNCTION:
 *
 * "Create a JavaScript function called toCamelCase that converts strings to camelCase format.
 *
 * Study these examples to understand the expected behavior:
 *
 * Input: 'hello world'
 * Output: 'helloWorld'
 * Explanation: Split by spaces, lowercase first word, capitalize subsequent words
 *
 * Input: 'user_id_number'
 * Output: 'userIdNumber'
 * Explanation: Split by underscores, apply same capitalization rule
 *
 * Input: 'my-variable-name'
 * Output: 'myVariableName'
 * Explanation: Split by hyphens, apply same capitalization rule
 *
 * Input: 'HELLO_WORLD'
 * Output: 'helloWorld'
 * Explanation: First lowercase entire string, then apply camelCase pattern
 *
 * Input: '  hello---world  '
 * Output: 'helloWorld'
 * Explanation: Trim whitespace and treat multiple consecutive delimiters as single separator
 *
 * Input: 'hello@world!test'
 * Output: 'helloWorldTest'
 * Explanation: Remove special characters, treat remaining parts as words
 *
 * Requirements:
 * - Function should handle all cases shown above
 * - Include type validation (throw error if not a string)
 * - Return empty string for empty/whitespace-only input
 * - Support spaces, hyphens, underscores as delimiters
 * - Remove special characters
 *
 * Include JSDoc comments and inline explanations."
 */

/**
 * RESULT OF FEW-SHOT PROMPT:
 */

/**
 * Converts a string to camelCase format with comprehensive example-based approach.
 *
 * @param {string} str - Input string to convert
 * @returns {string} camelCase formatted string
 * @throws {TypeError} If input is not a string
 *
 * @example
 * toCamelCase("hello world");          // "helloWorld"
 * @example
 * toCamelCase("user_id_number");       // "userIdNumber"
 * @example
 * toCamelCase("my-variable-name");     // "myVariableName"
 * @example
 * toCamelCase("HELLO_WORLD");          // "helloWorld"
 * @example
 * toCamelCase("  hello---world  ");    // "helloWorld"
 * @example
 * toCamelCase("hello@world!test");     // "helloWorldTest"
 */
function toCamelCase(str) {
  // Type validation based on example requirements
  if (typeof str !== "string") {
    const type = str === null ? "null" : typeof str;
    throw new TypeError(`Input must be a string, received ${type}`);
  }

  // Handle empty/whitespace-only strings per examples
  if (str.trim().length === 0) {
    return "";
  }

  // Normalize: trim whitespace and lowercase
  const normalized = str.trim().toLowerCase();

  // Remove special characters (per example: "hello@world!test" → "helloWorldTest")
  const cleaned = normalized.replace(/[^\w\s\-]/g, "");

  // Split by various delimiters (spaces, hyphens, underscores)
  // Multiple consecutive delimiters treated as single separator
  const words = cleaned.split(/[\s\-_]+/).filter((word) => word.length > 0);

  // Handle edge case where no valid words remain
  if (words.length === 0) {
    return "";
  }

  // Apply camelCase pattern: first word lowercase, rest capitalized
  return words
    .map((word, index) => {
      const firstChar = word.charAt(0);
      const restOfWord = word.slice(1);

      if (index === 0) {
        // First word: keep lowercase
        return firstChar.toLowerCase() + restOfWord;
      } else {
        // Subsequent words: capitalize first character
        return firstChar.toUpperCase() + restOfWord;
      }
    })
    .join("");
}

/**
 * ANALYSIS OF FEW-SHOT PROMPT:
 * ============================
 *
 * Strengths:
 * ✓ Six concrete examples showing different scenarios
 * ✓ Each example has explanation of behavior
 * ✓ Covers most common edge cases
 * ✓ Clear pattern demonstration through examples
 * ✓ Better than basic prompt for complex requirements
 * ✓ Developer can infer requirements from patterns
 *
 * Limitations:
 * ✗ Still doesn't cover all possible edge cases
 * ✗ No guidance on performance or optimization
 * ✗ Doesn't specify documentation requirements
 * ✗ Could have more complex examples
 * ✗ Doesn't address Unicode/international characters
 *
 * Result Quality: Good implementation with most features
 *
 * Why Few-Shot Works Better:
 * - Examples are more intuitive than text descriptions
 * - Shows expected behavior clearly
 * - Reduces ambiguity about edge cases
 * - Developers naturally infer the algorithm
 *
 * Use this when:
 * - Task has multiple scenarios or edge cases
 * - Examples clarify ambiguous requirements
 * - Task is more complex than basic implementations
 * - You want to ensure consistent behavior across cases
 *
 * Don't use when:
 * - Task is extremely simple (zero-shot sufficient)
 * - You need ultra-detailed specifications (use refined/chain prompts)
 * - Examples might be misleading without context
 */

module.exports = toCamelCase;
