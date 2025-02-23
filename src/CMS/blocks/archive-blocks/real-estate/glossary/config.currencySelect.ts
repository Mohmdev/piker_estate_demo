import type { SelectField } from 'payload'

export const currencySelect: SelectField = {
  type: 'select',
  name: 'currencySelect',
  label: 'Currency',
  hasMany: false,
  options: [
    // Americas
    { label: 'USD', value: 'US$' }, // United States Dollar
    { label: 'CAD', value: 'CA$' }, // Canadian Dollar
    { label: 'MXN', value: 'MX$' }, // Mexican Peso
    { label: 'BRL', value: 'R$' }, // Brazilian Real

    // Europe
    { label: 'EUR', value: '€' }, // Euro
    { label: 'GBP', value: '£' }, // British Pound
    { label: 'CHF', value: 'CHF' }, // Swiss Franc (using abbreviation)
    { label: 'RUB', value: '₽' }, // Russian Ruble

    // Asia-Pacific
    { label: 'CNY', value: 'CN¥' }, // Chinese Yuan
    { label: 'JPY', value: '¥' }, // Japanese Yen
    { label: 'INR', value: '₹' }, // Indian Rupee
    { label: 'SGD', value: 'SG$' }, // Singapore Dollar
    { label: 'HKD', value: 'HK$' }, // Hong Kong Dollar
    { label: 'AED', value: 'د.إ' }, // UAE Dirham
    { label: 'THB', value: '฿' }, // Thai Baht (common in resort properties)
    { label: 'VND', value: '₫' }, // Vietnamese Dong (emerging market)

    // Oceania
    { label: 'AUD', value: 'AU$' }, // Australian Dollar
    { label: 'NZD', value: 'NZ$' }, // New Zealand Dollar

    // Africa
    { label: 'ZAR', value: 'R' }, // South African Rand
  ].sort((a, b) => a.label.localeCompare(b.label)), // Alphabetical order,
  admin: {
    isClearable: true,
    isSortable: true,
  },
}
