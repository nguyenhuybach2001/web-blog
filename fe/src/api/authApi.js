import { ENDPOINTS } from "../constants/endpoint";
import axiosClient from "./axiosClient";
export const authApi = {
  login: (data) => () => {
    return axiosClient.post(ENDPOINTS.LOGIN, data);
  },
  getDetails: (id) => () => {
    return axiosClient.get(ENDPOINTS.GET_DETAILS.replace(":id", id));
  },
};
