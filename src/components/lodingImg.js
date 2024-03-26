import React, {memo} from "react";
import Spinner from "../assets/img/lodingRolling.gif"

export default memo(function LodingImg({isOpen}) {
      if (!isOpen)
        return null;
      else
        return (
            <div className="lodingImgBox">
                <img src={Spinner} alt="로딩"/>
            </div>
        )
    }
)
