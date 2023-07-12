import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import Input from "../Input";
import TextArea from "../TextArea";

import style from "./formItem.module.scss";

const errorMessageVariant = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
  },
};

export default function FormItem({
  textarea = false,
  label,
  type,
  name,
  minLength,
  useInput,
}) {
  const {
    value,
    onChange,
    onBlur,
    isEmpty,
    minLengthError,
    emailError,
    isDirty,
  } = useInput;

  return (
    <div className={style.inputBox}>
      {textarea ? (
        <TextArea
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          isEmpty={isEmpty}
          isDirty={isDirty}
          minLengthError={minLengthError}
        />
      ) : (
        <Input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          isEmpty={isEmpty}
          isDirty={isDirty}
          minLengthError={minLengthError}
          emailError={type === "email" ? emailError : null}
        />
      )}
      <label htmlFor="name">{label}</label>
      <AnimatePresence>
        {isDirty && isEmpty ? (
          <motion.p
            key={name}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={errorMessageVariant}
            className={style.errorMessage}
          >
            Поле должно быть заполнено
          </motion.p>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {isDirty && !isEmpty && minLengthError ? (
          <motion.p
            key={name}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={errorMessageVariant}
            className={style.errorMessage}
          >
            Введите не менее {minLength} символов
          </motion.p>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {isDirty && !isEmpty && type === "email" && emailError ? (
          <motion.p
            key={name}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={errorMessageVariant}
            className={style.errorMessage}
          >
            Некорректно введен адрес электронной почты
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
