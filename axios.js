import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://mysql-social-8228ebdd4574.herokuapp.com/api/",
  withCredentials: true,
});
