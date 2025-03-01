/**
 * Format a number as a price with currency symbol
 * @param price - The price to format
 * @param currency - The currency symbol to use (default: $)
 * @returns Formatted price string
 */
export const formatPrice = (price: number, currency: string = '$'): string => {
  return `${currency}${price.toLocaleString()}`
}

/**
 * Format a date string to a readable format
 * @param dateString - The date string to format
 * @param options - Intl.DateTimeFormatOptions
 * @returns Formatted date string
 */
export const formatDate = (
  dateString: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
): string => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US', options).format(date)
}

/**
 * Format a number with a suffix (e.g. 1,000 sq ft)
 * @param value - The number to format
 * @param suffix - The suffix to append
 * @returns Formatted number with suffix
 */
export const formatNumberWithSuffix = (
  value: number,
  suffix: string,
): string => {
  return `${value.toLocaleString()} ${suffix}`
}

/**
 * Truncate a string to a maximum length and add ellipsis if needed
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}
