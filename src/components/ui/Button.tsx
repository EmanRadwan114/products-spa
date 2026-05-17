import React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "icon" | "secondary";
  className?: string;
}

const Button: React.FC<IProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  //   ui
  const variantClass = {
    primary:
      "text-white bg-primary-text dark:bg-primary hover:bg-primary-text/80 dark:hover:bg-primary/80 flex items-center justify-center gap-2",
    icon: "",
    secondary:
      "bg-primary/10 dark:bg-primary/8 hover:scale-105 hover:text-primary",
  };

  return (
    <button
      className={`px-4 py-1.5 text-sm font-medium rounded transition-all duration-300 cursor-pointer capitalize ${variantClass[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
