import { News, Place, REVIEWS, Review, Search } from "@/data";
import BaseService from "./BaseService";
import { AxiosError } from "axios";

interface Response<T> {
  data: T
}
export default {
  async createAccount(email: string): Promise<{message: string}> {
    try {
      const {data} = await BaseService.post<Response<{message: string}>>('/auth', {
        email,
      });
      return data.data;
    } catch (error: unknown) {
      if(error instanceof AxiosError) {
        if(error.response?.status === 422) {
          return error.response.data.data;
        }
      }

      throw error;
    }
  },

  async getReviews(): Promise<Review[]> {
    const {data} = await BaseService.get<Response<Review[]>>('/reviews');
    return data.data;
  },

  async getPlaces(): Promise<Place[]> {
    const {data} = await BaseService.get<Response<Place[]>>('/places');
    return data.data;
  },

  async getNews(): Promise<News[]> {
    const {data} = await BaseService.get<Response<News[]>>('/news');
    return data.data;
  },

  async search(type: string, place: string): Promise<Search[]> {
    const {data} = await BaseService.post<Response<Search[]>>('/search', { place, type });
    return data.data;
  },
}