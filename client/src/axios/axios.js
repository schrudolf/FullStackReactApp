import axios from "axios";

const createNewAxios = (url, method, body) => {
  return new Promise(async (resolve, reject) => {
    const serverProxy = "http://localhost:5000";
    axios.defaults.withCredentials = true;
    try {
      const response = await axios({
        method: method,
        url: serverProxy + url,
        data: body,
      });
      resolve(response);
    } catch (err) {
      console.log(err.response.data)
    }
  });
};

export default createNewAxios;
