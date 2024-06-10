import { REVIEWS, Review } from "@/data";
import BaseService from "./BaseService";

interface Response<T> {
  data: T
}
export default {
  async getReviews(): Promise<Review[]> {
    const {data} = await BaseService.get<Response<Review[]>>('/reviews');
    return data.data;
  }
}