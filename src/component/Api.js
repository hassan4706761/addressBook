const axios = require("axios");

export const userApi = (setData, count, data, setHasMore, nationality) => {
  if (data.length < 100) {
    console.log("length", data.length);

    if (nationality === "") {
      axios.get(`https://randomuser.me/api/?results=${count}`).then((res) => {
        console.log(res?.data?.results);
        setData((d) => d.concat(res?.data?.results));
      });
    } else {
      axios
        .get(`https://randomuser.me/api/?results=${count}&nat=${nationality}`)
        .then((res) => {
          console.log(res?.data?.results);
          setData((d) => d.concat(res?.data?.results));
        });
    }
  } else {
    setHasMore(false);
  }
};
