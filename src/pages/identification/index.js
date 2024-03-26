import React from 'react';
import {Link} from "react-router-dom";
import style from './identification.module.css'
import Title from "../../components/title";
import {Exp} from "../../components";

export default function Identification() {
  return (
      <div className="body">
        <Title text={"본인인증"} nav={"/"}/>
        <div className="sub_Main">
          <Exp text1={"본인 인증을"} text2={"하실 방법을 선택 해주세요."}/>

          <div className={style.content}>
            <Link to="/identification/chartNumber" className={style.identification_a} style={{backgroundColor: 'green'}} >차트번호</Link>
            <Link to="/identification/birthDate" className={style.identification_a} style={{backgroundColor: 'orange'}}>생년월일</Link>
          </div>

        </div>
      </div>
  )
}