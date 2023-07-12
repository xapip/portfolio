import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import ScrollToTopOnMount from "../../libs/ScrollToTopOnMount";
import Card from "./Card";
import style from "./works.module.scss";

import { projects } from "../../data/cardProjects/cardProjectsData";

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
      <AnimatePresence initial={true}>
        <React.Fragment key="works">
          <ScrollToTopOnMount />
          <div className={style.cardBox}>
            {projects.map(({ id, ...project }, index) => (
              <Card key={id} project={project} index={index} />
            ))}
          </div>
          <div className={style.footer}>
            <h2 className={style.title}>
              Ну и конечно же, не забудьте оценить данный сайт!
            </h2>
            <p className={style.subtitle}>
              Сделано на <a href="https://react.dev/">React JS</a> и SCSS.{" "}
              <br /> За анимацию отвечает{" "}
              <a href="https://www.framer.com/motion/">Framer Motion</a>. <br />{" "}
              Навыки, на главной странице, набирает{" "}
              <a href="https://github.com/mattboldt/typed.js/">Typed.js</a>.
            </p>
          </div>
        </React.Fragment>
      </AnimatePresence>
    </motion.div>
  );
}

export default Works;
