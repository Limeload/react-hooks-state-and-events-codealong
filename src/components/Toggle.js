import React , {useState} from "react";

function Toggle() {
  const [ isOn , setOn ] = useState(true)
const color = isOn ? "red" : "white";
function handleClick() {
  setOn((isOn) => !isOn);
}
  return <button style={{background : color}}
  onClick={handleClick}>{isOn ? 'On' : 'OFF'}
  </button>;
}

export default Toggle;

