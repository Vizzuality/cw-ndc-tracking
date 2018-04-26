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
            indicators: [
              {
                title: 'Planning indicator 1',
                slug: 'planning_indicator1',
                value: 'test value'
              },
              {
                title: 'Planning indicator 2',
                slug: 'planning_indicator2',
                value: 'test value'
              }
            ]
          },
          {
            title: 'Target with only Planning',
            slug: 'only_planning_target',
            indicators: [
              {
                title: 'Planning indicator 3',
                slug: 'planning_indicator3',
                value: 'test value'
              }
            ]
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
            indicators: [
              {
                title: 'Tracking indicator 1',
                slug: 'tracking_indicator1',
                value: 'test value'
              }
            ]
          },
          {
            title: 'Target with only Planning',
            slug: 'only_planning_target',
            indicators: []
          },
          {
            title: 'Only Tracking Target',
            slug: 'only_tracking_target',
            indicators: [
              {
                title: 'Tracking indicator 2',
                slug: 'tracking_indicator2',
                value: 'test value'
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
            indicators: [
              {
                title: 'indicator',
                slug: 'indicator',
                value: 'test value'
              }
            ]
          }
        ]
      }
    ]
  }
];
