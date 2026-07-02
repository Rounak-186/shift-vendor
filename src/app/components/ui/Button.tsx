import clsx from "clsx";
import React from "react";

type ButtonProps = {
  variant?: "primary" | "accent" | "outline";
  children: React.ReactNode;
  className?: string;
};

const variants: Record<string, string> = {
  primary:
    "rounded-full bg-primary px-7 py-2 text-md font-semibold text-white transition hover:brightness-110",
  accent: "bg-secondary text-primary ",
  outline:
    "rounded-full border border-primary px-6 py-2 text-sm font-medium text-primary transition hover:scale-102 font-semibold",
};

export const Button = ({
  variant = "primary",
  children,
  className,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "px-5 py-2 h-12 w-48 flex items-center rounded-lg",
        variants[variant],
        " transition-all cursor-pointer hover:scale-101 active:scale-98 active:brightness-80 duration-300)",
        className,
      )}
    >
      {children}
    </button>
  );
};
