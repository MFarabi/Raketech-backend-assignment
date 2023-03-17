import axios from "axios";
import env from "../../configs";

const api = axios.create({
  baseURL: env.AXIOS_BASE_URL,
  params: {
    apikey: env.OMDB_KEY,
  },
});

export default api;
