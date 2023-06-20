import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import Typed from "typed.js";

import ScrollToTopOnMount from "../../libs/ScrollToTopOnMount";
import ProjectPreview from "./ProjectPreview";
import Contacts from "./Contacts";
import style from "./home.module.scss";

function Home() {
  const el = React.useRef(null);
  const parallaxRef = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "^1000, HTML^1500, CSS^1500, JS^1500, Git^1500, Figma^1500, React.js",
      ],
      typeSpeed: 150,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: parallaxRef });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <motion.main
      ref={parallaxRef}
      className={style.wrapper}
      initial={{ x: -window.innerWidth, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.3, delay: 0.3 },
      }}
      exit={{
        x: window.innerWidth,
        opacity: 0,
        transition: { duration: 0.2 },
      }}
    >
      <ScrollToTopOnMount />
      <div className={style.typedText}>
        {`Кобзев Алксандр = {...Я`}
        <span ref={el}></span>
        {`}`}
      </div>
      <motion.header
        style={{ y, opacity }}
        animate={{ transition: { duration: 1 } }}
        className={style.header}
      >
        <h1 className={style.title}>
          Привет
          <br />
          меня зовут Кобзев Александр
        </h1>
        <h2 className={style.subtitle}>я frontend-разработчик</h2>
        <p className={style.text}>добро пожаловать на мой сайт-портфолио :-)</p>
      </motion.header>
      <ProjectPreview />
      <Contacts />
    </motion.main>
  );
}

export default Home;