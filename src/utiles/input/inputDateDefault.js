import moment from "moment";
import 'moment/locale/ko';	//대한민국

export function inputDateDefault() {
  const nowTime = moment().format('YYYY-MM-DD');
  console.log(new Date(nowTime))
  return new Date(nowTime)
}

export function inputDateYearDefault() {
  const nowTime = moment().format('YYYY');
  return nowTime.toString()
}

export function inputDateMonthDefault() {
  const nowTime = moment().format('MM');
  return nowTime.toString()
}

export function inputDateDayDefault() {
  const nowTime = moment().format('DD');
  return nowTime.toString()
}

