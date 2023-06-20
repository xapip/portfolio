import React from "react";

import { motion } from "framer-motion";

import ScrollToTopOnMount from "../../libs/ScrollToTopOnMount";
import style from "./works.module.scss";

function Works() {
  return (
    <motion.div
      className={style.wrapper}
      initial={{
        x: window.innerWidth,
        opacity: 0.3,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.3, delay: 0.3 },
      }}
      exit={{
        x: -window.innerWidth,
        opacity: 0.3,
        transition: { duration: 0.2 },
      }}
    >
      <ScrollToTopOnMount />
      <div className={style.inner}>
        <div className={style.card}>
          {/* <a href='#' target='_blank'> */}
          <div className={style.img}>
            <img src="./img/projects/Weather-app.webp" alt="превью работы" />
          </div>
          <h2 className={style.title}>приложение погоды</h2>
          <p className={style.description}>
            Сделано на ванильном JS, нарисован в Figma{" "}
          </p>
          {/* </a> */}
        </div>
      </div>
    </motion.div>
  );
}

export default Works;
