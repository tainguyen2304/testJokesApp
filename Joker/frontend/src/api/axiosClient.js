import axios from 'axios'

const axiosClient = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        'content-type': 'application/json',
      }
});

axiosClient.interceptors.response.use((response) => {
      if (response && response.data) {
        return response.data;
      }
    
      return response;
    }, (error) => {
      // Handle errors
      throw error;
});

export default axiosClient;