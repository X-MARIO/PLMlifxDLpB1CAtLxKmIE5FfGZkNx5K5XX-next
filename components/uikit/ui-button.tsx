import { ReactNode } from "react";
import { clsx } from "clsx";

const SizeOptionsObject = {
  md: "rounded px-6 py-2 text-sm leading-tight",
  lg: "rounded-lg px-5 py-2 text-2xl leading-tight",
};

type SizeOptions = typeof SizeOptionsObject;

const VariantOptionsObject = {
  primary: "bg-teal-600 hover:bg-teal-500 text-white",
  outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
};

type VariantOptions = typeof VariantOptionsObject;

export const UiButton = ({
  children,
  className,
  size,
  variant,
}: {
  children: ReactNode;
  className: string;
  size: keyof SizeOptions;
  variant: keyof VariantOptions;
}) => {
  const buttonClassName = clsx(
    "transition-colors",
    className,
    SizeOptionsObject[size],
    VariantOptionsObject[variant],
  );
  return <button className={clsx(buttonClassName, "")}>{children}</button>;
};
