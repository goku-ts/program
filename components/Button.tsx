// components/Button.js
import React from "react";

const Button = ({
  title,
  onClick,
  className,
}: {
  title?: string;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      className={`w-[70%] max-w-xs px-4 py-2 bg-gold mb-5 text-white rounded transition duration-300 sm:w-[50%] ${className}`}
      onClick={onClick}
    >
      <p className="text-lg font-semibold ">{title}</p>
    </button>
  );
};

export default Button;
