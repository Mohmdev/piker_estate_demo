import { isIncludedInSibling } from '@utils/siblingFieldCondition'
import type { NamedTab } from 'payload'

export const FinanceInterface: NamedTab = {
  name: 'finance',
  label: 'Finance',
  interfaceName: 'FinanceInterface',
  fields: [
    {
      type: 'row',
      fields: [
        {
          type: 'select',
          name: 'market',
          label: 'Market Segment',
          options: [
            { label: 'Economy', value: 'economy' },
            { label: 'Mid-Market', value: 'mid-market' },
            { label: 'Luxury', value: 'luxury' },
            { label: 'Ultra-Luxury', value: 'ultra-luxury' },
            { label: 'Commercial', value: 'commercial' },
            { label: 'Industrial', value: 'industrial' },
            { label: 'Other', value: 'other' },
            { label: 'Custom', value: 'custom' },
          ],
        },
        {
          type: 'text',
          name: 'customMarket',
          label: 'Custom Market',
          admin: {
            description: 'Enter a custom market segment',
            condition: isIncludedInSibling('market', 'custom'),
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          type: 'checkbox',
          name: 'requiresDeposit',
          label: 'Requires Deposit / Down Payment',
          defaultValue: false,
          admin: {
            description: 'Does this transaction type require a deposit?',
          },
        },
        {
          type: 'select',
          name: 'depositType',
          label: 'Deposit Type',
          options: [
            { label: 'Percentage', value: 'percentage' },
            { label: 'Amount', value: 'amount' },
          ],
        },
        {
          type: 'number',
          name: 'depositAmount',
          label: 'Deposit Amount',
          admin: {
            condition: isIncludedInSibling('depositType', 'amount'),
          },
        },
        {
          type: 'number',
          name: 'depositPercentage',
          label: 'Deposit Percentage',
          admin: {
            condition: isIncludedInSibling('depositType', 'percentage'),
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          type: 'checkbox',
          label: 'Has Installments',
          name: 'hasInstallments',
          defaultValue: false,
          admin: {
            description: 'Does this property have installments?',
          },
        },
        {
          type: 'number',
          name: 'installmentsNumber',
          label: 'Number of Installments',
          admin: {
            condition: isIncludedInSibling('hasInstallments', true),
          },
        },
        {
          type: 'number',
          name: 'installmentAmount',
          label: 'Installment Amount',
          admin: {
            condition: isIncludedInSibling('hasInstallments', true),
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          type: 'select',
          name: 'targetResidents',
          label: 'Target Residents',
          options: [
            { label: 'Families', value: 'families' },
            { label: 'Couples', value: 'couples' },
            { label: 'Professionals', value: 'professionals' },
            { label: 'Executives', value: 'executives' },
            { label: 'Singles', value: 'singles' },
            { label: 'Students', value: 'students' },
            { label: 'Retired', value: 'retired' },
            { label: 'Custom', value: 'custom' },
          ],
        },
        {
          type: 'text',
          name: 'customTargetResidents',
          label: 'Custom Target Residents',
          admin: {
            condition: isIncludedInSibling('targetResidents', 'custom'),
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'investmentPotential',
          label: 'Investment Potential',
          type: 'select',
          options: [
            { label: 'High', value: 'high' },
            { label: 'Medium', value: 'medium' },
            { label: 'Low', value: 'low' },
            { label: 'Custom', value: 'custom' },
          ],
        },
        {
          type: 'text',
          name: 'customInvestmentPotential',
          label: 'Custom Investment Potential',
          admin: {
            condition: isIncludedInSibling('investmentPotential', 'custom'),
          },
        },
        {
          type: 'select',
          name: 'investmentType',
          label: 'Investment Type',
          options: [
            { label: 'Rental Income', value: 'rental-income' },
            {
              label: 'Value Appreciation',
              value: 'value-appreciation',
            },
            { label: 'Mixed Use', value: 'mixed-use' },
            { label: 'Custom', value: 'custom' },
          ],
        },
        {
          type: 'text',
          name: 'customInvestmentType',
          label: 'Custom Investment Type',
          admin: {
            condition: isIncludedInSibling('investmentType', 'custom'),
          },
        },
      ],
    },
  ],
}
