/**
 * @fileoverview String case conversion utility functions
 *
 * This module provides a collection of functions to convert strings between
 * different naming conventions (camelCase, dot.case, snake_case, etc.).
 *
 * All functions include:
 * - Strict type validation with descriptive error messages
 * - Comprehensive error handling for edge cases
 * - Support for multiple delimiter types (spaces, hyphens, underscores)
 * - Special character removal
 * - Consistent output normalization
 *
 * @module stringCaseConverters
 * @version 1.0.0
 */

/**
 * Converts a string to camelCase format.
 *
 * Transforms the input string by:
 * - Validating that input is a string (throws TypeError if not)
 * - Trimming leading/trailing whitespace
 * - Removing special characters (preserving alphanumerics and delimiters)
 * - Splitting on spaces, hyphens, and underscores
 * - Converting the first word to lowercase
 * - Capitalizing the first letter of each subsequent word
 *
 * @function toCamelCase
 * @param {string} str - The input string to convert to camelCase.
 *                       Can contain spaces, hyphens, underscores, and special characters.
 * @returns {string} The camelCase formatted string with all words joined together.
 *                   Returns an empty string if input is empty or whitespace-only.
 * @throws {TypeError} If the input is not a string. Error message format:
 *                     "Input must be a string, received [type]"
 *
 * @example
 * // Basic usage with spaces
 * toCamelCase("hello world");
 * // Returns: "helloWorld"
 *
 * @example
 * // Handling underscores
 * toCamelCase("User_ID");
 * // Returns: "userId"
 *
 * @example
 * // Handling multiple consecutive delimiters
 * toCamelCase("  fast---track  ");
 * // Returns: "fastTrack"
 *
 * @example
 * // Handling numbers embedded in words
 * toCamelCase("user_2_name");
 * // Returns: "user2Name"
 *
 * @example
 * // Handling acronyms and all-caps
 * toCamelCase("HTTP_STATUS_CODE");
 * // Returns: "httpStatusCode"
 *
 * @example
 * // Removing special characters
 * toCamelCase("hello@world!test");
 * // Returns: "helloWorldTest"
 *
 * @example
 * // Empty string handling
 * toCamelCase("   ");
 * // Returns: ""
 *
 * @example
 * // Type validation
 * toCamelCase(null);
 * // Throws: TypeError: Input must be a string, received null
 *
 * @example
 * toCamelCase(undefined);
 * // Throws: TypeError: Input must be a string, received undefined
 *
 * @see {@link toDotCase} for dot.case conversion
 * @see {@link toSnakeCase} for snake_case conversion
 */
function toCamelCase(str) {
  if (typeof str !== "string") {
    const type = str === null ? "null" : typeof str;
    throw new TypeError(`Input must be a string, received ${type}`);
  }

  if (str.trim().length === 0) {
    return "";
  }

  const trimmed = str.trim();
  const cleaned = trimmed.replace(/[^\w\s\-]/g, "");
  const lowercased = cleaned.toLowerCase();
  const words = lowercased.split(/[\s\-_]+/).filter((word) => word.length > 0);

  if (words.length === 0) {
    return "";
  }

  return words
    .map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toLowerCase() + word.slice(1);
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

/**
 * Converts a string to dot.case format.
 *
 * Transforms the input string by:
 * - Validating that input is a string (throws TypeError if not)
 * - Trimming leading/trailing whitespace
 * - Removing special characters (preserving alphanumerics and delimiters)
 * - Splitting on spaces, hyphens, and underscores
 * - Converting the entire output to lowercase
 * - Joining words with dots as separators
 *
 * @function toDotCase
 * @param {string} str - The input string to convert to dot.case.
 *                       Can contain spaces, hyphens, underscores, and special characters.
 * @returns {string} The dot.case formatted string with words separated by dots.
 *                   Returns an empty string if input is empty or whitespace-only.
 * @throws {TypeError} If the input is not a string. Error message format:
 *                     "Input must be a string, received [type]"
 *
 * @example
 * // Basic usage with spaces
 * toDotCase("hello world");
 * // Returns: "hello.world"
 *
 * @example
 * // Handling underscores
 * toDotCase("User_ID");
 * // Returns: "user.id"
 *
 * @example
 * // Handling multiple consecutive delimiters
 * toDotCase("  fast---track  ");
 * // Returns: "fast.track"
 *
 * @example
 * // Handling numbers embedded in words
 * toDotCase("user_2_name");
 * // Returns: "user.2.name"
 *
 * @example
 * // Handling acronyms and all-caps
 * toDotCase("HTTP_STATUS_CODE");
 * // Returns: "http.status.code"
 *
 * @example
 * // Removing special characters
 * toDotCase("hello@world!test");
 * // Returns: "hello.world.test"
 *
 * @example
 * // Empty string handling
 * toDotCase("   ");
 * // Returns: ""
 *
 * @example
 * // Type validation
 * toDotCase(null);
 * // Throws: TypeError: Input must be a string, received null
 *
 * @see {@link toCamelCase} for camelCase conversion
 * @see {@link toSnakeCase} for snake_case conversion
 */
function toDotCase(str) {
  if (typeof str !== "string") {
    const type = str === null ? "null" : typeof str;
    throw new TypeError(`Input must be a string, received ${type}`);
  }

  if (str.trim().length === 0) {
    return "";
  }

  const trimmed = str.trim();
  const cleaned = trimmed.replace(/[^\w\s\-]/g, "");
  const lowercased = cleaned.toLowerCase();
  const words = lowercased.split(/[\s\-_]+/).filter((word) => word.length > 0);

  if (words.length === 0) {
    return "";
  }

  return words.join(".");
}

/**
 * Converts a string to snake_case format.
 *
 * Transforms the input string by:
 * - Validating that input is a string (throws TypeError if not)
 * - Trimming leading/trailing whitespace
 * - Removing special characters (preserving alphanumerics and delimiters)
 * - Splitting on spaces, hyphens, and underscores
 * - Converting the entire output to lowercase
 * - Joining words with underscores as separators
 *
 * @function toSnakeCase
 * @param {string} str - The input string to convert to snake_case.
 *                       Can contain spaces, hyphens, underscores, and special characters.
 * @returns {string} The snake_case formatted string with words separated by underscores.
 *                   Returns an empty string if input is empty or whitespace-only.
 * @throws {TypeError} If the input is not a string. Error message format:
 *                     "Input must be a string, received [type]"
 *
 * @example
 * // Basic usage with spaces
 * toSnakeCase("hello world");
 * // Returns: "hello_world"
 *
 * @example
 * // Handling hyphens
 * toSnakeCase("User-ID");
 * // Returns: "user_id"
 *
 * @example
 * // Handling multiple consecutive delimiters
 * toSnakeCase("  fast---track  ");
 * // Returns: "fast_track"
 *
 * @example
 * // Handling numbers embedded in words
 * toSnakeCase("user_2_name");
 * // Returns: "user_2_name"
 *
 * @example
 * // Handling acronyms and all-caps
 * toSnakeCase("HTTP_STATUS_CODE");
 * // Returns: "http_status_code"
 *
 * @example
 * // Removing special characters
 * toSnakeCase("hello@world!test");
 * // Returns: "hello_world_test"
 *
 * @example
 * // Empty string handling
 * toSnakeCase("   ");
 * // Returns: ""
 *
 * @example
 * // Type validation
 * toSnakeCase(null);
 * // Throws: TypeError: Input must be a string, received null
 *
 * @see {@link toCamelCase} for camelCase conversion
 * @see {@link toDotCase} for dot.case conversion
 */
function toSnakeCase(str) {
  if (typeof str !== "string") {
    const type = str === null ? "null" : typeof str;
    throw new TypeError(`Input must be a string, received ${type}`);
  }

  if (str.trim().length === 0) {
    return "";
  }

  const trimmed = str.trim();
  const cleaned = trimmed.replace(/[^\w\s\-]/g, "");
  const lowercased = cleaned.toLowerCase();
  const words = lowercased.split(/[\s\-_]+/).filter((word) => word.length > 0);

  if (words.length === 0) {
    return "";
  }

  return words.join("_");
}

/**
 * Converts a string to kebab-case (hyphen-separated) format.
 *
 * Transforms the input string by:
 * - Validating that input is a string (throws TypeError if not)
 * - Trimming leading/trailing whitespace
 * - Removing special characters (preserving alphanumerics and delimiters)
 * - Splitting on spaces, hyphens, and underscores
 * - Converting the entire output to lowercase
 * - Joining words with hyphens as separators
 *
 * @function toKebabCase
 * @param {string} str - The input string to convert to kebab-case.
 *                       Can contain spaces, hyphens, underscores, and special characters.
 * @returns {string} The kebab-case formatted string with words separated by hyphens.
 *                   Returns an empty string if input is empty or whitespace-only.
 * @throws {TypeError} If the input is not a string. Error message format:
 *                     "Input must be a string, received [type]"
 *
 * @example
 * // Basic usage with spaces
 * toKebabCase("hello world");
 * // Returns: "hello-world"
 *
 * @example
 * // Handling underscores
 * toKebabCase("User_ID");
 * // Returns: "user-id"
 *
 * @example
 * // Handling multiple consecutive delimiters
 * toKebabCase("  fast___track  ");
 * // Returns: "fast-track"
 *
 * @example
 * // Removing special characters
 * toKebabCase("hello@world!test");
 * // Returns: "hello-world-test"
 *
 * @see {@link toCamelCase} for camelCase conversion
 * @see {@link toSnakeCase} for snake_case conversion
 * @see {@link toDotCase} for dot.case conversion
 */
function toKebabCase(str) {
  if (typeof str !== "string") {
    const type = str === null ? "null" : typeof str;
    throw new TypeError(`Input must be a string, received ${type}`);
  }

  if (str.trim().length === 0) {
    return "";
  }

  const trimmed = str.trim();
  const cleaned = trimmed.replace(/[^\w\s\-]/g, "");
  const lowercased = cleaned.toLowerCase();
  const words = lowercased.split(/[\s\-_]+/).filter((word) => word.length > 0);

  if (words.length === 0) {
    return "";
  }

  return words.join("-");
}

/**
 * COMPARISON TABLE: String Case Conversion Formats
 *
 * Input: "hello world example"
 * ┌─────────────────────────┬──────────────────────┐
 * │ Format                  │ Output               │
 * ├─────────────────────────┼──────────────────────┤
 * │ camelCase               │ helloWorldExample    │
 * │ PascalCase              │ HelloWorldExample    │
 * │ snake_case              │ hello_world_example  │
 * │ SCREAMING_SNAKE_CASE    │ HELLO_WORLD_EXAMPLE  │
 * │ kebab-case              │ hello-world-example  │
 * │ dot.case                │ hello.world.example  │
 * │ space case              │ hello world example  │
 * └─────────────────────────┴──────────────────────┘
 *
 * COMMON USE CASES:
 *
 * camelCase:
 * - JavaScript/TypeScript variable names
 * - Function and method names
 * - CSS-in-JS property names
 *
 * PascalCase:
 * - React component names
 * - Class names
 * - Constructor functions
 *
 * snake_case:
 * - Python variable/function names
 * - Database column names
 * - Environment variables
 * - URL path segments
 *
 * kebab-case:
 * - HTML attribute names (data-*, aria-*)
 * - CSS class names (BEM methodology)
 * - URL slugs
 * - NPM package names
 *
 * dot.case:
 * - Configuration file keys
 * - Namespace hierarchies
 * - Object property paths
 */

module.exports = {
  toCamelCase,
  toDotCase,
  toSnakeCase,
  toKebabCase,
};
