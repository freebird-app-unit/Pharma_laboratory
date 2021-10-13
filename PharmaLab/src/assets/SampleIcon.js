import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function SampleIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <G data-name="Group 10589" opacity={0.5} fill="none">
        <Path data-name="Path 8989" d="M0 0h24v24H0z" />
        <Path
          data-name="Path 8990"
          d="M16 4l3 3L6.65 19.35a2.121 2.121 0 11-3-3L16 4"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
        <Path
          data-name="Line 219"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 10h6"
        />
        <Path
          data-name="Path 8991"
          d="M19 15l1.5 1.6a2 2 0 11-3 0L19 15"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  )
}

export default SampleIcon