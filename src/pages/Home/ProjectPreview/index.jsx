import React from "react";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import { projects } from "../../../data/cardProjects/cardProjectsData";
import style from "./projectPreview.module.scss";

function ProjectPreview() {
  const constraintRef = React.useRef(null);

  return (
    <section className={style.projectPreview}>
      <h2 className={style.title}>Мои работы</h2>
      <div ref={constraintRef} className={style.projectsList}>
        {projects.slice(-3).map((item, index) => (
          <motion.div
            key={item.id}
            drag
            whileDrag={{ scale: 1.02 }}
            dragConstraints={constraintRef}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
            className={style.cart}
            style={{
              backgroundImage: `url(${item.imgFullPage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: "absolute",
              top: `${(index + 1) * 15}%`,
              left: `${(index + 1) * 17}%`,
            }}
          />
        ))}
        <div className={style.navLink}>
          <div className={style.rayInner}>
            <div className={style.shadow}></div>
            <svg
              className={style.ray}
              width="150"
              height="1200"
              viewBox="0 0 150 1200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M75 0H105L89 600H59L45 0H75Z"
                fill="#718B9A"
                fillOpacity="0.5"
              />
              <path
                d="M75 1200H105L89 600H59L45 1200H75Z"
                fill="#718B9A"
                fillOpacity="0.5"
              />
              <circle
                cx="75"
                cy="600"
                r="75"
                fill="#718B9A"
                fillOpacity="0.7"
              />
            </svg>
          </div>
          <div className={style.inner}>
            <NavLink to={"/works"}>узнать больше</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectPreview;
