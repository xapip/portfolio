import React from "react";
import { motion } from "framer-motion";

import style from "./preloader.module.scss";

export default function Preloader({ color }) {
  const animateLight = {
    fill:
      color === "#ff0000"
        ? ["#ffff00", "#ff0000", "#ffff00"]
        : ["#30C030", "#30C030", "#30C030"],
    scale: [0.9, 1.2, 0.9],
  };
  const transition = {
    duration: 0.8,
    ease: "easeInOut",
    times: [0, 0.6, 1],
    repeat: Infinity,
    repeatDelay: 0.8,
  };

  return (
    <div className={style.preloader}>
      <div className={style.inner}>
        <motion.svg
          animate={{
            scale: color === "#30C030" ? 0.1 : 1,
            opacity: color === "#30C030" ? 0.1 : 1,
          }}
          transition={{
            delay: 1.4,
            duration: 0.8,
          }}
          viewBox="0 0 150 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="75" cy="67" rx="75" ry="25" fill="#091922" />
          <motion.circle
            cx="32"
            cy="67"
            r="5"
            animate={animateLight}
            transition={transition}
          />
          <motion.circle
            cx="75"
            cy="77"
            r="5"
            animate={animateLight}
            transition={{
              delay: 0.3,
              ...transition,
            }}
          />
          <motion.circle
            cx="118"
            cy="68"
            r="5"
            animate={animateLight}
            transition={{
              delay: 0.6,
              ...transition,
            }}
          />
          <path
            d="M40 28.0001V49.5001C40.0062 49.9582 40.1188 50.2772 40.5 51.0001C40.7341 51.294 41.148 51.5358 42 52.0001C43.3501 52.7488 44.1189 53.0534 45.5 53.5001C47.8146 54.2171 49.1297 54.5396 51.5 55.0001C53.2481 55.3049 54.8557 55.5329 58.5 56.0001C62.736 56.5428 65.4831 56.7594 71 57.0001C72.5722 57.0234 73.7062 57.0211 76 57.0001C80.0735 56.8751 82.361 56.7902 86.5 56.5001C90.2007 56.2282 92.2792 56.0211 96 55.5001C98.5474 55.0787 100.047 54.7795 103 54.0001C104.765 53.5143 105.791 53.1847 108 52.0001C109.445 50.9829 109.932 50.4348 110 49.5001V28.0001C109.7 25.2545 109.405 23.6876 108.5 21.0001C107.703 18.3268 106.815 16.9324 105 14.5001C103.216 12.1052 101.988 10.7847 99 8.50011C96.1607 6.51709 94.634 5.67574 92 4.50011C89.4707 3.3855 87.8114 2.8466 84.5 2.00011C82.68 1.54454 81.5111 1.31917 79 1.00011C78.218 0.928349 77.3138 0.91496 74 1.00011C71.8497 1.07135 70.6468 1.19542 68.5 1.50011C66.5714 1.78816 65.4782 2.00763 63.5 2.50011C61.3899 3.13503 60.1815 3.57296 58 4.50011C56.6772 5.15787 55.6696 5.72309 53.5 7.00011C52.4599 7.55694 51.8002 7.99927 50.5 9.00011C48.1919 10.9103 46.9642 12.0847 45 14.5001C43.2684 16.9775 42.5184 18.4034 41.5 21.0001C40.5438 23.582 40.202 25.1159 40 28.0001Z"
            fill={color === "#ff0000" ? "#718B9A" : "#30C030"}
          />
        </motion.svg>
      </div>
    </div>
  );
}
