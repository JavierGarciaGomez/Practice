import React, { Dispatch, SetStateAction } from "react";

type Props = {
  id: string;
  title: string;
  active: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
};

export const PortfolioList = ({ id, title, active, setSelected }: Props) => {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={() => setSelected(id)}>
      {title}
    </li>
  );
};
