import styled from "styled-components";

const BoxStyles = styled.div`
  /* width: 100vw; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 30px;
  margin: auto 0;

  .item {
    width: 310px;
    height: 360px;
    overflow: visible;
    stroke: #000;
    stroke-width: 2px;
    stroke-linejoin: round;
    stroke-linecap: round;
    display: flex;
  }

  #drew {
    background: whitesmoke;
    font-size: 18px;
    font-weight: 400;
    stroke: none;
  }

  #box-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 auto;
    stroke: none;
    fill: black;
  }

  #box-content {
    font-size: 1rem;
    font-weight: 200;
    stroke: none;
    fill: black;
  }

  #box-content-last {
    font-size: 1rem;
    font-weight: 200;
    font: italic;
    stroke: none;
    fill: black;
  }
`;

export default BoxStyles;
