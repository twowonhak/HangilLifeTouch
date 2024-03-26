import React, {useEffect, useState} from "react";
import style from './change.module.css'
import {browserName, deviceType, osName} from "react-device-detect";
import inputData from "../../../utiles/input/inputData";
import timeAmPm from "../../../utiles/input/timeAmPm";
import todayAndTomorrow from "../../../utiles/input/todayAndTomorrow";
import onSave from "./onSave";
import NextYearSelectOption from "../../../utiles/NextYearSelectOption";

export default function Change({isOpen, setIsOpen, item}) {

  const [infoData, setInfoData] = useState({
    "chartNo": "",
    "vistday": "",
    "birYear": "",
    "birMonth": "",
    "birDay": "",
    "time": "",
    "diviceTy": deviceType,
    "osNm": osName,
    "browser": browserName,
    "todayRes": ""
  })

  useEffect(() => {
    let obj = null;
    let vistdat = null
    if (item != null) {
      vistdat = "" + item.vistdat
      let todayRes = todayAndTomorrow(vistdat)
      obj = {
        "chartNo": item.chartNo,
        "vistday": item.vistdat,
        "birYear": vistdat.substring(0, 4),
        "birMonth": vistdat.substring(4, 6),
        "birDay": vistdat.substring(6, 8),
        "time": timeAmPm(item.apptime),
        "diviceTy": deviceType,
        "osNm": osName,
        "browser": browserName,
        "todayRes": todayRes
      }
      setInfoData(obj)
    }
  }, [item])

  const onInputData = (e) => {
    inputData(e, infoData, setInfoData)
  }

  if (!isOpen)
    return null;
  else
    return (
        <div className={style.mainBox}>
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
                    <select name="birYear" value={infoData.birYear} className={style.input_select1}
                            onChange={onInputData}>
                      <NextYearSelectOption/>
                    </select>
                    <select name="birMonth" value={infoData.birMonth} className={style.input_select2}
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
                    <select name="birDay" value={infoData.birDay} className={style.input_select2}
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
                    <select name="birYear" value={infoData.birYear} className={style.input_select1}
                            onChange={onInputData}>
                      <NextYearSelectOption/>
                    </select>
                    <select name="birMonth" value={infoData.birMonth} className={style.input_select2}
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
                    <select name="birDay" value={infoData.birDay} className={style.input_select2}
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
                  <td><label>상관 없음<input type="checkbox" className={style.checkbox}/></label></td>
                </tr>
                <tr>
                  <td>시간</td>
                  <td>

                    <label>오전<input type="checkbox" className={style.checkbox}/></label>
                    <label>오후<input type="checkbox" className={style.checkbox}/></label>

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
                    <label>월<input type="checkbox" className={style.checkbox}/></label>
                    <label>화<input type="checkbox" className={style.checkbox}/></label>
                    <label>수<input type="checkbox" className={style.checkbox}/></label>
                    <label>목<input type="checkbox" className={style.checkbox}/></label>
                    <label>금<input type="checkbox" className={style.checkbox}/></label>
                  </td>
                </tr>
                <tr>
                  <td>진료의</td>
                  <td><label>다른 의료진 변경 허용<input type="checkbox" className={style.checkbox}/></label></td>
                </tr>
                </tbody>
              </table>

              <p className={style.pText}>요청 사항</p>
              <textarea className={style.textarea}/>

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
                    : <button type="submit" onClick={() => {
                      onSave(infoData)
                    }} className={style.info_button}>변경 신청</button>
              }
            </div>

          </div>
        </div>
    )
}
