import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as KeyDown } from "../static/arrow-down.svg";
import styled from "styled-components";

const ContinueStyles = styled.div`
  text-align: center;
  #arrow {
    display: grid;
  }
`;

function Continue() {
  return (
    <ContinueStyles>
      <motion.div
        animate={{ y: 8 }}
        transition={{ yoyo: Infinity, repeatDelay: 0.1 }}
      >
        <div id="arrow">
          <span>
            <KeyDown />
          </span>
          <div>Continue</div>
        </div>
      </motion.div>
    </ContinueStyles>
  );
}

export default Continue;
