import re


def convert_to_snake_case(text: str) -> str:
    """
    Convert text to snake_case format.

    Removes special characters, converts spaces and hyphens to underscores,
    and ensures the entire output is lowercase.

    Args:
        text: The input string to convert to snake_case.

    Returns:
        A snake_case formatted string with special characters removed,
        spaces and hyphens converted to underscores, and all lowercase.

    Examples:
        >>> convert_to_snake_case("Hello World")
        'hello_world'
        >>> convert_to_snake_case("My-String-Here")
        'my_string_here'
        >>> convert_to_snake_case("Special!@#Characters%")
        'specialcharacters'
        >>> convert_to_snake_case("Mixed-Case String! Test")
        'mixed_case_string_test'
    """
    # Convert to lowercase
    text = text.lower()

    # Replace hyphens and spaces with underscores
    text = text.replace("-", "_").replace(" ", "_")

    # Remove all special characters except underscores
    text = re.sub(r"[^a-z0-9_]", "", text)

    # Replace multiple consecutive underscores with a single underscore
    text = re.sub(r"_+", "_", text)

    # Remove leading and trailing underscores
    text = text.strip("_")

    return text
