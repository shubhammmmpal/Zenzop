import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowDown(props:any) {
  return (
    <Svg
      width={12}
      height={7}
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.836.025v2.217L6.003 6.733.17 2.242V.025l5.833 4.492L11.836.025z"
        fill="#000"
      />
    </Svg>
  )
}

export default ArrowDown
