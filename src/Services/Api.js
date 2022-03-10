const axios = require("axios");

export const userApi = async (pageNum, nationality, result) => {
  console.log(pageNum, nationality, result);

  const UserData = await axios.get(
    `https://randomuser.me/api/?&page=${pageNum}&nat=${nationality}&results=${result}`
  );

  return { data: UserData?.data?.results };
};
