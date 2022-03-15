import {
  SET_CACHE_DATA,
  SET_USER_SEARCH,
  SET_NATIONALITY,
  BEGIN_API_CALL,
  SET_USER_DATA,
  UPDATE_PAGE_NUM,
  AFTER_SET_CACHE_DATA,
} from "../Types";
import { userApi } from "../../Services/HttpService";

export const beginApiCall = () => {
  return {
    type: BEGIN_API_CALL,
  };
};
export const setUserData = (userdata) => {
  return {
    type: SET_USER_DATA,
    payload: userdata,
  };
};
export const afterSetCacheData = (cacheData) => {
  return {
    type: AFTER_SET_CACHE_DATA,
    payload: cacheData,
  };
};
export const setCacheData = (cacheData) => {
  return {
    type: SET_CACHE_DATA,
    payload: cacheData,
  };
};
export const setNationality = (nationality) => {
  return {
    type: SET_NATIONALITY,
    payload: nationality,
  };
};
export const setUserSearch = (data) => {
  return {
    type: SET_USER_SEARCH,
    payload: data,
  };
};
export const updatePageNum = () => {
  return {
    type: UPDATE_PAGE_NUM,
  };
};

export const getCacheData = (pageNum, nationality, perPage) => (dispatch) => {
  try {
    userApi(pageNum, nationality, perPage).then((response) => {
      dispatch(afterSetCacheData(response.data));
    });
  } catch (error) {
    console.log(error);
  }
};
export const getUserData =
  (pageNum, nationality, perPage) => (dispatch, getState) => {
    const UserState = getState().userInfo.userData;
    const cacheData = getState().userInfo.cacheData;
    if (UserState.length > 1) {
      dispatch(setCacheData(cacheData));
      if (pageNum < 20) {
        dispatch(beginApiCall());
        dispatch(getCacheData(pageNum + 1, nationality, perPage));
      }
      dispatch(updatePageNum());
    } else {
      dispatch(beginApiCall());
      try {
        userApi(pageNum, nationality, perPage).then((response) => {
          dispatch(setUserData(response.data));
          dispatch(getCacheData(pageNum + 1, nationality, perPage));
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
