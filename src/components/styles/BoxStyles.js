import styled from "styled-components";

const BoxStyles = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  place-content: center;
  align-items: center;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;

  .item {
    width: 300px;
    height: 360px;
    overflow: visible;
    stroke: #000;
    stroke-width: 2px;
    stroke-linejoin: round;
    stroke-linecap: round;
    display: flex;
  }

  #drew {
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
