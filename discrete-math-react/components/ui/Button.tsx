import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled,
  type = "button",
}: ButtonProps) {
  const baseStyles = "rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl",
    secondary: "bg-gray-700 hover:bg-gray-600 text-white",
    success: "bg-green-500 hover:bg-green-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </motion.button>
  );
}
