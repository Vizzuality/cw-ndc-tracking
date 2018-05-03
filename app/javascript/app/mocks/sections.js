export const indicators = [
  {
    title: 'GHG Emissions at reporting year',
    slug: 'ghg_emissions_at_reporting_year',
    values: [
      {
        type: 'select',
        unit: 'Gt',
        options: [{ label: 'white' }, { label: 'black' }],
        label: 'Value',
        value: 'white'
      }
    ],
    order: 0,
    reported: false,
    updated_at: '2018-04-30 12:08:12 +0000',
    metadata: 'TODO'
  },
  {
    title: 'Not applicable',
    slug: 'not_applicable',
    values: [
      {
        type: 'text',
        unit: 'CO2',
        label: 'Value',
        value: 'n/a'
      }
    ],
    order: 0,
    reported: false,
    updated_at: '2018-04-30 12:08:12 +0000',
    metadata: 'TODO'
  },
  {
    title: 'Land sector',
    slug: 'land_sector',
    values: [
      {
        type: 'textarea',
        label: 'Time series data',
        hint: 'Expects csv format',
        value: 'zonk'
      }
    ],
    order: 1,
    reported: false,
    updated_at: '2018-04-30 12:08:12 +0000',
    metadata: 'TODO'
  },
  {
    title: 'Transferable emissions under ITMOs',
    slug: 'transferrable_emissions_under_itmos',
    values: [
      {
        type: 'text',
        unit: 'Gt',
        label: 'Value',
        value: 'zonk'
      },
      {
        type: 'number',
        label: 'Year',
        value: '1930'
      }
    ],
    order: 2,
    reported: false,
    updated_at: '2018-04-30 12:08:12 +0000',
    metadata: 'TODO'
  }
];

export const indicator = {
  title: 'Quantification of GHG target',
  slug: 'quantification_of_ghg_target',
  values: [
    {
      type: 'text',
      unit: 'Gt',
      label: 'Value',
      value: 'zonk'
    },
    {
      type: 'number',
      label: 'Year',
      value: '1892'
    }
  ],
  order: 3,
  reported: false,
  updated_at: '2018-04-30 12:08:12 +0000',
  metadata: 'TODO'
};

export const sections = [
  {
    title: 'Planning',
    slug: 'planning',
    categories: [
      {
        title: 'Category 1',
        slug: 'category1',
        optional: false,
        targets: [
          {
            title: 'Target with Planning and Tracking',
            slug: 'both_target',
            indicators
          },
          {
            title: 'Target with only Planning',
            slug: 'only_planning_target',
            indicators: [indicator]
          }
        ]
      }
    ]
  },
  {
    title: 'Tracking',
    slug: 'tracking',
    categories: [
      {
        title: 'Category 1',
        slug: 'category1',
        optional: false,
        targets: [
          {
            title: 'Target with Planning and Tracking',
            slug: 'both_target',
            indicators: [indicator]
          },
          {
            title: 'Target with only Planning',
            slug: 'only_planning_target',
            indicators: []
          },
          {
            title: 'Only Tracking Target',
            slug: 'only_tracking_target',
            indicators: [indicator]
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
            indicators: [indicator]
          }
        ]
      }
    ]
  }
];
