import React from "react";
import style from './personal.module.css'

export default function Personal({isOpen, setIsOpen}) {
  if (!isOpen)
    return null;
  else
    return (
        <div className={style.mainBox}>
          <div className={style.outBox}>
            <button className={style.closeBtn} onClick={() => setIsOpen(false)}>X</button>
            <div className={style.innerBox}>
              <div className={style.title}>
                <p>개인정보취급 방침 안내</p>
              </div>
              <div className={style.text}>
                <br/>
                <p>귀하의 개인정보를 보호하기 위하여 ‘개인정보보호법’등 관련 법규를 준수하고 있으며, 본 건강검진과 관련하여 귀하로부터 수집한 개인정보는 다음의 목적으로만 이용됩니다.</p>
                <br/>
                <ul>
                  <li>○ 이용목적 : 이용자 식별</li>
                  <li>○ 수집항목 : 이름, 생년월일, 성별</li>
                  <li>○ 보유기간 : 본인 동의 철회 시 또는 일시적인 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 삭제 합니다. (최소 3개월에서 최대 4개월까지
                    보관 후 삭제)
                  </li>
                  <li><br/></li>
                  <li>(단, 의료법 등 타 법령의 규정에 의해 보유하도록 한 기간 동안 보관 할 수 있습니다.)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    )

}