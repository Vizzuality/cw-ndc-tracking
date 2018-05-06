// Action Creators
export const patchIndicator = (
  { section, category, target, indicator },
  { valueLabel, value }
) => ({
  type: 'API',
  method: 'PATCH',
  body: { indicator: { value: { label: valueLabel, value } } },
  path: `/sections/${section}/categories/${category}/targets/${target}/indicator/${indicator}`
});
