/**
 * CHAIN PROMPT: Creating a Robust toKebabCase Function
 *
 * This prompt uses a sequential, iterative approach where each step
 * builds upon the previous one to gradually construct a production-ready
 * function. This technique, known as "chain prompting," helps AI models
 * reason through complex problems step by step.
 */

/**
 * ============================================================================
 * STEP 1: BASIC FUNCTION STRUCTURE AND UNDERSTANDING
 * ============================================================================
 *
 * Objective: Establish the fundamental requirement and basic logic
 *
 * Prompt:
 * "Create a JavaScript function called `toKebabCase` that converts a string
 * to kebab-case format. The function should:
 * - Take a single string parameter
 * - Split the string by spaces
 * - Join the parts with hyphens
 * - Convert everything to lowercase
 *
 * Example: toKebabCase('hello world') should return 'hello-world'
 *
 * Provide the basic implementation."
 *
 * Expected Output:
 * - A simple function with basic string manipulation
 * - split() method to handle spaces
 * - join() method with hyphens
 * - toLowerCase() for normalization
 *
 * Code Example (Step 1 Result):
 */
function toKebabCase_Step1(str) {
  return str.toLowerCase().split(" ").join("-");
}

/**
 * ============================================================================
 * STEP 2: ENHANCE WITH MULTIPLE DELIMITER SUPPORT
 * ============================================================================
 *
 * Objective: Extend the function to handle various input formats
 *
 * Prompt:
 * "Building on the previous toKebabCase function:
 *
 * The function currently only handles spaces, but real-world inputs may
 * contain different delimiters. Enhance the function to also handle:
 * - Underscores (snake_case input like 'user_id')
 * - Hyphens (already hyphenated input like 'my-string')
 * - Multiple consecutive delimiters (like 'user__id' or 'my---string')
 *
 * Use a regex pattern to split on any combination of these delimiters.
 * Filter out empty strings that result from multiple consecutive delimiters.
 *
 * Examples that should work:
 * - toKebabCase('hello_world') → 'hello-world'
 * - toKebabCase('my--string') → 'my-string'
 * - toKebabCase('user__name__here') → 'user-name-here'"
 *
 * Expected Output:
 * - Use of regex pattern like /[\s\-_]+/
 * - filter() to remove empty strings
 * - More robust delimiter handling
 *
 * Code Example (Step 2 Result):
 */
function toKebabCase_Step2(str) {
  return str
    .toLowerCase()
    .split(/[\s\-_]+/) // Split on spaces, hyphens, or underscores
    .filter((word) => word.length > 0) // Remove empty strings
    .join("-");
}

/**
 * ============================================================================
 * STEP 3: ADD COMPREHENSIVE ERROR HANDLING AND EDGE CASES
 * ============================================================================
 *
 * Objective: Make the function production-ready with robust validation
 *
 * Prompt:
 * "Building on the enhanced toKebabCase function from Step 2:
 *
 * Now add comprehensive error handling and edge case management:
 *
 * 1. TYPE VALIDATION: Throw a TypeError if input is not a string.
 *    Message format: 'Input must be a string, received [type]'
 *    Handle null specially (since typeof null === 'object')
 *
 * 2. EMPTY INPUT HANDLING: Return an empty string if the input is:
 *    - An empty string
 *    - Only whitespace (like '   ')
 *    Use trim() and check the length
 *
 * 3. WHITESPACE TRIMMING: Trim leading and trailing whitespace
 *    before processing
 *
 * 4. SPECIAL CHARACTERS: Remove special characters that aren't
 *    alphanumeric or delimiters. Use a regex like /[^\\w\\s\\-]/g
 *    to preserve word characters and delimiters while removing
 *    special symbols like @, !, #, etc.
 *
 * Test cases to verify:
 * - toKebabCase('hello world') → 'hello-world'
 * - toKebabCase('User_ID') → 'user-id'
 * - toKebabCase('  fast---track  ') → 'fast-track'
 * - toKebabCase('hello@world!test') → 'hello-world-test'
 * - toKebabCase(null) → TypeError
 * - toKebabCase('   ') → ''
 *
 * Ensure the function is robust and production-ready while maintaining
 * readable and well-commented code."
 *
 * Expected Output:
 * - Type checking with descriptive error messages
 * - Empty input validation
 * - Special character removal with regex
 * - Trim functionality
 * - Comprehensive comments explaining each step
 *
 * Code Example (Step 3 Result - FINAL PRODUCTION-READY):
 */

/**
 * Converts a string to kebab-case format with comprehensive error handling.
 *
 * Validates input type, handles empty inputs, removes special characters,
 * and normalizes multiple delimiters to single hyphens.
 *
 * @param {string} str - The input string to convert to kebab-case.
 * @returns {string} The kebab-case formatted string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * toKebabCase("hello world");
 * // Returns: "hello-world"
 *
 * @example
 * toKebabCase("User_ID");
 * // Returns: "user-id"
 *
 * @example
 * toKebabCase("  fast---track  ");
 * // Returns: "fast-track"
 *
 * @example
 * toKebabCase("hello@world!test");
 * // Returns: "hello-world-test"
 */
function toKebabCase(str) {
  // STEP 1: TYPE SAFETY
  // Validate that input is a string, throw TypeError if not
  if (typeof str !== "string") {
    const type = str === null ? "null" : typeof str;
    throw new TypeError(`Input must be a string, received ${type}`);
  }

  // STEP 2: EMPTY INPUT HANDLING
  // Return empty string if input is empty or only whitespace
  if (str.trim().length === 0) {
    return "";
  }

  // STEP 3: TRIM WHITESPACE
  // Remove leading and trailing whitespace before processing
  const trimmed = str.trim();

  // STEP 4: REMOVE SPECIAL CHARACTERS
  // Preserve alphanumerics and delimiters, remove special characters
  // This regex keeps word characters (\w), spaces, and hyphens
  const cleaned = trimmed.replace(/[^\w\s\-]/g, "");

  // STEP 5: NORMALIZE CASE
  // Convert entire string to lowercase
  const lowercased = cleaned.toLowerCase();

  // STEP 6: SPLIT ON DELIMITERS
  // Split on spaces, hyphens, and underscores (one or more consecutive)
  // Filter out empty strings that result from multiple consecutive delimiters
  const words = lowercased.split(/[\s\-_]+/).filter((word) => word.length > 0);

  // STEP 7: HANDLE EDGE CASE
  // If no valid words remain after processing, return empty string
  if (words.length === 0) {
    return "";
  }

  // STEP 8: JOIN WITH HYPHENS
  // Join all words with single hyphens and return
  return words.join("-");
}

/**
 * ============================================================================
 * WHY CHAIN PROMPTING WORKS
 * ============================================================================
 *
 * Chain prompting is effective because it:
 *
 * 1. PROGRESSIVE COMPLEXITY
 *    - Step 1 establishes the basic concept
 *    - Step 2 adds common requirements
 *    - Step 3 handles production concerns
 *    - Each step builds naturally on the previous
 *
 * 2. REASONING CHAIN
 *    - The model understands the progression of requirements
 *    - Each step depends on understanding the previous one
 *    - This leads to more coherent and complete solutions
 *
 * 3. REDUCED COGNITIVE LOAD
 *    - Rather than stating all requirements at once (which can be overwhelming),
 *      they're introduced gradually
 *    - The model can focus on one concern at a time
 *
 * 4. VERIFICATION POINTS
 *    - Each step provides clear, testable examples
 *    - The model can verify correctness before moving forward
 *    - This reduces errors and improves quality
 *
 * 5. DOCUMENTATION
 *    - The chain prompt itself serves as documentation
 *    - It explains the "why" behind each design decision
 *    - Future developers can understand the evolution of the function
 */

/**
 * ============================================================================
 * COMPARISON: DIRECT vs. CHAIN PROMPTING
 * ============================================================================
 *
 * DIRECT PROMPT (Less Effective):
 * ────────────────────────────────────────────────────────────────────────
 * "Create a production-ready JavaScript toKebabCase function that handles
 * type validation, empty inputs, special characters, multiple delimiters,
 * and case normalization with comprehensive error messages and examples."
 *
 * Problems:
 * - Overwhelming list of requirements
 * - No clear order of implementation
 * - Model must juggle many concerns at once
 * - Higher risk of incomplete solutions
 *
 *
 * CHAIN PROMPT (More Effective):
 * ────────────────────────────────────────────────────────────────────────
 * Step 1: "Create basic function that splits by spaces and joins with hyphens"
 * Step 2: "Enhance it to handle underscores, hyphens, and multiple delimiters"
 * Step 3: "Add type validation, error handling, and edge case management"
 *
 * Benefits:
 * - Clear progression and logical order
 * - Model handles one concern per step
 * - Each step validates previous work
 * - Produces more robust and complete solutions
 * - Easier to debug if something goes wrong
 */

module.exports = toKebabCase;
