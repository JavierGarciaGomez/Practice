import React from "react";

export type ProfileProps = {
  name: string;
};

export const Profile: React.FC<ProfileProps> = ({ name }) => {
  return <div>Private Profile Component. Name is {name}</div>;
};
