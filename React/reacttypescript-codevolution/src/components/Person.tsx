import React from "react";
import { PersonProps } from "./Person.types";

export const Person: React.FC<PersonProps> = (props) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
