import axiosClient from "./axiosClient";

const storyApi = {
  getAll: () => {
    const url = '/story/';
    return axiosClient.get(url);
  },

  post: (newStory) => {
    const url = `/story/post`;
    return axiosClient.post(url, newStory);
  },
}

export default storyApi;