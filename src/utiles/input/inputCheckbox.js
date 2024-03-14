/*
  Checkbox 함수

  @ data : state
  @ setData : setState
 */

export default function inputCheckbox(data, setData) {
  const {name,checked} = event.target;
  setData({
    ...data,
    [name]: checked
  });
}