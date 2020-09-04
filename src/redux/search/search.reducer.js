import SearchActionTypes from "./search.types";

const INITIAL_STATE = {
  term: null,
  searchType: null,
  speechModalHidden: true,
  appsDropdownHidden: true,
  accountDropdownHidden: true,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.payload,
      };

    case SearchActionTypes.SET_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.payload,
      };

    case SearchActionTypes.SPEECH_MODAL_HIDDEN:
      return {
        ...state,
        speechModalHidden: !state.speechModalHidden,
      };

    case SearchActionTypes.APPS_DROPDOWN_HIDDEN:
      return {
        ...state,
        appsDropdownHidden: !state.appsDropdownHidden,
      };

    case SearchActionTypes.ACCOUNT_DROPDOWN_HIDDEN:
      return {
        ...state,
        accountDropdownHidden: !state.accountDropdownHidden,
      };

    default:
      return state;
  }
};

export default searchReducer;
