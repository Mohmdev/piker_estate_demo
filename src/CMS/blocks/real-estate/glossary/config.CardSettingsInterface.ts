import { isIncludedInSibling } from '@utils/siblingFieldCondition'
import type { CollapsibleField } from 'payload'
import { currencySelect } from './config.currencySelect'

export const CardSettingsInterface: CollapsibleField = {
  label: 'Card Settings',
  type: 'collapsible',
  admin: {
    initCollapsed: false,
  },
  fields: [
    {
      type: 'group',
      name: 'card',
      label: false,
      interfaceName: 'CardSettingsInterface',
      fields: [
        {
          type: 'select',
          name: 'enabledFields',
          label: 'Enabled Fields',
          hasMany: true,
          required: true,
          defaultValue: [
            'price',
            'bedrooms',
            'bathrooms',
            'categories',
            'thumbnail',
            'tags',
          ],
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
            className: 'border-b-1 border-border pb-6 m-0',
          },
        },
        {
          type: 'group',
          name: 'thumbnail',
          label: 'Thumbnail',
          admin: {
            condition: isIncludedInSibling('enabledFields', 'thumbnail'),
            hideGutter: true,
            className: 'border-b-1 border-border pt-6 pb-8 px-4 m-0',
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
          type: 'group',
          name: 'price',
          label: 'Price',
          admin: {
            condition: isIncludedInSibling('enabledFields', 'price'),
            hideGutter: true,
            className: 'border-b-1 border-border pt-6 pb-8 px-4 m-0',
          },
          fields: [
            {
              type: 'row',
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
              ],
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
              type: 'row',
              admin: {
                condition: isIncludedInSibling('overrideGlobalCurrency', 'yes'),
              },
              fields: [currencySelect],
            },
          ],
        },
        {
          type: 'group',
          name: 'tags',
          label: 'Tags',
          admin: {
            condition: isIncludedInSibling('enabledFields', 'tags'),
            hideGutter: true,
            className: 'border-b-1 border-border pt-6 pb-8 px-4 m-0',
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
      ],
    },
  ],
}
