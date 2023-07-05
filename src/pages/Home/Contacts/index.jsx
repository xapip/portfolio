import React from "react";

import { AnimatePresence, cubicBezier, motion } from "framer-motion";

import style from "./contacts.module.scss";
import ModalMailForm from "./ModalMailForm";

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
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  React.useEffect(() => {
    modalIsOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style = "");
  }, [modalIsOpen]);

  return (
    <div className={style.footer}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        className={style.earthWrapper}
      >
        <motion.a
          variants={linksAnimate}
          className={`${style.link} ${style.one}`}
          href="https://github.com/xapip"
          target="_blank"
          rel="noreferrer"
        >
          <img src="./img/icons/gitHub.svg" alt="GitHub" />
        </motion.a>
        <motion.a
          variants={linksAnimate}
          className={`${style.link} ${style.two}`}
          href="https://t.me/Aleks_Kobzev"
          target="_blank"
        >
          <img src="./img/icons/telegram.svg" alt="telegram" />
        </motion.a>
        <motion.button
          variants={linksAnimate}
          className={`${style.link} ${style.three} ${style.mail}`}
          onClick={() => setModalIsOpen(!modalIsOpen)}
        >
          <img src="./img/icons/mail.svg" alt="GitHub" />
        </motion.button>
        <motion.div
          variants={earthAnimate}
          className={style.earth}
        ></motion.div>
      </motion.div>
      <AnimatePresence>
        {modalIsOpen && (
          <ModalMailForm
            key="modal"
            closeModal={() => setModalIsOpen(!modalIsOpen)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Contacts;
