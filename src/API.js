import axios from "axios";

const baseUrl = "https://637c7e5a16c1b892ebb51407.mockapi.io/api/pizass";
// const baseUrl =
//   process.env.NODE_ENV === "production"
//     ? "https://remontonlineback.up.railway.app/"
//     : "https://637c7e5a16c1b892ebb51407.mockapi.io/api/pizass";

const API = axios.create({
  baseURL: `${baseUrl}`,
});

const authToken = {
//   set(token) {
//     API.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },

//   unset() {
//     API.defaults.headers.common.Authorization = "";
//   },
};

// API.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response.status === 401) {
//       try {
//         console.log("interceptors.response");
//       } catch (error) {
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(error);
//   }
// );
export { API, authToken };
