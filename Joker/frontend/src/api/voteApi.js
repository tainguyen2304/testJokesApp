import axiosClient from "./axiosClient";

const voteApi = {
  post: (newVote) => {
    const url = `/vote/post`;
    return axiosClient.post(url, newVote);
  },
}

export default voteApi;