import React from "react";
import { MenuItem } from "../menuItem/MenuItem";

type Props = {
  isMenuOpen: boolean;
  onChangeMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Menu = ({ isMenuOpen, onChangeMenu }: Props) => {
  const handleclick = (x: boolean) => {
    onChangeMenu((prev) => !prev);
  };

  const linksData = [
    { link: "intro", label: "Home" },
    { link: "portfolio", label: "Portfolio" },
    { link: "works", label: "Works" },
    { link: "testimonials", label: "Testimonials" },
    { link: "contact", label: "Contact" },
  ];

  return (
    <div className={`menu ${isMenuOpen && "active"}`}>
      <ul>
        {linksData.map((link) => (
          <MenuItem onClick={onChangeMenu} linkData={link} />
        ))}
      </ul>
    </div>
  );
};
