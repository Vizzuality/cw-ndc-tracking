import { sections } from '../../mocks/sections';
import { parseCategories } from './reporting-selectors';

export const parsedCategories = [
  {
    title: 'Category 1',
    slug: 'category1',
    optional: false,
    targets: [
      {
        title: 'Target with Planning and Tracking',
        slug: 'both_target',
        planning: [
          {
            metadata: 'TODO',
            order: 0,
            reported: false,
            slug: 'ghg_emissions_at_reporting_year',
            title: 'GHG Emissions at reporting year',
            updated_at: '2018-04-30 12:08:12 +0000',
            values: [
              {
                label: 'Value',
                type: 'textarea',
                unit: 'Gt',
                value: 'zonk'
              }
            ]
          },
          {
            metadata: 'TODO',
            order: 0,
            reported: false,
            slug: 'not_applicable',
            title: 'Not applicable',
            updated_at: '2018-04-30 12:08:12 +0000',
            values: [
              {
                label: 'Value',
                type: 'text',
                unit: 'CO2',
                value: 'n/a'
              }
            ]
          },
          {
            metadata: 'TODO',
            order: 1,
            reported: false,
            slug: 'land_sector',
            title: 'Land sector',
            updated_at: '2018-04-30 12:08:12 +0000',
            values: [
              {
                hint: 'Expects csv format',
                label: 'Time series data',
                type: 'text',
                value: 'zonk'
              }
            ]
          },
          {
            metadata: 'TODO',
            order: 2,
            reported: false,
            slug: 'transferrable_emissions_under_itmos',
            title: 'Transferable emissions under ITMOs',
            updated_at: '2018-04-30 12:08:12 +0000',
            values: [
              {
                label: 'Value',
                type: 'text',
                unit: 'Gt',
                value: 'zonk'
              },
              {
                label: 'Year',
                type: 'number',
                value: '1930'
              }
            ]
          }
        ],
        tracking: [
          {
            metadata: 'TODO',
            order: 3,
            reported: false,
            slug: 'quantification_of_ghg_target',
            title: 'Quantification of GHG target',
            updated_at: '2018-04-30 12:08:12 +0000',
            values: [
              {
                label: 'Value',
                type: 'text',
                unit: 'Gt',
                value: 'zonk'
              },
              {
                label: 'Year',
                type: 'number',
                value: '1892'
              }
            ]
          }
        ]
      },
      {
        title: 'Target with only Planning',
        slug: 'only_planning_target',
        planning: [
          {
            metadata: 'TODO',
            order: 3,
            reported: false,
            slug: 'quantification_of_ghg_target',
            title: 'Quantification of GHG target',
            updated_at: '2018-04-30 12:08:12 +0000',
            values: [
              {
                label: 'Value',
                type: 'text',
                unit: 'Gt',
                value: 'zonk'
              },
              {
                label: 'Year',
                type: 'number',
                value: '1892'
              }
            ]
          }
        ],
        tracking: []
      },
      {
        title: 'Only Tracking Target',
        slug: 'only_tracking_target',
        tracking: [
          {
            metadata: 'TODO',
            order: 3,
            reported: false,
            slug: 'quantification_of_ghg_target',
            title: 'Quantification of GHG target',
            updated_at: '2018-04-30 12:08:12 +0000',
            values: [
              {
                label: 'Value',
                type: 'text',
                unit: 'Gt',
                value: 'zonk'
              },
              {
                label: 'Year',
                type: 'number',
                value: '1892'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Category 2',
    slug: 'category2',
    optional: false,
    targets: [
      {
        title: 'Target',
        slug: 'target',
        tracking: [
          {
            metadata: 'TODO',
            order: 3,
            reported: false,
            slug: 'quantification_of_ghg_target',
            title: 'Quantification of GHG target',
            updated_at: '2018-04-30 12:08:12 +0000',
            values: [
              {
                label: 'Value',
                type: 'text',
                unit: 'Gt',
                value: 'zonk'
              },
              {
                label: 'Year',
                type: 'number',
                value: '1892'
              }
            ]
          }
        ]
      }
    ]
  }
];

describe('Reporting Selectors', () => {
  describe('parseCategories', () => {
    it('parses the sector into categories with the desired format', () => {
      const selected = parseCategories.resultFunc(sections);
      expect(selected).toEqual(parsedCategories);
    });
  });
});
