import customAxios from "../lib/customAxios";

export const reservationListSelect = async (params) => {
  return await customAxios.post("/reservation/reservationListSelectApi", {chartNo: params});
}

export const reservationExamineSelect = async (params) => {
  return await customAxios.post("/reservation/reservationExamineSelectApi", params);
}

export const reservationChangeUpdate = async (params) => {
  return await customAxios.post("/reservation/reservationChangeUpdateApi", params);
}

export const reservationCancelUpdate = async (params) => {
  return await customAxios.post("/reservation/reservationCancelUpdateApi", {chartNo: params});
}

