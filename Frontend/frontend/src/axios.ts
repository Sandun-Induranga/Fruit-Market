import axios from "axios";

//base_url
const instance = axios.create({
  //baseURL
  baseURL: "http://localhost:8080/fresh/",
  // Header
  // timeout
});
export default instance;
