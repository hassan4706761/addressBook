import axios from "../Utils/http";
const SERVER_URL = process.env.SERVER;

export const userApi = async (pageNum, nationality, result) => {
  console.log(pageNum, nationality, result);

  const UserData = await axios.get(
    `${SERVER_URL}/?&page=${pageNum}&nat=${nationality}&results=${result}`
  );

  return { data: UserData?.results };
};
