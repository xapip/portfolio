import React from "react";

import Input from "../Input";
import TextArea from "../TextArea";
import { useInput } from "../../myHooks/useInput";

import style from "./input.module.scss";

export default function FormItem({ textarea = false }) {
  return (
    <div className={style.inputBox}>
      {textarea ? <TextArea /> : <Input />}
      <label htmlFor="name">Ваше имя</label>
    </div>
  );
}
