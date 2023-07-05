import React from "react";

import { motion } from "framer-motion";

import { useInput } from "../../../../myHooks/useInput";
import style from "./modalMailForm.module.scss";
import FormItem from "../../../../components/FormItem";

const modalAnimate = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const formBoxAnimate = {
  hidden: {
    translateY: 100,
    scale: 0.7,
  },
  visible: {
    translateY: 0,
    scale: 1,
  },
};

export default function ModalMailForm({ closeModal }) {
  const name = useInput("");
  const email = useInput("");
  const message = useInput("");

  const sendEmail = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={modalAnimate}
      transition={{
        duration: 0.5,
      }}
      onClick={closeModal}
      className={style.modal}
    >
      <motion.div
        variants={formBoxAnimate}
        transition={{
          duration: 0.5,
        }}
        onClick={(e) => e.stopPropagation()}
        className={style.formBox}
      >
        <button onClick={closeModal} className={style.closeBtn}>
          закрыть
        </button>
        <form onSubmit={sendEmail} action="#" className={style.form}>
          {/* <div className={`${style.inputBox} ${style.nameInput}`}>
            <input
              onChange={(e) => name.onChange(e)}
              onBlur={(e) => name.onBlur(e)}
              value={name.value}
              style={name.isEmpty ? { borderColor: "red" } : null}
              type="text"
              name="name"
              id="name"
            />
            <label htmlFor="name">Ваше имя</label>
          </div> */}
          {/* <div className={`${style.inputBox} ${style.emailInput}`}>
            <input
              onChange={(e) => email.onChange(e)}
              onBlur={(e) => email.onBlur(e)}
              value={email.value}
              style={email.isEmpty ? { borderColor: "red" } : null}
              type="email"
              name="email"
              id="email"
            />
            <label htmlFor="email">Ваша почта</label>
          </div>
          <div className={`${style.inputBox} ${style.messageTextarea}`}>
            <textarea
              onChange={(e) => message.onChange(e)}
              onBlur={(e) => message.onBlur(e)}
              value={message.value}
              style={message.isEmpty ? { borderColor: "red" } : null}
              name="message"
              id="message"
            ></textarea>
            <label htmlFor="message">Ваше сообщение</label>
          </div> */}
          <FormItem />
          <FormItem />
          <FormItem textarea={true} />
          <button disabled className={style.submiteBtn} type="submite">
            Отправить{" "}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
