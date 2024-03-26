import {reservationChangeUpdate} from "../../../api/reservationApi";

export default function onSave(infoData) {
  if (window.confirm("타과 예약이 있다면 모두 예약 취소가 됩니다 취소 하시겠습니다.")) {

    reservationChangeUpdate(infoData).then((res) => {
      if (res.resultCode === "0000") {
        console.log(res.data)
      } else if (res.resultCode === "2000") {
        alert("현재 해당일에는 검사 일정이 없습니다. (진료 중 상황에 따라 검사 있을수 있음)")
      } else {
        console.error(res)
      }
    }).catch((e) => {
      console.error(e)
    })
  }

}
