import axios from "axios";

const BaseService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL + '/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default BaseService;