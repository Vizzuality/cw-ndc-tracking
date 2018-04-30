import { createSelector } from 'reselect';

export const getCategories = createSelector(
  state => state.sections,
  sections => {
    if (!sections || sections.length === 0) return null;
    return sections
      .find(section => section.slug === 'tracking')
      .categories.map(category => ({
        ...category,
        path: `/tracking/${category.slug}`
      }));
  }
);
