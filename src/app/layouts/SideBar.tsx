import SideBarHeader from "@/components/SideBarHeader";
import { CirclePlus } from "lucide-react";

export default function SideBar() {
  return (
    <aside className="w-80 h-screen text-sm bg-neutral-800 border-r border-white/10 p-3">
      <SideBarHeader />
      <button className="flex w-full text-emerald-400 items-center gap-2 px-2 h-8 rounded-md mt-5 hover:bg-neutral-700/70 transition-colors cursor-pointer">
        <CirclePlus strokeWidth={1} />
        <span className="font-medium">Add task</span>
      </button>
    </aside>
  );
}
