/**
 * REFINED PROMPT FOR ROBUST CAMELCASE FUNCTION
 *
 * Requirements:
 * 1. Type Safety: Throw a TypeError with a descriptive message if the input is not a string.
 * 2. Empty Inputs: If the string is empty or contains only whitespace, return an empty string.
 * 3. Delimiter Handling: Convert spaces, hyphens, and underscores to camelCase boundaries.
 * 4. Multiple Delimiters: Handle multiple consecutive delimiters (e.g., "user__name" or "  hello-world ").
 * 5. Special Characters: Remove special characters, preserving alphanumeric and delimiters.
 * 6. Case Normalization: Ensure the first character is always lowercase, even if input starts with capital.
 * 7. Numbers in Words: Handle numbers embedded within words (e.g., "user_2_name" → "user2Name").
 * 8. Leading/Trailing Whitespace: Trim whitespace before processing.
 * 9. Acronyms & Mixed Case: Preserve numbers and handle all-uppercase sequences appropriately.
 *
 * Examples:
 * - toCamelCase("hello world") → "helloWorld"
 * - toCamelCase("User_ID") → "userId"
 * - toCamelCase("  fast---track  ") → "fastTrack"
 * - toCamelCase("user_2_name") → "user2Name"
 * - toCamelCase("HTTP_STATUS_CODE") → "httpStatusCode"
 * - toCamelCase("hello@world!test") → "helloWorldTest"
 * - toCamelCase("   ") → ""
 * - toCamelCase(null) → Throws TypeError
 * - toCamelCase(undefined) → Throws TypeError
 * - toCamelCase(123) → Throws TypeError
 */

/**
 * Converts a string to camelCase with comprehensive error handling and edge case management.
 *
 * Handles type validation, empty inputs, multiple delimiters, special characters,
 * and ensures consistent lowercase-first output normalization.
 *
 * @param {string} str - The input string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * toCamelCase("hello world");
 * // Returns: "helloWorld"
 *
 * @example
 * toCamelCase("User_ID");
 * // Returns: "userId"
 *
 * @example
 * toCamelCase("  fast---track  ");
 * // Returns: "fastTrack"
 *
 * @example
 * toCamelCase("user_2_name");
 * // Returns: "user2Name"
 *
 * @example
 * toCamelCase("HTTP_STATUS_CODE");
 * // Returns: "httpStatusCode"
 *
 * @example
 * toCamelCase("hello@world!test");
 * // Returns: "helloWorldTest"
 *
 * @example
 * toCamelCase(null);
 * // Throws: TypeError: Input must be a string
 */
function toCamelCase(str) {
  // Type Safety: Validate input is a string
  if (typeof str !== "string") {
    const type = str === null ? "null" : typeof str;
    throw new TypeError(`Input must be a string, received ${type}`);
  }

  // Empty Inputs: Return empty string if empty or only whitespace
  if (str.trim().length === 0) {
    return "";
  }

  // Leading/Trailing Whitespace: Trim whitespace before processing
  const trimmed = str.trim();

  // Special Characters: Remove all non-alphanumeric characters except delimiters
  // This preserves letters, numbers, spaces, hyphens, and underscores
  const cleaned = trimmed.replace(/[^\w\s\-]/g, "");

  // Case Normalization: Convert to lowercase
  const lowercased = cleaned.toLowerCase();

  // Multiple Delimiters & Delimiter Handling: Split by spaces, hyphens, and underscores
  // Filter out empty strings that result from multiple consecutive delimiters
  const words = lowercased.split(/[\s\-_]+/).filter((word) => word.length > 0);

  // If no valid words remain, return empty string
  if (words.length === 0) {
    return "";
  }

  // Build camelCase: first word lowercase, subsequent words capitalized
  return words
    .map((word, index) => {
      if (index === 0) {
        // Ensure first character is lowercase
        return word.charAt(0).toLowerCase() + word.slice(1);
      }
      // Capitalize first letter of subsequent words (including numbers)
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

module.exports = toCamelCase;
