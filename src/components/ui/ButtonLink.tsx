import React from "react";
import { Link } from "react-router";

interface IProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

const ButtonLink: React.FC<IProps> = ({
  to,
  className,
  children,
  variant = "primary",
}) => {
  const variantClass = {
    primary:
      "text-white bg-primary-text dark:bg-primary hover:bg-primary-text/80 dark:hover:bg-primary/80",
    secondary: "bg-primary/10 dark:bg-primary/8 hover:text-primary",
  };
  return (
    <Link
      to={to}
      className={`text-sm font-medium rounded-md transition-all duration-300 cursor-pointer capitalize m-0 flex items-center justify-center gap-2 px-8 py-1.5 ${variantClass[variant]} ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
