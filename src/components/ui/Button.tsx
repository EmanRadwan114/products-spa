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
      "text-white bg-primary-text dark:bg-primary hover:bg-primary-text/80 dark:hover:bg-primary/80",
    secondary: "bg-primary/10 dark:bg-primary/8 hover:text-primary",
    icon: "",
  };

  return (
    <button
      className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-300 cursor-pointer capitalize m-0 flex items-center justify-center gap-2 ${variantClass[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
