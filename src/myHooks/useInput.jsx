import React from "react";

import { useValidation } from "./useValidation";

export const useInput = (initialValue, validations) => {
  const [value, setValue] = React.useState(initialValue);
  const [isDirty, setIsDirty] = React.useState(false);

  const valid = useValidation(value, isDirty, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setIsDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    ...valid,
  };
};
