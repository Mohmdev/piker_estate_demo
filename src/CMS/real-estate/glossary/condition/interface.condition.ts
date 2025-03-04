import type { SelectField } from 'payload'

export const propertyConditionInterface: SelectField = {
  type: 'select',
  name: 'condition',
  label: 'Condition',
  interfaceName: 'PropertyConditionInterface',
  hasMany: false,
  admin: {
    components: {
      Field: {
        path: '@CMS/real-estate/glossary/condition/Component#PropertyConditionComponent',
      },
    },
  },
  options: [
    { label: 'Brand New', value: 'brandNew' },
    { label: 'Renovated', value: 'renovated' },
    { label: 'Well-Maintained', value: 'wellMaintained' },
    { label: 'Needs Renovation', value: 'needsRenovation' },
  ],
}
