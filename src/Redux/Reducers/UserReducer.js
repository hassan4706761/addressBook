import {
  SET_NATIONALITY,
  SET_USER_SEARCH,
  BEGIN_API_CALL,
  SET_CACHE_DATA,
  UPDATE_PAGE_NUM,
  SET_USER_DATA,
  AFTER_SET_CACHE_DATA,
} from "../Types";

const init = {
  userData: [],
  cacheData: [],
  search: "",
  nationality: "ES",
  pagination: {
    pageNum: 1,
    perPage: 20,
  },
  isLoading: false,
};

const UserDataReducer = (state = init, action) => {
  switch (action.type) {
    case BEGIN_API_CALL:
      return {
        ...state,
        isLoading: true,
      };
    case SET_USER_DATA:
      return {
        ...state,
        userData: [...action.payload],
        isLoading: false,
      };
    case SET_CACHE_DATA:
      return {
        ...state,
        userData: [...action.payload],
      };
    case AFTER_SET_CACHE_DATA:
      return {
        ...state,
        cacheData: [...action.payload],
        isLoading: false,
      };
    case UPDATE_PAGE_NUM:
      return {
        ...state,
        pageNum: state.pagination.pageNum + 1,
        perPage: state.pagination.perPage,
      };
    case SET_NATIONALITY:
      return {
        ...state,
        nationality: action.payload,
      };
    case SET_USER_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};
export default UserDataReducer;
