import { News, Place, REVIEWS, Review } from "@/data";
import BaseService from "./BaseService";

interface Response<T> {
  data: T
}
export default {
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
}