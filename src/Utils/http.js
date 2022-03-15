import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use((res) => {
  try {
    return res.data;
  } catch (error) {
    return toast.error(error, {
      position: "top-right",
    });
  }
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
