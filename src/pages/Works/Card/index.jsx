import React from "react";

// import { motion } from "framer-motion";

import style from "./card.module.scss";

export default function Card({ project, index }) {
  return (
    <div className={style.card}>
      <div className={style.img}>
        <img src={project.imgMin} alt="превью работы" />
      </div>
      <div className={style.description}>
        <h2 className={style.title}>{project.title}</h2>
        <p className={style.type}>{project.type}</p>
        <ul className={style.links}>
          <li>
            <a href={project.linkGitHub}>
              <img src="./img/icons/gitHub.svg" alt="иконка GitHub" />
            </a>
          </li>
          <li>
            <a href={project.linkWeb}>
              <img src="./img/icons/internet.svg" alt="иконка интернета" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
