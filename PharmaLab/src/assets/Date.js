import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      data-name="Group 10698"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      opacity={0.3}
      {...props}
    >
      <Path data-name="Path 9022" d="M0 0h24v24H0z" fill="none" />
      <Circle
        data-name="Ellipse 545"
        cx={9}
        cy={9}
        r={9}
        transform="translate(3 3)"
        fill="none"
        stroke="#2c3e50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        data-name="Path 9023"
        d="M12 7v5l3 3"
        fill="none"
        stroke="#2c3e50"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>
  )
}

export default SvgComponent

