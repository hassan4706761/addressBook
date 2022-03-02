const axios = require("axios");

export const userApi = (setData, count, data, setHasMore) => {
  if (data.length < 100) {
    axios.get(`https://randomuser.me/api/?results=${count}`).then((res) => {
      console.log(res?.data?.results);
      setData((d) => d.concat(res?.data?.results));
    });
  } else {
    setHasMore(false);
  }
  console.log("length", data.length);
};
