import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com"

const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};

export const fetchDataFromApi = async (url) => {
  try {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.log("Server Error:", error.response.status);
    } else if (error.request) {
      // Request was made, but no response received
      console.log("No Response received:", error.request);
    } else {
      // Something else happened in setting up the request
      console.log("Error", error.message);
    }
  }
};