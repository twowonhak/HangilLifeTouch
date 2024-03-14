import moment from "moment";
import 'moment/locale/ko';	//대한민국

export default function inputDateDefault() {
  const nowTime = moment().format('YYYY-MM-DD');
  console.log(new Date(nowTime))
  return new Date(nowTime)
}