import axios from "axios";

//Creating a specific axios function that is specified to the Unsplash API request to be made in App

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID O07xzP_aPXSIahqCjyBHLhaLaw1UZYxFsWX3f_SdjZ0",
  },
});
