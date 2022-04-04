import axios from "axios";

const KEY = "AIzaSyAT4TXT8bBS03VDIG6OvXrAj3mus3g63hs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
