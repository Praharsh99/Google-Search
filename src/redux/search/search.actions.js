import SearchActionTypes from "./search.types";

export const setSearchTerm = (term) => ({
  type: SearchActionTypes.SET_SEARCH_TERM,
  payload: term,
});

export const setSearchType = (type) => ({
  type: SearchActionTypes.SET_SEARCH_TYPE,
  payload: type,
});

export const toggleSpeechModalHidden = () => ({
  type: SearchActionTypes.SPEECH_MODAL_HIDDEN,
});

export const toggleAppsDropdownHidden = () => ({
  type: SearchActionTypes.APPS_DROPDOWN_HIDDEN,
});

export const toggleAccountDropdownHidden = () => ({
  type: SearchActionTypes.ACCOUNT_DROPDOWN_HIDDEN,
});
