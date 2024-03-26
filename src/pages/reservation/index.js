import React, {useEffect, useRef, useState} from 'react';
import style from "./reservation.module.css";
import 'react-datepicker/dist/react-datepicker.css';
import {reservationCancelUpdate, reservationExamineSelect, reservationListSelect} from "../../api/reservationApi";
import {useCookies} from "react-cookie";
import Title from "../../components/title";
import LodingImg from "../../components/lodingImg";
import Change from "./change";

export default function Reservation() {

  const [infoData, setInfoData] = useState(null)
  const [isLodingOpen, setIsLodingOpen] = useState(true)
  const [isChangeOpen, setIsChangeOpen] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(['CHARTNO_JWT']);

  const infoItem = useRef(null);

  useEffect(() => {
    reservationListSelect(cookies.CHARTNO_JWT).then((res) => {
      if (res.resultCode === "0000") {
        setIsLodingOpen(false)
        setInfoData(res.data)
      } else {
        console.error(res)
      }
    }).catch((e) => {
      console.error(e)
    })
  }, [])

  const select = (item) => {
    reservationExamineSelect(item).then((res) => {
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

  const change = (item) => {
    infoItem.current = item;
    setIsChangeOpen(true)
  }

  const cancel = (item) => {

    if (window.confirm("타과 예약이 있다면 모두 예약 취소가 됩니다 취소 하시겠습니다.")) {
      reservationCancelUpdate(item).then((res) => {
        if (res.resultCode === "0000") {
          console.log(res.data)
          setInfoData(res.data)
          alert(item.vistdatdy + "에 예약이 (모두) 취소 되었습니다.")
        } else {
          console.error(res)
        }
      }).catch((e) => {
        console.error(e)
      })
    }
  }


  return (
      <div className="body">
        <Change isOpen={isChangeOpen} setIsOpen={setIsChangeOpen} item={infoItem.current}/>
        <Title text={"외래 예약 안내"} nav={"/memu"}/>
        <div className="sub_Main">
          <div className="exp">
            <span>외래 예약만 확인이 가능합니다.</span>
            <br/>
            <span>(수술 예약&문의는 대표번호 전화)</span>
          </div>
          <div className={style.content}>
            {
              isLodingOpen ? <LodingImg isOpen={isLodingOpen}/> :
                  infoData ?
                      infoData.map((item, index) => {
                        return (
                            <div key={index} className={style.card}>
                              <div>
                                <span className={style.miniTitle}>진료과 : </span>
                                <span>{item.diagcd}</span>
                              </div>
                              <div>
                                <span className={style.miniTitle}>진료의사 : </span>
                                <span>{item.doct}</span>
                              </div>
                              <div>
                                <span className={style.miniTitle}>방문일자 : </span>
                                <span>{item.vistdatdy}</span>
                              </div>
                              <div>
                                <span className={style.miniTitle}>방문시간 : </span>
                                <span>{item.apptime}</span>
                              </div>
                              <button onClick={() => select(item)}>검사 조회</button>
                              <button onClick={() => change(item)}>예약 변경 신청</button>
                              <button onClick={() => cancel(item)}>예약 취소</button>
                            </div>
                        )
                      }) : <span>예약된 정보가 없습니다. 입력하신 개인정보와 병원에 입력되어 있는 개인정보가 일치하는지 확인해 주세요.</span>
            }

          </div>
        </div>
      </div>
  )
}
