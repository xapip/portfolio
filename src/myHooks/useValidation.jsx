import React from "react";

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export const useValidation = (value, isDirty, minLangth = 0) => {
  const [isEmpty, setIsEmpty] = React.useState(true);
  const [minLengthError, setMinLengthError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);

  React.useEffect(() => {
    value ? setIsEmpty(false) : setIsEmpty(true);
    value.length < minLangth
      ? setMinLengthError(true)
      : setMinLengthError(false);
    EMAIL_REGEXP.test(String(value).toLowerCase())
      ? setEmailError(false)
      : setEmailError(true);
  }, [value, isDirty, minLangth]);

  // if (isDirty)
  return {
    isEmpty,
    minLengthError,
    emailError,
    isDirty,
  };
};
