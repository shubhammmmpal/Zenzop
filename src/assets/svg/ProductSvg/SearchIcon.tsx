import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchIcon(props:any) {
  return (
    <Svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M18.833 17l-3.666-3.667c.916-1.333 1.5-2.916 1.5-4.666C16.667 4.333 13.083.75 8.75.75S.833 4.333.833 8.667c0 4.333 3.584 7.916 7.917 7.916 1.75 0 3.333-.583 4.667-1.5l3.666 3.667 1.75-1.75zm-15.5-8.25c0-3 2.417-5.417 5.417-5.417s5.417 2.417 5.417 5.417-2.417 5.417-5.417 5.417S3.333 11.75 3.333 8.75z"
        fill="#6B6B6B"
      />
    </Svg>
  )
}

export default SearchIcon
