import { createSelector } from "reselect";

const selectSearch = (state) => state.search;

export const selectSearchTerm = createSelector(
  [selectSearch],
  (search) => search.term
);

export const selectSpeechModalHidden = createSelector(
  [selectSearch],
  (search) => search.speechModalHidden
);

export const selectSearchType = createSelector(
  [selectSearch],
  (search) => search.searchType
);

export const selectAppsDropdownHidden = createSelector(
  [selectSearch],
  (search) => search.appsDropdownHidden
);

export const selectAccountDropdownHidden = createSelector(
  [selectSearch],
  (search) => search.accountDropdownHidden
);
