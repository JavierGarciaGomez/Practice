import React, { ChangeEvent, useState } from "react";

interface FormData {
  email: string;
  name: string;
}

export const UseForm = <T extends Object>(initialState: T) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return { formData, handleChange };
};
