import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<IProps> = ({ children, className }) => {
  return (
    <div
      className={`sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
