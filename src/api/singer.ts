
import { axiosInstance } from "../utils/request";


export const getSingerRequest = (id:string) => {
  return axiosInstance.get(`/artists?id=${id}`);
};