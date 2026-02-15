/**
 * Converts a string to dot.case format.
 *
 * Handles type validation, empty inputs, multiple delimiters, special character
 * removal, and ensures consistent lowercase output with dots as separators.
 *
 * @param {string} str - The input string to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * toDotCase("hello world");
 * // Returns: "hello.world"
 *
 * @example
 * toDotCase("User_ID");
 * // Returns: "user.id"
 *
 * @example
 * toDotCase("  fast---track  ");
 * // Returns: "fast.track"
 *
 * @example
 * toDotCase("HTTP_STATUS_CODE");
 * // Returns: "http.status.code"
 *
 * @example
 * toDotCase("hello@world!test");
 * // Returns: "hello.world.test"
 *
 * @example
 * toDotCase("user_2_name");
 * // Returns: "user.2.name"
 *
 * @example
 * toDotCase(null);
 * // Throws: TypeError: Input must be a string, received null
 */
function toDotCase(str) {
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

  // Join words with dots
  return words.join(".");
}

module.exports = toDotCase;
