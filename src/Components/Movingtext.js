import React from 'react'
import MovingText from 'react-moving-text'


 
const Movingtext = (props) => {
  return (
    <MovingText
      type="pulse"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="infinite"
      fillMode="none">
       {props.text}
    </MovingText>
  )
}
export default Movingtext;

