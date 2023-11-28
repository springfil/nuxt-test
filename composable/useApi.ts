import axios from "axios";

export const useApi = () => {
    const baseURL = 'https://rickandmortyapi.com/api'
    
    return axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      }
    })
  }