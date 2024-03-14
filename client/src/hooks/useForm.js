import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    submitHandler(values);
  };

  return {
    values,
    changeHandler,
    onSubmit
  };
}
