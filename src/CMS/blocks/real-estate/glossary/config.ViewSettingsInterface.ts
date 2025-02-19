import { isIncludedInSibling } from '@utils/siblingFieldCondition'
import type { CollapsibleField } from 'payload'

export const ViewSettingsInterface: CollapsibleField = {
  label: 'View Settings',
  type: 'collapsible',
  admin: {
    initCollapsed: false,
  },
  fields: [
    {
      type: 'group',
      name: 'view',
      label: false,
      interfaceName: 'ViewSettingsInterface',
      fields: [
        {
          name: 'layout',
          label: 'Layout style',
          type: 'select',
          hasMany: false,
          required: true,
          defaultValue: 'grid',
          options: [
            {
              value: 'grid',
              label: 'Grid',
            },
            {
              value: 'list',
              label: 'List',
            },
            {
              value: 'ftrd',
              label: 'Featured',
            },
            {
              value: 'crsl',
              label: 'Carousel',
            },
            // 'slider',
            // 'map',
            // 'gallery',
            // 'video',
            // 'single',
            // 'double',
            // 'featured-double',
          ],
          admin: {
            description:
              'Select the fields that should be displayed in the listing card.',
            isClearable: false,
            isSortable: true,
            className: 'border-b-1 border-border pb-6 m-0',
          },
        },
        // Grid
        {
          label: 'Grid',
          name: 'grid',
          type: 'group',
          admin: {
            condition: isIncludedInSibling('layout', 'grid'),
            hideGutter: true,
            className: 'pt-6 pb-8 px-4 m-0',
          },
          fields: [
            {
              name: 'columns',
              label: 'Columns',
              type: 'number',
              defaultValue: 3,
              min: 1,
              max: 4,
            },
          ],
        },
        // List
        {
          label: 'List',
          name: 'list',
          type: 'group',
          admin: {
            condition: isIncludedInSibling('layout', 'list'),
            hideGutter: true,
            className: 'pt-6 pb-8 px-4 m-0',
          },
          fields: [
            {
              name: 'columns',
              label: 'Columns',
              type: 'number',
              defaultValue: 6,
              min: 1,
              max: 4,
            },
          ],
        },
        // Featured
        {
          label: 'Featured',
          name: 'ftrd',
          type: 'group',
          admin: {
            condition: isIncludedInSibling('layout', 'ftrd'),
            hideGutter: true,
            className: 'pt-6 pb-8 px-4 m-0',
          },
          fields: [
            {
              name: 'columns',
              label: 'Columns',
              type: 'number',
              defaultValue: 1,
              min: 1,
              max: 2,
            },
          ],
        },
      ],
    },
  ],
}
