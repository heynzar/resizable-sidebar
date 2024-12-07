import { HTMLAttributes } from "react";
import { SwatchBook } from "lucide-react";

export default function SidebarFooter(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...others } = props;
  return (
    <div id="sidebar-footer" className={className} {...others}>
      <button className="flex w-full text-neutral-100 items-center gap-2 px-2 h-9 mb-2 rounded-md mt-5 hover:bg-neutral-700/70 transition-colors cursor-pointer">
        <SwatchBook strokeWidth={1} className="size-5" />
        <span className="font-normal">Browse templates</span>
      </button>
    </div>
  );
}
