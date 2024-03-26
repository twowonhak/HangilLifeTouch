import {identificationApi} from "../../../api/identificationApi";

export default function onSave(e, navigate, setCookie, infoData, setIsOpenLoding) {
  e.preventDefault()

  if (infoData.name.length === 0 || infoData.birYear.length === 0 || infoData.birMonth.length === 0 || infoData.birDay.length === 0 || infoData.phoneNo.length === 0) {
    alert("입력 하시지 않은 정보가 있습니다.")
  } else {
    if (infoData.personal === 'Y') {
      setIsOpenLoding(true)
      identificationApi(infoData).then((res) => {
        if (res.resultCode === "0000") {
          navigate("/memu")
        } else if (res.resultCode === "2000") {
          alert("해당 정보는 병원에 등록 되어 있지 않은 정보 입니다. 개인정보를 다시 한번 확인 해주세요. (개인정보 확인 필요 시 대표전화에 연락 해주세요.)");
        } else {
          console.error(res)
        }
      }).catch((e) => {
        console.error(e)
      })
      setIsOpenLoding(false)
    } else {
      alert("개인정보 취급 방침에 동의하시지 않으시면 진행하시기 어렵습니다.")
    }
  }
}
