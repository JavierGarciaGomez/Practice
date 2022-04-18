import React, { ChangeEvent, useState } from "react";

export const UseForm = <T extends Object>(initialState: T) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFormData(initialState);
  };

  return { formData, handleChange, handleReset };
};
