import React from "react";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import Preloader from "../../../../components/Preloader";
import FormItem from "../../../../components/FormItem";
import { useInput } from "../../../../myHooks/useInput";
import style from "./modalMailForm.module.scss";

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
const minLength = 3;

export default function ModalMailForm({ closeModal }) {
  const [isDisabled, setDisabled] = React.useState(true);
  const [isPreloader, setPreloader] = React.useState({
    state: false,
    color: "#ff0000",
  });

  const refClickModal = React.useRef(false);

  const name = useInput("", minLength);
  const email = useInput("");
  const message = useInput("", minLength);

  React.useEffect(() => {
    const isEmpty = name.isEmpty || email.isEmpty || message.isEmpty;
    const emailError = email.emailError;
    const minLengthError = name.minLengthError || message.minLengthError;

    isEmpty ||
    emailError ||
    minLengthError ||
    name.value.length <= 0 ||
    email.value.length <= 0 ||
    message.value.length <= 0
      ? setDisabled(true)
      : setDisabled(false);
  }, [
    email.emailError,
    email.isEmpty,
    email.minLengthError,
    email.value.length,
    message.isEmpty,
    message.minLengthError,
    message.value.length,
    name.isEmpty,
    name.minLengthError,
    name.value.length,
  ]);

  const form = React.useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    setPreloader({ ...isPreloader, state: true });

    emailjs
      .sendForm(
        "service_rg6t78d",
        "template_qyt0u5o",
        form.current,
        "6nApcDmVhIT0fIJeb"
      )
      .then(
        () => {
          setPreloader((prev) => ({ ...prev, color: "#30C030" }));
          return new Promise((resolve) => {
            setTimeout(() => {
              return resolve();
            }, 1000);
          });
        },
        (err) => {
          alert(`Упс... Что-то пошло не так( Попробуйте еще раз`);
          return err;
        }
      )
      .then(() => {
        name.onClear();
        email.onClear();
        message.onClear();
        closeModal();
        setTimeout(() => {
          setPreloader({
            state: false,
            color: "#ff0000",
          });
        }, 2000);
      });
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalAnimate}
        transition={{
          duration: 0.3,
        }}
        onMouseDown={(e) =>
          e.target.classList.contains(style.modal)
            ? (refClickModal.current = true)
            : null
        }
        onMouseUp={(e) => {
          if (
            refClickModal.current &&
            e.target.classList.contains(style.modal)
          ) {
            e.preventDefault();
            refClickModal.current = false;
            closeModal();
            return;
          }
          refClickModal.current = false;
        }}
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
          <form
            ref={form}
            onSubmit={sendEmail}
            action="#"
            className={style.form}
            id="mailForm"
          >
            <FormItem
              label="Ваше имя"
              type="text"
              name="name"
              useInput={name}
              minLength={minLength}
            />
            <FormItem
              label="Ваша почта"
              type="email"
              name="email"
              useInput={email}
            />
            <FormItem
              textarea={true}
              label="Ваше сообщение"
              name="message"
              useInput={message}
              minLength={minLength}
            />
            <button
              disabled={isDisabled}
              className={style.submiteBtn}
              type="submite"
            >
              Отправить{" "}
            </button>
          </form>
        </motion.div>
      </motion.div>
      {isPreloader.state && <Preloader color={isPreloader.color} />}
    </>
  );
}
