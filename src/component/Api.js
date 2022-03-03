const axios = require("axios");

export const userApi = (setData, count, data = [], setHasMore, value) => {
  console.log("data",data);
  if (data.length < 100) {
    console.log("length", data.length);

    if (value === "") {
      axios.get(`https://randomuser.me/api/?results=${count}`).then((res) => {
        console.log(res?.data?.results);
        setData((d) => d.concat(res?.data?.results));
      });
    } else {
      axios
        .get(`https://randomuser.me/api/?results=${count}&nat=${value}`)
        .then((res) => {
          console.log(res?.data?.results);
          setData((d) => d.concat(res?.data?.results));
        });
    }
  } else {
    setHasMore(false);
  }
};
