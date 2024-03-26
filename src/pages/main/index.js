import React from 'react';
import logo from "../../logo.svg";
import {Link} from "react-router-dom";
import style from "./main.module.css"

export default function Main() {


  return (
      <>
        <header className={style.main_header}>

          <img src={logo} className={style.main_logo} alt="logo"/>

          <Link to={`/identification/birthDate`} className={style.main_a}>
            시작하기
          </Link>

        </header>
      </>
  )
}