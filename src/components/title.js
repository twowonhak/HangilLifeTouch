import React, {useEffect, useState} from "react";
import {IconBack} from "../assets/icon";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import NoCookies from "./noCookies";
import Refresh from "./refresh";

export default function Title({text, nav}) {

  const [cookies, setCookie, removeCookie] = useCookies(['CHARTNO_JWT']);

  const [isOpenNoCookies, setIsOpenNoCookies] = useState(false);
  const [isOpenRefresh, setIsOpenRefresh] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    if (text !== "본인 인증") {
      if (cookies.CHARTNO_JWT == null) {
        setIsOpenNoCookies(true)
        setTimeout(() => {
          setIsOpenNoCookies(false)
          navigate("/", {replace: true})
        }, 3000);
      }
    }else{
      Object.keys(cookies).forEach(name => {
        removeCookie(name, {path: '/'});
      });
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      Object.keys(cookies).forEach(name => {
        removeCookie(name, {path: '/'});
      });
      setIsOpenRefresh(true)
      setTimeout(() => {
        setIsOpenRefresh(false)
        navigate("/", {replace: true})
      }, 3000); // 3초
    }, 1200000); // 20분
    return () => clearTimeout(timeout);
  }, []);

  return (
      <>
        <NoCookies isOpen={isOpenNoCookies}/>
        <Refresh isOpen={isOpenRefresh} text={"일정시간 초과로 메인으로 돌아갑니다."}/>

        <IconBack className="closeButton" onClick={() => {
          navigate(nav)
        }}/>
        <div className="title">
          <span className="titleText">{text}</span>
        </div>
      </>
  )
}