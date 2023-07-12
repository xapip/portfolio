import React from "react";

import style from "./textArea.module.scss";

export default function TextArea({
  name,
  value,
  onChange,
  onBlur,
  isEmpty,
  minLengthError,
  isDirty,
}) {
  return (
    <textarea
      onChange={(e) => onChange(e)}
      onBlur={(e) => onBlur(e)}
      value={value}
      style={
        (isEmpty || minLengthError) && isDirty ? { borderColor: "red" } : null
      }
      className={style.textarea}
      name={name}
    ></textarea>
  );
}
