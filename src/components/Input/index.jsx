import React from "react";

import { useInput } from "../../myHooks/useInput";
import style from "./input.module.scss";

export default function Input() {
  const name = useInput("");
  return (
    <input
      onChange={(e) => name.onChange(e)}
      onBlur={(e) => name.onBlur(e)}
      value={name.value}
      style={name.isEmpty ? { borderColor: "red" } : null}
      type="text"
      name="name"
      id="name"
    />
  );
}
