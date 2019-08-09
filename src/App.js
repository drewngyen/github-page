import React from "react";
import "./App.css";
import { Box } from "./components/Box";
import Projects from "./components/Projects";

import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.div
        drag
        dragConstraints={{
          top: -0,
          left: -0,
          right: 0,
          bottom: 0
        }}
      >
        <Box />
      </motion.div>
      <Projects />
    </div>
  );
}

export default App;
