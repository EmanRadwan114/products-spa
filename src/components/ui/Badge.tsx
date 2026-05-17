import React from "react";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

const Badge: React.FC<IProps> = ({ children, className }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 bg-primary/10 dark:neutral-800 px-2 py-1 text-primary rounded-md w-fit capitalize text-xs font-semibold  ${className}`}
    >
      <span>{children}</span>
    </div>
  );
};

export default Badge;
