import React, { ChangeEvent, useState } from "react";
import { UseForm } from "../hooks/UseForm";

interface FormData {
  email: string;
  name: string;
}

export const Formulario = () => {
  const { formData, handleChange } = UseForm<FormData>({
    email: "a",
    name: "",
  });
  const { email, name } = formData;
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          onChange={handleChange}
          value={email}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          onChange={handleChange}
          value={name}
        />
      </div>
      <pre>{JSON.stringify(formData)}</pre>
    </form>
  );
};
