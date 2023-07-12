import React from "react";

import style from "./input.module.scss";

export default function Input({
  type,
  name,
  value,
  onChange,
  onBlur,
  isEmpty,
  minLengthError,
  emailError,
  isDirty,
}) {
  return (
    <input
      onChange={(e) => onChange(e)}
      onBlur={(e) => onBlur(e)}
      value={value}
      style={
        (isEmpty || minLengthError || emailError) && isDirty
          ? { borderColor: "red" }
          : null
      }
      className={style.input}
      type={type}
      name={name}
    />
  );
}
