import React, { Fragment } from "react";
import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList: React.FC<PersonListProps> = (props) => {
  return (
    <Fragment>
      {props.names.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      ))}
    </Fragment>
  );
};
