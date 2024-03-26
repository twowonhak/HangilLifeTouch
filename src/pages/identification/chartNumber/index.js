import React, {useState} from 'react';
import style from "./chartNumber.module.css";
import {Link} from "react-router-dom";
import inputOnlyNumber from "../../../utiles/input/inputOnlyNumber";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {ko} from "date-fns/locale";
import {Title} from "../../../components";

export default function ChartNumber() {

  const [infoData, setInfoData] = useState({
    "vistdat": new Date(),
    "chartNo": ""
  })

  return (
      <div className="body">
        <Title text={"본인 인증"} nav={"/"}/>
        <div className="sub_Main">
          <div className="exp">
            <span>본인 인증을 위한</span>
            <br/>
            <span>정보를 입력해 주세요.</span>
          </div>
          <div className="content">
            <table className={style.inputInfo}>
              <tbody>
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
                <td>차트번호</td>
                <td><input type="text" name="chartNo" className={style.input} value={infoData.chartNo}
                           placeholder="숫자입력 ('0'을 제외 한)" maxLength={8}
                           onChange={(e) => inputOnlyNumber(e, infoData, setInfoData)}/></td>
              </tr>
              <tr>
                <td className={style.comment}></td>
                <td className={style.comment}>* 차트번호는 접수증에 있습니다.</td>
              </tr>
              <tr>
                <td colSpan="2" height="80" align="center">
                  <Link to="/memu" className={style.info_a}>확인</Link>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}