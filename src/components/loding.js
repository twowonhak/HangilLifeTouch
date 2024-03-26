import React, {memo} from "react";
import Spinner from "../assets/img/lodingRolling.gif"

export default memo(function Loding({isOpen}) {
      if (!isOpen)
        return null;
      else
        return (
            <div className="lodingOutBox">
              <div className="lodingInnerBox">
                <h3>잠시만 기다려 주세요.</h3>
                <img src={Spinner} alt="로딩"/>
                <br/>
                <h6>계속해서 진행이 되지 않으면</h6>
                <h6>1577-7117 연락 주세요.</h6>
              </div>
            </div>
        )
    }
)
