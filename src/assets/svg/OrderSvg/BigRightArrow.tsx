import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BigRightArrow(props:any) {
  return (
    <Svg
      width={13}
      height={20}
      viewBox="0 0 13 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M.9 0h3.8l7.7 10-7.7 10H.9l7.7-10L.9 0z" fill="#6B6B6B" />
    </Svg>
  )
}

export default BigRightArrow
