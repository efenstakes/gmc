import React from "react";
import styled from "styled-components";

export default class WildcardApplication extends React.Component {
  render() {
    return <Wrapper></Wrapper>;
  }
}

const Wrapper = styled.div`
padding-top: 100px;
max-width: 80%;
margin: auto auto;

#main_nav {
    display: none;
}
`;
