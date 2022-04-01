import React from "react";

type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status: React.FC<StatusProps> = (props) => {
  const { status } = props;
  return (
    <h2>
      {status === "success" && "Data loaded correctly"}
      {status === "loading" && "Data is being loaded"}
      {status === "error" && "ERROR"}
    </h2>
  );
};
