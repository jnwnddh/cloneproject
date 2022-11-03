import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <Layoout>{props.children}</Layoout>;
};

export default Layout;

const Layoout = styled.div`
  width: 1200px;
`;
