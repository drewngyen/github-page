import React from "react";
import styled from "styled-components";

const LinkStyle = styled.div`
  margin: 2px;
  display: flex;
  text-align: left;
  a:link,
  a:visited {
    text-decoration: none;
    color: #aa7f00;
    font-size: 14px;
    font-weight: 300;
  }
`;

export default function Link(props) {
  return (
    <LinkStyle>
      <a href={props.link}>{props.title}</a>
    </LinkStyle>
  );
}
