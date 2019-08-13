import * as React from "react";
import { motion } from "framer-motion";
import BoxStyles from "./styles/BoxStyles";
import Continue from "./Continue";
import Link from "./Link";

const theme = {
  brand: "black",
  content: "400"
};

const box = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(0, 0, 0, 0)"
  }
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};
export const Box = () => (
  <BoxStyles theme={theme}>
    <motion.div
      id="drag"
      drag
      dragConstraints={{
        top: -0,
        left: -0,
        right: 0,
        bottom: 0
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        // viewBox="300px 280px"
        className="item"
      >
        <text id="drew" x="10" y="37">
          drew
        </text>
        <motion.text
          id="box-title"
          x="10"
          y="95"
          variants={box}
          initial="hidden"
          animate="visible"
          transition={{
            default: { delay: 10, duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        >
          Full Stack Developer
        </motion.text>
        <motion.text
          id="box-content"
          x="10"
          y="130"
          variants={box}
          initial="hidden"
          animate="visible"
          transition={{
            default: { delay: 2, duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        >
          Proficient in React, Vue, Node, Express
        </motion.text>
        <motion.text
          id="box-content"
          x="10"
          y="150"
          variants={box}
          initial="hidden"
          animate="visible"
          transition={{
            default: { delay: 3, duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        >
          NoSQL and SQL
        </motion.text>
        <motion.text
          id="box-content"
          x="10"
          y="170"
          variants={box}
          initial="hidden"
          animate="visible"
          transition={{
            default: { delay: 4, duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        >
          AWS Services
        </motion.text>
        <motion.text
          id="box-content"
          x="10"
          y="190"
          variants={box}
          initial="hidden"
          animate="visible"
          transition={{
            default: { delay: 5, duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        >
          Docker, Kubernetes, Virtualization
        </motion.text>
        <motion.text
          id="box-content"
          x="10"
          y="210"
          variants={box}
          initial="hidden"
          animate="visible"
          transition={{
            default: { delay: 600, duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        >
          TDD with Jest
        </motion.text>
        <motion.text
          id="box-content"
          x="10"
          y="230"
          variants={box}
          initial="hidden"
          animate="visible"
          transition={{
            default: { delay: 70, duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        >
          UX, UI
        </motion.text>
        <motion.text
          id="box-content-last"
          x="10"
          y="260"
          variants={box}
          initial="hidden"
          animate="visible"
          transition={{
            default: { delay: 80, duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        >
          And more.
        </motion.text>

        <motion.path
          d="M0 30 L0 310 H200 310 L310 30 60 30"
          variants={box}
          initial="hidden"
          animate="visible"
          transition={{
            default: { delayChildren: 2, duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
          }}
        />
      </motion.svg>
    </motion.div>
    <motion.div
      id="links"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 2.2,
        default: { duration: 2 }
      }}
    >
      <h3>drew nguyen</h3>
      <Link
        link="https://www.linkedin.com/in/andrew-knguyen/"
        title="LinkedIn"
      />
      <Link link="https://angel.co/drew-nguyen" title="AngelList" />
      <Link link="https://github.com/drewngyen/" title="GitHub" />
    </motion.div>
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 4.2,
        default: { duration: 2 }
      }}
    >
      {/* <Continue /> */}
    </motion.div>
  </BoxStyles>
);
