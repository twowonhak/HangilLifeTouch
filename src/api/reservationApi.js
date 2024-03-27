import customAxios from "../lib/customAxios";

// 예약 목록
export const reservationListSelect = async (params) => {
  return await customAxios.post("/reservation/reservationListSelectApi", {chartNo: params});
}

// 예약일 미래 처방
export const reservationExamineSelect = async (params) => {
  return await customAxios.post("/reservation/reservationExamineSelectApi", params);
}

// 예약 변경 신청
export const reservationChangeInsert = async (params) => {
  return await customAxios.post("/reservation/reservationChangeInsertApi", params);
}

// 예약 취소
export const reservationCancelUpdate = async (params) => {
  return await customAxios.post("/reservation/reservationCancelUpdateApi", {chartNo: params});
}

