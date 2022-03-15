import http from "../Utils/http";
const SERVER_URL = process.env.SERVER;

export const userApi = async (pageNum, nationality, perPage) => {
  const UserData = await http.get(
    `${SERVER_URL}/?&page=${pageNum}&nat=${nationality}&results=${perPage}`
  );

  return { data: UserData?.results };
};
