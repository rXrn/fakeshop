import axios from "axios";
const URL_PREFIX = window.CONFIG_URL_PREFIX;
const URL_PORT = window.CONFIG_URL_PORT;

const appAxios = axios.create({
  baseURL: URL_PREFIX + URL_PORT,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default appAxios;
