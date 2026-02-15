/**
 * Converts a string to camelCase format with robust error handling.
 *
 * Validates input type, handles empty/whitespace-only strings, normalizes
 * delimiters (spaces, hyphens, underscores), and ensures the output starts
 * with a lowercase character.
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
 * toCamelCase(null);
 * // Throws: TypeError: Input must be a string
 *
 * @example
 * toCamelCase("   ");
 * // Returns: ""
 */
function toCamelCase(str) {
  // Type Safety: Validate input is a string
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }

  // Empty Inputs: Return empty string if empty or only whitespace
  if (str.trim().length === 0) {
    return "";
  }

  // Normalize: Convert to lowercase and trim whitespace
  const normalized = str.trim().toLowerCase();

  // Edge Cases: Split by spaces, hyphens, and underscores (including multiple consecutive ones)
  const words = normalized.split(/[\s\-_]+/).filter((word) => word.length > 0);

  // If no words after filtering, return empty string
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
      // Capitalize first letter of subsequent words
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

module.exports = toCamelCase;
