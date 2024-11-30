import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Button(
  props: {
    title: string;
    index?: number;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { className, title, index, children, ...others } = props;
  return (
    <button
      className={twMerge(
        "flex w-full text-white items-center justify-between px-3 h-9 rounded-md  hover:bg-neutral-700/70 transition-colors cursor-pointer",
        className
      )}
      {...others}
    >
      <div className="flex items-center gap-2">
        {children}
        <span className="font-light">{title}</span>
      </div>

      <span className="text-neutral-400 text-xs font-light">{index}</span>
    </button>
  );
}
