import axios from "axios";



const apiKey = '413179f7b37044a3b53b63db111fda8c'; 
const apiURL = 'https://api.rawg.io/api';

export default axios.create({
    baseURL: apiURL,
    params: {
        key: apiKey
    }
})
  