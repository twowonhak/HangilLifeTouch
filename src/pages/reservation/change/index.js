import React, {useEffect, useState} from "react";
import style from './change.module.css'
import {browserName, deviceType, osName} from "react-device-detect";
import inputData from "../../../utiles/input/inputData";
import todayAndTomorrow from "../../../utiles/input/todayAndTomorrow";
import onSave from "./onSave";
import NextYearSelectOption from "../../../utiles/NextYearSelectOption";
import inputCheckbox from "../../../utiles/input/inputCheckbox";
import {Loding} from "../../../components";
import {inputDateDayDefault, inputDateMonthDefault, inputDateYearDefault} from "../../../utiles/input/inputDateDefault";

export default function Change({isOpen, setIsOpen, item}) {

  const [infoData, setInfoData] = useState({})
  const [isOpenLoding, setIsOpenLoding] = useState(false)

  useEffect(() => {
    let obj = null;
    let appDat = null
    if (item != null) {
      appDat = "" + item.appDat
      let todayRes = todayAndTomorrow(appDat)
      obj = {
        "appDat": item.appDat,
        "appTime": item.appTime,
        "diagCd": item.diagCd,
        "doctCd": item.doctCd,

        "changeAppDatStrYear" : inputDateYearDefault() ,
        "changeAppDatStrMonth" : inputDateMonthDefault() ,
        "changeAppDatStrDay" : inputDateDayDefault() ,

        "changeAppDatEndYear" : inputDateYearDefault() ,
        "changeAppDatEndMonth" : inputDateMonthDefault() ,
        "changeAppDatEndDay" : inputDateDayDefault() ,

        "changeAppDatYn": false,

        "timeAm" : false ,
        "timePm" : false ,

        "week1": false,
        "week2": false,
        "week3": false,
        "week4": false,
        "week5": false,
        "week6": false,

        "doctYnTy": false,
        "reqText": "",

        "crDiviceTy": deviceType,
        "crOsNm": osName,
        "crBrowser": browserName,

        "todayRes": todayRes
      }
      setInfoData(obj)
    }
  }, [item])

  const onInputData = (e) => {
    inputData(e, infoData, setInfoData)
  }

  const onInputCheck = (e) => {
    inputCheckbox(e, infoData, setInfoData)
  }

  if (!isOpen)
    return null;
  else
    return (
        <div className={style.mainBox}>

          <Loding isOpen={isOpenLoding}/>

          <div className={style.outBox}>
            <button className={style.closeBtn} onClick={() => setIsOpen(false)}>X</button>

            <div className={style.innerBox}>
              <div className={style.title}>
                <p>외래 예약 변경 신청</p>
              </div>
              <div className={style.text}>
              </div>
              <p className={style.pText}>* 모든 내용은 필수 항목이 아닙니다.</p>
              <table className={style.inputInfo}>
                <tbody>
                <tr>
                  <td>예약일자</td>
                  <td>
                    <select name="changeAppDatStrYear" disabled={infoData.changeAppDatYn} value={infoData.changeAppDatStrYear} className={style.input_select1}
                            onChange={onInputData}>
                      <NextYearSelectOption/>
                    </select>
                    <select name="changeAppDatStrMonth" disabled={infoData.changeAppDatYn} value={infoData.changeAppDatStrMonth} className={style.input_select2}
                            onChange={onInputData}>
                      <option value="01">1</option>
                      <option value="02">2</option>
                      <option value="03">3</option>
                      <option value="04">4</option>
                      <option value="05">5</option>
                      <option value="06">6</option>
                      <option value="07">7</option>
                      <option value="08">8</option>
                      <option value="09">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                    <select name="changeAppDatStrDay" disabled={infoData.changeAppDatYn} value={infoData.changeAppDatStrDay} className={style.input_select2}
                            onChange={onInputData}>
                      <option value="01">1</option>
                      <option value="02">2</option>
                      <option value="03">3</option>
                      <option value="04">4</option>
                      <option value="05">5</option>
                      <option value="06">6</option>
                      <option value="07">7</option>
                      <option value="08">8</option>
                      <option value="09">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td style={{textAlign: 'center'}}><span style={{fontWeight: 'bold'}}>~</span></td>
                  <td>
                    <select name="changeAppDatEndYear" disabled={infoData.changeAppDatYn} value={infoData.changeAppDatEndYear} className={style.input_select1}
                            onChange={onInputData}>
                      <NextYearSelectOption/>
                    </select>
                    <select name="changeAppDatEndMonth" disabled={infoData.changeAppDatYn} value={infoData.changeAppDatEndMonth} className={style.input_select2}
                            onChange={onInputData}>
                      <option value="01">1</option>
                      <option value="02">2</option>
                      <option value="03">3</option>
                      <option value="04">4</option>
                      <option value="05">5</option>
                      <option value="06">6</option>
                      <option value="07">7</option>
                      <option value="08">8</option>
                      <option value="09">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                    <select name="changeAppDatEndDay" disabled={infoData.changeAppDatYn} value={infoData.changeAppDatEndDay} className={style.input_select2}
                            onChange={onInputData}>
                      <option value="01">1</option>
                      <option value="02">2</option>
                      <option value="03">3</option>
                      <option value="04">4</option>
                      <option value="05">5</option>
                      <option value="06">6</option>
                      <option value="07">7</option>
                      <option value="08">8</option>
                      <option value="09">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td><label>상관 없음<input type="checkbox" name="changeAppDatYn" className={style.checkbox} onChange={onInputCheck}/></label></td>
                </tr>
                <tr>
                  <td>시간</td>
                  <td>

                    <label>오전<input name="timeAm" type="checkbox" className={style.checkbox} onChange={onInputCheck}/></label>
                    <label>오후<input name="timePm" type="checkbox" className={style.checkbox} onChange={onInputCheck}/></label>

                    {/*<input type="checkbox"/>*/}
                    {/*<label><input type="radio" name="time" value="am" checked={infoData.time === "am"}*/}
                    {/*              onChange={onInputData}/> 오전</label>*/}
                    {/*<label><input type="radio" name="time" value="pm" checked={infoData.time === "pm"}*/}
                    {/*              onChange={onInputData}/> 오후</label>*/}
                  </td>
                </tr>
                <tr>
                  <td>요일</td>
                  <td colSpan="5">
                    <label>월<input name="week1" type="checkbox" className={style.checkbox} onChange={onInputCheck}/></label>
                    <label>화<input name="week2" type="checkbox" className={style.checkbox} onChange={onInputCheck}/></label>
                    <label>수<input name="week3" type="checkbox" className={style.checkbox} onChange={onInputCheck}/></label>
                    <label>목<input name="week4" type="checkbox" className={style.checkbox} onChange={onInputCheck}/></label>
                    <label>금<input name="week5" type="checkbox" className={style.checkbox} onChange={onInputCheck}/></label>
                    <label>토<input name="week6" type="checkbox" className={style.checkbox} onChange={onInputCheck}/></label>
                  </td>
                </tr>
                <tr>
                  <td>진료의</td>
                  <td><label>다른 의료진 변경 허용<input type="checkbox" name="doctYnTy" className={style.checkbox} onChange={onInputCheck}/></label></td>
                </tr>
                </tbody>
              </table>

              <p className={style.pText}>요청 사항</p>
              <textarea name="reqText" className={style.textarea} maxLength={60} onChange={onInputData}/>

              <div className={style.text}>
                <br/>
                <hr/>
                <br/>
                <p>당일과 다음날(병원진료일 기준)으로는 예약 변경이 어렵습니다. 대표 번호로 전화 주세요.</p>
                <p style={{color: "red", fontWeight: "bold"}}>예약 변경 신청은 확정 된 예약이 아닙니다. </p>
                <p>병원에서 진료 스케줄 확인 후 연락 드립니다. 전화를 꼭 받아 주세요.</p>
                <p>(의료진 스케줄에 따라 진료의는 변경 될 수 있습니다.)</p>
              </div>
            </div>

            <div className={style.info_button_div}>
              {
                infoData.todayRes !== "other"
                    ?
                    <button type="button" className={style.info_button} style={{backgroundColor: "red"}}>변경 불가</button>
                    : <button type="submit" onClick={() => {onSave(infoData, setIsOpenLoding, setIsOpen)
                    }} className={style.info_button}>변경 신청</button>
              }
            </div>

          </div>
        </div>
    )
}
