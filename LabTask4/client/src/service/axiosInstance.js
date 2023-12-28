import axios from "axios";
let axiosInstance = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
axiosInstance.defaults.headers.common["x-auth-token"] = localStorage.getItem(
  "jwt_access_token"
)
  ? localStorage.getItem("jwt_access_token").toString()
  : "";
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";

export default axiosInstance;
