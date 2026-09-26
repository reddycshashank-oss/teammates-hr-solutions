import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 text-[13px] font-semibold tracking-[-0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2";

  const variants = {
    // GREEN BUTTON
    primary:
      "!bg-[#6D7E5A] !text-white hover:!bg-[#6D7E5A] hover:!text-white",

    // WHITE BUTTON
    secondary:
      "!border !border-white !bg-white !text-[#6D7E5A] hover:!border-white hover:!bg-white hover:!text-[#6D7E5A]",

    // DARK GREEN BUTTON
    dark:
      "!bg-[#38472A] !text-white hover:!bg-[#38472A] hover:!text-white",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="!text-current">
        {children}
      </span>

      <span
        aria-hidden="true"
        className="!text-current transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}