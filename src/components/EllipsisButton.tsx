import { ButtonHTMLAttributes, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

export default function EllipsisButton(
  props: {
    hideProjectsSettings: boolean;
    setHideProjectsSettings: (value: SetStateAction<boolean>) => void;
  } & ButtonHTMLAttributes<HTMLDivElement>
) {
  const {
    className,
    children,
    hideProjectsSettings,
    setHideProjectsSettings,
    ...others
  } = props;
  return (
    <div
      id="ellipsis"
      onClick={() => setHideProjectsSettings(!hideProjectsSettings)}
      className={twMerge(
        "hover:bg-neutral-600/70 transition-colors p-0.5 mr-1 rounded flex items-center justify-center child",
        className
      )}
      {...others}
    >
      {children}
    </div>
  );
}
