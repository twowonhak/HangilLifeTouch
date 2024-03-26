import customAxios from "../lib/customAxios";

export const identificationApi = async (params) => {
  return await customAxios.post("/identification/info", params);
}