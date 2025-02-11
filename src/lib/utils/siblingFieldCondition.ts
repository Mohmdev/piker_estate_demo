import type { Condition } from 'payload'

/**
 * Creates a condition function that checks if a sibling field has a specific value or is included in an array of values.
 *
 * @param siblingFieldName The name of the sibling field to check.
 * @param expectedValue The expected value or an array of expected values.
 * @returns A Payload CMS condition function.
 */
export const hasSiblingField = (
  siblingFieldName: string,
  expectedValue: unknown | unknown[],
): Condition => {
  return (_, siblingData) => {
    const value = siblingData[siblingFieldName]
    if (Array.isArray(expectedValue)) {
      return expectedValue.includes(value)
    }
    return value === expectedValue
  }
}
