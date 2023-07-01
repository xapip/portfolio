import React from "react";

import { motion } from "framer-motion";

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
      <ScrollToTopOnMount />
      <div className={style.inner}>
        {projects.map(({ id, ...project }, index) => (
          <Card key={id} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default Works;
