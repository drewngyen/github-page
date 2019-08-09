import React from "react";
import styled from "styled-components";

const LinkStyle = styled.div`
  margin: 2px;
  display: flex;
  text-align: left;
  a:link,
  a:visited {
    text-decoration: none;
    color: #bd8e00;
    font-size: 11px;
  }
`;

export default function Link(props) {
  return (
    <LinkStyle>
      <a href={props.link}>{props.title}</a>
    </LinkStyle>
  );
}
