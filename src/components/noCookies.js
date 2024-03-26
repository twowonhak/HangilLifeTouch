import React, {memo} from "react";
import Spinner from "../assets/img/noCookies.gif"

// 로딩화면
export default memo(function NoCookies({isOpen}) {

      if (!isOpen)
        return null;
      else
        console.log("공지 : ", "시간이 만료 되어 메인 화면으로 이동합니다.")
        return (
            <div className="lodingOutBox">
              <div className="lodingInnerBox">
                <h4>저장 된 개인정보 내용이 삭제 되었습니다.</h4>
                <h4>다시 진행해 주세요.</h4>
                <img src={Spinner} alt="로딩"/>
              </div>
            </div>
        )
    }
)
