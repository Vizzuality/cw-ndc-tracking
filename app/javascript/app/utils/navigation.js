import qs from 'query-string';
import isArray from 'lodash/isArray';
import { history, replace } from 'redux-first-router';

export const updateUrlParam = param => {
  const { location } = history();
  const { pathname, search } = getLocationParamUpdated(location, param);
  replace(`${pathname}?${search}`);
};

export const getLocationParamUpdated = (
  location,
  params = [],
  clear = false
) => {
  const search = qs.parse(location.search);
  const newFilters = {};
  const paramsArray = isArray(params) ? params : [params];
  paramsArray.forEach(param => {
    newFilters[param.name] = param.value;
  });
  const newSearch = clear
    ? { ...newFilters }
    : {
      ...search,
      ...newFilters
    };
  return {
    pathname: location.pathname,
    search: qs.stringify(newSearch),
    hash: location.hash
  };
};
