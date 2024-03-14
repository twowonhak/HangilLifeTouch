import React from "react";

export default function Title({text}) {

  return (
      <div className="title">
        {/*<IconBack className="closeButton" onClick={onClickBack}/>*/}
        <span className="titleText">{text}</span>
      </div>
  )
}