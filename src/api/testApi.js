import customAxios from '../lib/customAxios'
import {identificationApi} from "./identificationApi";

export const testGetApi = async (infoData) => {
  return await customAxios.get("/test/get", infoData)
}

export const testPostApi = async (params) => {
  return await customAxios.post("/test/post", params);
}

export const testFormApi = async (params) => {
  return await customAxios.post("/test/get", params);
}

export const setTokenApi = async (params) => {
  console.log(params)
  return await customAxios.post("/test/setToken", params);
}

export const getTokenApi = async (params) => {
  return await customAxios.post("/test/getToken", params);
}
