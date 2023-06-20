import React from "react";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import style from "./projectPreview.module.scss";

const imgPath = [
  {
    id: 1,
    src: "./img/projects/Weather-appFullPage.webp",
    alt: "приложение погоды",
  },
  { id: 2, src: "./img/projects/MOGO-landing.webp", alt: "лендинг MOGO" },
  { id: 3, src: "./img/projects/NFT-landing.webp", alt: "лендинг NFT" },
  {
    id: 4,
    src: "./img/projects/Weather-appFullPage.webp",
    alt: "приложение погоды",
  },
];

function ProjectPreview() {
  const constraintRef = React.useRef(null);

  return (
    <section className={style.projectPreview}>
      <h2 className={style.title}>Мои работы</h2>
      <div ref={constraintRef} className={style.projectsList}>
        {imgPath.map((item, index) => (
          <motion.div
            key={item.id}
            drag
            whileDrag={{ scale: 1.02 }}
            dragConstraints={constraintRef}
            dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
            className={style.cart}
            style={{
              backgroundImage: `url(${item.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: "absolute",
              top: `${(index + 1) * 10}%`,
              left: `${(index + 1) * 13}%`,
            }}
          />
        ))}
      </div>
      <NavLink to={"/works"}>узнать больше</NavLink>
    </section>
  );
}

export default ProjectPreview;
