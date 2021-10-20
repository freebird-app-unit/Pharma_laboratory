import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

function BookAppointIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={43} height={43} {...props}>
      <G data-name="Group 10570" transform="translate(-170.068 -758.068)">
        <Circle
          data-name="Ellipse 517"
          cx={21.5}
          cy={21.5}
          r={21.5}
          transform="translate(170.068 758.068)"
          fill="#06a0fd"
        />
        <G
          data-name="Group 10563"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
        >
          <Path data-name="Line 39" d="M183.067 780.067h18" />
          <Path data-name="Line 40" d="M192.067 771.067v18" />
        </G>
      </G>
    </Svg>
  )
}

export default BookAppointIcon