import React from 'react';
import {Link} from "react-router-dom";
import style from './memu.module.css'
import Title from "../../components/title";
import {Exp} from "../../components";

export default function Memu() {
  return (
      <div className="body">
        <Title text={"메뉴"} nav={"/identification/birthDate"}/>
        <div className="sub_Main">
          <Exp text1={"진행하실 항목을"} text2={"선택 해주세요."}/>

          <div className={style.content}>
            <Link to="/memu/reservation" className={style.memu_a} style={{backgroundColor: '#fefbc7', color: "#9a9542"}}>외래예약취소</Link>
            <Link to="/" className={style.memu_a} style={{backgroundColor: '#fae4c5', color: "#b4874d"}}>문진표</Link>
            <Link to="/" className={style.memu_a} style={{backgroundColor: '#b7efc9', color: "#458253"}}>고객문의</Link>
          </div>

        </div>
      </div>
  )
}