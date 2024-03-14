import {useNavigate} from "react-router-dom";
import {memo, useEffect, useState} from "react";
import Refresh from "./refresh";

// 새로고침 시 3초 후에 메인 화면으로 이동

export default memo(function Header() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true)
    setTimeout(() => {
      setIsOpen(false)
      navigate("/", {replace: true})
    }, 3000);
  }, [])

  return (
      <Refresh isOpen={isOpen}/>
  );
})