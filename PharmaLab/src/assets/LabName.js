import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function LabName(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
      <G data-name="Group 3733" opacity={0.3} fill="none">
        <Path data-name="Path 8627" d="M0 0h16v16H0z" />
        <Path
          data-name="Line 36"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2 14h12"
        />
        <Path
          data-name="Path 8628"
          d="M3.333 14V3.333A1.333 1.333 0 014.666 2h6.667a1.333 1.333 0 011.333 1.333V14"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          data-name="Path 8629"
          d="M6 14v-2.667A1.333 1.333 0 017.333 10h1.333A1.333 1.333 0 0110 11.333V14"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <G
          data-name="Group 3729"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path data-name="Line 37" d="M6.667 5.777h2.667" />
          <Path data-name="Line 38" d="M8 4.444v2.667" />
        </G>
      </G>
    </Svg>
  )
}

export default LabName
