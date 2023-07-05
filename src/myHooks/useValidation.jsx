import React from "react";

export const useValidation = (value, isDirty, validations) => {
  const [isEmpty, setIsEmpty] = React.useState(true);
  const [minLengthError, setMinLengthError] = React.useState(false);

  React.useEffect(() => {
    /* for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        default:
          break;
      }
    } */
    value ? setIsEmpty(false) : setIsEmpty(true);
  }, [value, isDirty]);

  if (isDirty)
    return {
      isEmpty,
      minLengthError,
    };
};
