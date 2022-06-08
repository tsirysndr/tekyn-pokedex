import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/native";

const Container = styled.View`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color:  rgba(255, 255, 255, 0.8);
  border-radius: 10px;
`;

export default function Card(props) {
  return (
    <Container {...props}>
      {props.children}
    </Container>
  );
}

Card.defaultProps = {
  height: 317,
  width: 300,
  children: null,
};

Card.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  children: PropTypes.node,
};
