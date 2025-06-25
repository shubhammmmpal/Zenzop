import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RightArrow(props:any) {
  return (
    <Svg
      width={7}
      height={11}
      viewBox="0 0 7 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.738.083h2.058L6.966 5.5l-4.17 5.417H.738L4.908 5.5.738.083z"
        fill="#000"
      />
    </Svg>
  )
}

export default RightArrow
