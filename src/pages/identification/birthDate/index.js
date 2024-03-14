import React, {useState} from 'react';
import style from "../../identification/birthDate/birthDate.module.css";
import YearSelectOption from "../../../utiles/YearSelectOption";
import Personal from "../../personal";
import DatePicker from "react-datepicker";
import {ko} from "date-fns/locale";
import inputPhoneNumber from "../../../utiles/input/inputPhoneNumber";
import inputData from "../../../utiles/input/inputData";
import inputDataCleaned from "../../../utiles/input/inputDataCleaned";
import {format} from 'date-fns';
import {Loding} from "../../../components";
import {testGetApi} from "../../../api/testApi";

export default function BirthDate() {

  const [personalModal, setPersonalModal] = useState(false);

  const [infoData, setInfoData] = useState({
    "name": "",
    "birYear": format(new Date(), 'yyyy').toString(),
    "birMonth": "01",
    "birDay": "01",
    "sex": "",
    "phoneNo": "",
    "vistdat": new Date(),
    "personal": "",
  })

  const [isOpenLoding, setIsOpenLoding] = useState(false)

  const onInputData = (e) => {
    inputData(e, infoData, setInfoData)
  }

  const onInputDataCleaned = (e) => {
    inputDataCleaned(e, infoData, setInfoData)
  }

  const onInputPhoneNumber = (e) => {
    inputPhoneNumber(e, infoData, setInfoData)
  }

  const onSave = (e) => {
    e.preventDefault()

    testGetApi().then((res) => {
      if (res.resultCode === '0000') {

      } else {

      }
    })


    //  if (infoData.name.length === 0 || infoData.birYear.length === 0 || infoData.birMonth.length === 0 || infoData.birDay.length === 0 || infoData.sex.length === 0 || infoData.phoneNo.length === 0) {
    //    alert("입력 하시지 않은 정보가 있습니다.")
    //  } else {
    //    if (infoData.personal === 'N') {
    //      alert("개인정보 취급 방침을 동의하시지 않으시면 진행하시기 어렵습니다.")
    //    } else {
    //      setIsOpenLoding(true)
    //      setIsOpenLoding(false)
    //    }
    //  }
  }

  return (
      <>
        <div className="body">
          <Loding isOpen={isOpenLoding}/>
          <div className="title">본인 인증</div>
          <div className="sub_Main">
            <div className="exp">
              <span>본인 인증은 병원에 </span>
              <br/>
              <span>등록 되어 있는 정보가 필요 합니다.</span>
            </div>
            <div className="content">
              <form onSubmit={onSave}>
                <table border="0" cellPadding="0" cellSpacing="0" className={style.inputInfo} align="center">
                  <tbody>
                  <tr>
                    <td>이름</td>
                    <td>
                      <input type="text" name="name" value={infoData.name} className={style.input} maxLength="10"
                             onChange={onInputDataCleaned}/>
                    </td>
                  </tr>
                  <tr>
                    <td>생년월일</td>
                    <td>
                      <select name="birYear" value={infoData.birYear} className={style.input_select1}
                              onChange={onInputData}>
                        <YearSelectOption/>
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
                    <td>성별</td>
                    <td>
                      <label><input type="radio" name="sex" value="M" onChange={onInputData}/> 남</label>
                      <label><input type="radio" name="sex" value="F" onChange={onInputData}/> 여</label>
                    </td>
                  </tr>
                  <tr>
                    <td>전화번호</td>
                    <td>
                      <input type="text" name="phoneNo" value={infoData.phoneNo} className={style.input} maxLength="13"
                             onInput={onInputPhoneNumber} placeholder="숫자만 입력 해주세요."/>
                    </td>
                  </tr>
                  <tr>
                    <td>방문일자</td>
                    <td><DatePicker className={style.input}
                                    locale={ko}
                                    minDate={new Date()}
                                    closeOnScroll={true}
                                    selected={infoData.vistdat}
                                    onChange={(date) => setInfoData((prve => ({...prve, "vistdat": date})))}
                                    dateFormat="yyyy-MM-dd"/></td>
                  </tr>
                  <tr>
                    <td rowSpan="2">
                      <p className="txt_mobileView">개인정보</p>
                      <p className="txt_mobileView">취급방침</p>
                      {/*<span className="txt_pcView">개인정보취급방침</span>*/}
                    </td>
                    <td><span className={style.personalModalText}
                              onClick={() => setPersonalModal(true)}>[개인정보취급방침 전문확인]</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label><input type="radio" name="personal" value="Y" onChange={onInputData}/> 동의</label>
                      <label><input type="radio" name="personal" value="N" onChange={onInputData}/> 동의하지 않음</label>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" height="80" align="center">
                      <button type="submit" className={style.info_button}>확인</button>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
        <Personal isOpen={personalModal} setIsOpen={setPersonalModal}/>

      </>
  )
}