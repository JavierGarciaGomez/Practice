import React from "react";

type Props = {
  onClick: (a: any) => void;
  linkData: { link: string; label: string };
};

export const MenuItem = ({ onClick, linkData }: Props) => {
  return (
    <li onClick={() => onClick(false)}>
      <a href={`#${linkData.link}`}>{linkData.label}</a>
    </li>
  );
};
