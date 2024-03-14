import React, {memo} from "react";
import Spinner from "../assets/img/refresh.gif"

// 로딩화면

export default memo(function Refresh({isOpen}) {
      if (!isOpen)
        return null;
      else
        return (
            <div className="lodingOutBox">
              <div className="lodingInnerBox">
                <h4>새로고침 되어 메인으로 돌아갑니다.</h4>
                <br/>
                <h4>잠시만 기다려 주세요...</h4>
                <img src={Spinner} alt="로딩"/>
              </div>
            </div>
        )
    }
)
