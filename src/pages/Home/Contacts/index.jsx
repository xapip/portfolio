import React from "react";

import { cubicBezier, motion } from "framer-motion";

import style from "./contacts.module.scss";

const earthAnimate = {
  hidden: {
    y: 200,
    scale: 0.6,
  },
  visible: {
    y: 0,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 1.5,
      delay: 0.2,
    },
  },
};

const linksAnimate = {
  hidden: {
    offsetDistance: "0%",
    scale: 0.6,
    opacity: 0,
  },
  visible: {
    offsetDistance: "100%",
    scale: 1.15,
    opacity: 1,
    transition: {
      ease: cubicBezier(0.06, 0.02, 0.4, 1),
      duration: 2.9,
      delay: 0.5,
    },
  },
};

function Contacts() {
  return (
    <div className={style.footer}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className={style.earthWrapper}
      >
        <motion.div
          variants={{
            hidden: {
              offsetDistance: "0%",
              scale: 0.6,
              opacity: 0,
            },
            visible: {
              offsetDistance: "100%",
              scale: 1.35,
              opacity: 1,
              transition: {
                ease: cubicBezier(0.06, 0.02, 0.4, 1),
                duration: 3,
                delay: 0.4,
              },
            },
          }}
          className={`${style.link} ${style.one}`}
        >
          <a href="https://github.com/xapip" target="_blank" rel="noreferrer">
            <img src="./img/icons/gitHub.svg" alt="GitHub" />
          </a>
        </motion.div>
        <motion.a
          variants={{
            hidden: {
              offsetDistance: "0%",
              scale: 0.6,
              opacity: 0,
            },
            visible: {
              offsetDistance: "100%",
              scale: 1.15,
              opacity: 1,
              transition: {
                ease: cubicBezier(0.06, 0.02, 0.4, 1),
                duration: 2.9,
                delay: 0.5,
              },
            },
          }}
          className={`${style.link} ${style.two}`}
          href="https://t.me/Aleks_Kobzev"
          target="_blank"
        >
          <img src="./img/icons/telegram.svg" alt="telegram" />
        </motion.a>
        <motion.a
          variants={{
            hidden: {
              offsetDistance: "0%",
              scale: 0.6,
              opacity: 0,
            },
            visible: {
              offsetDistance: "100%",
              scale: 1,
              opacity: 1,
              transition: {
                ease: cubicBezier(0.06, 0.02, 0.4, 1),
                duration: 2.8,
                delay: 0.7,
              },
            },
          }}
          className={`${style.link} ${style.three}`}
          href="/"
          target="_blank"
        >
          <img src="./img/icons/linkedIn.svg" alt="GitHub" />
        </motion.a>
        <motion.div
          variants={earthAnimate}
          className={style.earth}
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default Contacts;
