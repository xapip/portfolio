import React from "react";
import { useInput } from "../../myHooks/useInput";

export default function TextArea() {
  const message = useInput("");

  return (
    <textarea
      onChange={(e) => message.onChange(e)}
      onBlur={(e) => message.onBlur(e)}
      value={message.value}
      style={message.isEmpty ? { borderColor: "red" } : null}
      name="message"
      id="message"
    ></textarea>
  );
}
