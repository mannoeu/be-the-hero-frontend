const axios = require("axios");

const api = axios.create({
  baseURL: "https://be-the-hero-rocketseat.herokuapp.com"
});

export default api;
