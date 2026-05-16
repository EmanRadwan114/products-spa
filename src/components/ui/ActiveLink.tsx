import React from "react";
import { NavLink } from "react-router";

interface IProps {
  path: string;
  name: string;
  className?: string;
}

const ActiveLink: React.FC<IProps> = ({ path, name, className }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `transition-all duration-500 block w-full relative after:content-[''] after:absolute after:-bottom-1.5 after:inset-s-0 after:h-0.5 after:w-0 after:bg-primary group-hover:after:w-full after:transition-all after:duration-500 ${className} ${
          isActive
            ? "text-primary"
            : "text-primary-text group-hover:text-primary"
        }`
      }
    >
      {name}
    </NavLink>
  );
};

export default ActiveLink;
