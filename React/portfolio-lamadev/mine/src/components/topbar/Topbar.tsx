import React from "react";
import { Person, Mail } from "@mui/icons-material/";

type Props = {
  isMenuOpen: boolean;
  onChangeMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Topbar = ({ isMenuOpen, onChangeMenu }: Props) => {
  const handleClick = () => {
    onChangeMenu((prev) => !prev);
  };
  return (
    <div className={`topbar ${isMenuOpen && "active"}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Genius.
          </a>
          <div className="itemContainer">
            <Person />
            <span>+44 924 12 74</span>
          </div>
          <div className="itemContainer">
            <Mail />
            <span>&nbsp;javieron.garcia@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={handleClick}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
