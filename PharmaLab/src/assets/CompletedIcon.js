import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function CompletedIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <G data-name="Group 10590" opacity={0.5} fill="none">
        <Path data-name="Path 8992" d="M0 0h24v24H0z" />
        <Path
          data-name="Path 8993"
          d="M14 3v4a1 1 0 001 1h4"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
        <Path
          data-name="Path 8994"
          d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
        <Path
          data-name="Path 8995"
          d="M9 15l2 2 4-4"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}

export default CompletedIcon