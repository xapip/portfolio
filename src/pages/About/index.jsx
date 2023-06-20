import React from "react";

import { motion } from "framer-motion";

import style from "./about.module.scss";
import ScrollToTopOnMount from "../../libs/ScrollToTopOnMount";

function About() {
  return (
    <motion.div
      className={style.wrapper}
      initial={{ x: window.innerWidth, opacity: 0.3 }}
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
      <h1>About</h1>
      <p>
        В 2022 году принял решение посвятить себя програмированию. Выбор языка и
        дальнейшего курса развития пал на фронтенд, потому-что данный путь
        совмещает логику с творческим началом. Возможность моментально
        посмотреть результат своего кода вдохновляет и подстегивает учить
        больше, делать лучше!
      </p>
      <p>За прошедший год обучения стек технологий вырос до:</p>
      {
        "<Кобзев Александр>{React.js,  JS: {ES6+}, HTML5, CSS3: {SCSS, Grid, Flex}, GIT, Figma, ...Я}</Кобзев Александр>"
      }
    </motion.div>
  );
}

export default About;
