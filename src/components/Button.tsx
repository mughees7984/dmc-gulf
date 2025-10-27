import React from "react";
import { useTranslation } from "react-i18next";

type ButtonProps = {
  /** Optional translation key, e.g. "header.button" */
  labelKey?: string;
  /** Optional custom text (overrides translation) */
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  labelKey = "header.button", // default translation key
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const { t } = useTranslation();

  // Prefer translation if labelKey provided, else fallback to children or default
  const label =
    typeof children === "string" ? children : t(labelKey) || "Sign In";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-1 rounded-full bg-gradient-to-r from-[#E6C98E] to-[#40B5AD] text-white font-medium disabled:opacity-50 transition duration-300 hover:opacity-90 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
