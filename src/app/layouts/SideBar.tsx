import Button from "@/components/Button";
import SideBarHeader from "@/components/SideBarHeader";
import {
  Calendar,
  CalendarDays,
  CirclePlus,
  Inbox,
  LayoutGrid,
  Search,
} from "lucide-react";

const sidebarL = [
  {
    Icon: Search,
    title: "Search",
    index: undefined,
  },
  {
    Icon: Inbox,
    title: "Inbox",
    index: 3,
  },
  {
    Icon: Calendar,
    title: "Today",
    index: 5,
  },
  {
    Icon: CalendarDays,
    title: "Upcoming",
    index: undefined,
  },
  {
    Icon: LayoutGrid,
    title: "Filters & Labels",
    index: undefined,
  },
];

export default function SideBar() {
  return (
    <aside className="w-80 h-screen text-sm bg-neutral-800 border-r border-white/10 p-3">
      <SideBarHeader />
      <button className="flex w-full text-emerald-400 items-center gap-2 px-2 h-9 mb-2 rounded-md mt-5 hover:bg-neutral-700/70 transition-colors cursor-pointer">
        <CirclePlus strokeWidth={1} />
        <span className="font-medium">Add task</span>
      </button>

      {sidebarL.map(({ title, Icon, index }) => (
        <Button key={title} title={title} index={index}>
          <Icon strokeWidth={1} className="size-5 text-neutral-400" />
        </Button>
      ))}
    </aside>
  );
}
