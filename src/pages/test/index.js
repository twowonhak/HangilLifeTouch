import React from 'react';
import {getTokenApi, setTokenApi} from "../../api/testApi";

export default function  Test() {


  const setToken = () => {
    let param = {"chartNo": "99999999"}
    setTokenApi(param).then((res) => {
      if (res.resultCode === "0000") {
        console.log(res)
      } else {
        console.error(res)
      }
    }).catch((e) => {
      console.error(e)
    })
  }

  const getToken = () => {
    getTokenApi().then((res) => {
      if (res.resultCode === "0000") {
        console.log(res)
      } else {
        console.error(res)
      }
    }).catch((e) => {
      console.error(e)
    })
  }

  return (
      <div className="body">
        <button onClick={() => setToken()}>setToken</button>
        <button onClick={() => getToken()}>setToken</button>
      </div>
  )
}