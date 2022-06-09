import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BackIcon = (props) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 24 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.129 17.157c.203-.202.423-.373.655-.521L17.286 1.134a3.876 3.876 0 0 1 5.48 5.48L9.413 19.964l13.42 13.422a3.874 3.874 0 0 1-5.478 5.479L1.784 23.29a3.85 3.85 0 0 1-.655-.522A3.85 3.85 0 0 1 0 19.963a3.852 3.852 0 0 1 1.128-2.806Z"
      fill="#264653"
    />
  </Svg>
);

export default BackIcon;
