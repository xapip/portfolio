import React from "react";

import { useValidation } from "./useValidation";

export const useInput = (initialValue, minLangth, messageSent) => {
  const [value, setValue] = React.useState(initialValue);
  const [isDirty, setIsDirty] = React.useState(false);

  const valid = useValidation(value, isDirty, minLangth);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClear = (e) => {
    setValue("");
  };

  const onBlur = (e) => {
    setIsDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    onClear,
    ...valid,
  };
};
