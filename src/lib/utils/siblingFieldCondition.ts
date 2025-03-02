import type { Condition } from 'payload'

/**
 * Creates a condition function that checks if a sibling field has a specific value or is included in an array of values.
 *
 * @param siblingFieldName The name of the sibling field to check.
 * @param expectedValue The expected value or an array of expected values.
 * @returns A Payload CMS condition function.
 */
export const isIncludedInSibling = (
  siblingFieldName: string,
  expectedValue: unknown | unknown[],
): Condition => {
  return (_, siblingData) => {
    const value = siblingData[siblingFieldName]

    if (Array.isArray(value)) {
      return value.includes(expectedValue as string)
    }

    if (Array.isArray(expectedValue)) {
      return expectedValue.includes(value)
    }

    return value === expectedValue
  }
}

/**
 * Creates a condition function that checks if a sibling field has a truthy value.
 *
 * @param siblingFieldName The name of the sibling field to check.
 * @returns A Payload CMS condition function that returns true if the sibling field is truthy.
 */
export const isSiblingTruthy = (siblingFieldName: string): Condition => {
  return (_data, siblingData) => Boolean(siblingData?.[siblingFieldName])
}
