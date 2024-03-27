import {reservationChangeInsert} from "../../../api/reservationApi";

export default function onSave(infoData, setIsOpenLoding, setIsChangeOpen) {
  setIsOpenLoding(true)
  reservationChangeInsert(infoData).then((res) => {
    if (res.resultCode === "0000") {




      setIsOpenLoding(false)
      setIsChangeOpen(false)
    }
  }).catch((e) => {
    console.error(e)
  })
}
