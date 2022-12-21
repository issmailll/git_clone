import axios from "axios";

const baseUrl = "https://api.github.com/users";

export const API = {
  getUser: async () => axios.get(`${baseUrl}/issmailll`),
  getUserFollowers: async () => axios.get(`${baseUrl}/issmailll/followers`),
  getUserFollowing: async () => axios.get(`${baseUrl}/issmailll/following`),
  getUserRepos: async () => axios.get(`${baseUrl}/issmailll/repos`),
  searchUrl: async (user_name) =>
    axios.get(`https://api.github.com/search/users?q=${user_name}`),
};
