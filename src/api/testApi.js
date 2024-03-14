import customAxios from '../lib/customAxios'

export const testGetApi = async () => {
  return await customAxios.get("/test/get")
}

export const testPostApi = async (params) => {
  return await customAxios.post("/test/post", params);
}

export const testFormApi = async (params) => {
  return await customAxios.formSubmit("/test/get", params);
}