import { hasSiblingField } from '@utils/siblingFieldCondition'
import type { Field } from 'payload'
import { currencySelect } from './config.currencySelect'

export const listingCardOptions: Field = {
  name: 'card',
  label: 'Card Settings',
  type: 'group',
  interfaceName: 'ListingCardOptions',
  fields: [
    {
      type: 'select',
      name: 'enabledFields',
      label: 'Enabled Fields',
      defaultValue: [
        'price',
        'bedrooms',
        'bathrooms',
        'categories',
        'thumbnail',
        'tags',
      ],
      hasMany: true,
      options: [
        {
          label: 'Price',
          value: 'price',
        },
        {
          label: 'Bedrooms',
          value: 'bedrooms',
        },
        {
          label: 'Bathrooms',
          value: 'bathrooms',
        },
        {
          label: 'Lot Size',
          value: 'lotSize',
        },
        {
          label: 'Year Built',
          value: 'yearBuilt',
        },
        {
          label: 'Area Size',
          value: 'areaSize',
        },
        {
          label: 'Parking Spaces',
          value: 'parkingSpaces',
        },
        {
          label: 'Description',
          value: 'description',
        },
        {
          label: 'Categories',
          value: 'categories',
        },
        {
          label: 'Thumbnail',
          value: 'thumbnail',
        },
        {
          label: 'Tags',
          value: 'tags',
        },
      ],
      admin: {
        description:
          'Select the fields that should be displayed in the listing card.',
        isClearable: false,
        isSortable: true,
      },
    },
    {
      type: 'collapsible',
      label: 'Tags',
      admin: {
        condition: hasSiblingField('enabledFields', 'tags'),
      },
      fields: [
        {
          type: 'select',
          name: 'buttonStyle',
          label: 'Button Style',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
          ],
          hasMany: false,
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Thumbnail',
      admin: {
        condition: hasSiblingField('enabledFields', 'thumbnail'),
      },
      fields: [
        {
          type: 'select',
          name: 'fit',
          label: 'Media Fit',
          options: [
            { label: 'Cover', value: 'cover' },
            { label: 'Contain', value: 'contain' },
            { label: 'Fill', value: 'fill' },
          ],
          defaultValue: 'cover',
        },
        {
          type: 'select',
          name: 'position',
          label: 'Media Position',
          options: [
            { label: 'Top', value: 'top' },
            { label: 'Center', value: 'center' },
            { label: 'Bottom', value: 'bottom' },
          ],
          defaultValue: 'center',
        },
        {
          type: 'select',
          name: 'size',
          label: 'Media Size',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
          ],
          defaultValue: 'medium',
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Price',
      admin: {
        condition: hasSiblingField('enabledFields', 'price'),
      },
      fields: [
        {
          type: 'select',
          name: 'decimals',
          label: 'Decimals',
          options: [
            { label: 'None', value: 'none' },
            { label: 'One', value: 'one' },
            { label: 'Two', value: 'two' },
          ],
          defaultValue: 'none',
        },
        {
          type: 'select',
          name: 'currencyFormat',
          label: 'Currency Format',
          hasMany: false,
          options: [
            { label: 'Text', value: 'text' },
            { label: 'Symbol', value: 'symbol' },
          ],
          defaultValue: 'symbol',
        },
        {
          type: 'select',
          name: 'overrideGlobalCurrency',
          label: 'Override Global Currency',
          hasMany: false,
          options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
          ],
          defaultValue: 'no',
        },
        {
          type: 'collapsible',
          label: 'Currency',
          admin: {
            condition: hasSiblingField('overrideGlobalCurrency', 'yes'),
          },
          fields: [currencySelect],
        },
      ],
    },
  ],
}
