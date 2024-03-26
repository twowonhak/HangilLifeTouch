import {useLocation, useNavigate} from "react-router-dom";
import {memo, useEffect, useState} from "react";
import Refresh from "./refresh";


// 새로고침 시 3초 후에 메인 화면으로 이동

export default memo(function Header({cookies, removeCookie}) {

  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {

    Object.keys(cookies).forEach(name => {
      removeCookie(name, { path: '/' });
    });

    if (location.pathname !== '/') {
      setIsOpen(true)
      setTimeout(() => {
        setIsOpen(false)
        navigate("/", {replace: true})
      }, 3000);
    }

  }, [])

  return (
      <Refresh isOpen={isOpen} text={"새로고침 되어 메인으로 돌아갑니다."}/>
  );
})