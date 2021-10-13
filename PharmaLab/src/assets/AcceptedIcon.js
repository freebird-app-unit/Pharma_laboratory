import * as React from "react"
import Svg, { G, Path, Circle } from "react-native-svg"

function AcceptedIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <G data-name="Group 10588" opacity={0.5} fill="none">
        <Path data-name="Path 8986" d="M0 0h24v24H0z" />
        <Path
          data-name="Path 8987"
          d="M7 10l5-6 5 6"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
        <Path
          data-name="Path 8988"
          d="M21 10l-2 8a2.158 2.158 0 01-2 2H7a2.158 2.158 0 01-2-2l-2-8z"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
        <Circle
          data-name="Ellipse 526"
          cx={2}
          cy={2}
          r={2}
          transform="translate(10 13)"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}

export default AcceptedIcon