"use client";

import { Ellipsis, Hash } from "lucide-react";
import { ButtonHTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function ProjectsButton(
  props: {
    title: string;
    index?: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const [hover, setHover] = useState(true);
  const { className, title, index, ...others } = props;
  return (
    <button
      onMouseEnter={() => {
        setHover(!hover);
      }}
      onMouseLeave={() => {
        setHover(!hover);
      }}
      className={twMerge(
        "flex w-full text-white items-center justify-between pl-3 h-9 rounded-md  hover:bg-neutral-700/70 transition-colors cursor-pointer",
        className
      )}
      {...others}
    >
      <div className="flex items-center gap-2">
        <Hash strokeWidth={1} className="size-5 text-neutral-400" />
        <span className="font-light">{title}</span>
      </div>

      {hover ? (
        <span className="text-neutral-400 text-xs pr-3 font-light">
          {index}
        </span>
      ) : (
        <div className="hover:bg-neutral-600/70 transition-colors p-0.5 mr-1 rounded flex items-center justify-center">
          <Ellipsis strokeWidth={1} className="size-6 text-white" />
        </div>
      )}
    </button>
  );
}
