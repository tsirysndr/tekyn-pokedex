import React from "react";
import PropTypes from "prop-types";
import Svg, { Path } from "react-native-svg";
import styled from "@emotion/native";

const Container = styled.View`
  flex-direction: row;
`;

export default function Next(props) {
  return (
    <Container>
      <Svg
        width={54}
        height={80}
        viewBox="0 0 54 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M49.427 30.57 22.76 3.903c-5.193-5.2-13.66-5.2-18.853 0A13.231 13.231 0 0 0 0 13.33c0 3.56 1.387 6.913 3.907 9.427l17.24 17.24-17.24 17.24A13.243 13.243 0 0 0 0 66.663c0 3.56 1.387 6.907 3.907 9.427a13.243 13.243 0 0 0 9.426 3.907c3.56 0 6.907-1.387 9.427-3.907l26.667-26.667a13.231 13.231 0 0 0 3.906-9.426c0-3.56-1.386-6.914-3.906-9.427Zm-4.714 14.14L18.047 71.377c-2.527 2.52-6.9 2.52-9.427 0a6.671 6.671 0 0 1 0-9.427l21.953-21.953L8.62 18.043a6.621 6.621 0 0 1-1.953-4.713c0-1.78.693-3.453 1.953-4.713a6.67 6.67 0 0 1 9.427-.007l26.666 26.667a6.648 6.648 0 0 1 1.954 4.72c0 1.78-.694 3.453-1.954 4.713Z"
          fill="#F4A261"
        />
      </Svg>
      <Svg
        width={54}
        height={80}
        viewBox="0 0 54 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M49.427 30.57 22.76 3.903c-5.193-5.2-13.66-5.2-18.853 0A13.231 13.231 0 0 0 0 13.33c0 3.56 1.387 6.913 3.907 9.427l17.24 17.24-17.24 17.24A13.243 13.243 0 0 0 0 66.663c0 3.56 1.387 6.907 3.907 9.427a13.243 13.243 0 0 0 9.426 3.907c3.56 0 6.907-1.387 9.427-3.907l26.667-26.667a13.231 13.231 0 0 0 3.906-9.426c0-3.56-1.386-6.914-3.906-9.427Zm-4.714 14.14L18.047 71.377c-2.527 2.52-6.9 2.52-9.427 0a6.671 6.671 0 0 1 0-9.427l21.953-21.953L8.62 18.043a6.621 6.621 0 0 1-1.953-4.713c0-1.78.693-3.453 1.953-4.713a6.67 6.67 0 0 1 9.427-.007l26.666 26.667a6.648 6.648 0 0 1 1.954 4.72c0 1.78-.694 3.453-1.954 4.713Z"
          fill="#F4A261"
        />
      </Svg>
    </Container>
  );
}
