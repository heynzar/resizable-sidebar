"use client";

import Button from "@/components/Button";
import ProjectsButton from "@/components/ProjectsButton";
import SideBarHeader from "@/components/SideBarHeader";
import {
  Calendar,
  CalendarDays,
  ChevronDown,
  CirclePlus,
  Inbox,
  LayoutGrid,
  Plus,
  Search,
  SwatchBook,
} from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const sidebarMainBtn = [
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

const sidebarProjects = [
  {
    title: "Financial",
    index: 4,
  },
  {
    title: "Academic",
    index: 3,
  },
  {
    title: "Daily Challenges",
    index: 5,
  },
];

export default function SideBar() {
  const [hide, setHide] = useState(true);
  return (
    <aside className="w-80 h-screen flex flex-col justify-between text-sm bg-neutral-800 border-r border-white/10 p-3 pb-1">
      <div>
        <SideBarHeader />
        <button className="flex w-full text-emerald-400 items-center gap-2 px-2 h-9 mb-2 rounded-md mt-5 hover:bg-neutral-700/70 transition-colors cursor-pointer">
          <CirclePlus strokeWidth={1} />
          <span className="font-medium">Add task</span>
        </button>

        {sidebarMainBtn.map(({ title, Icon, index }) => (
          <Button key={title} title={title} index={index}>
            <Icon strokeWidth={1} className="size-5 text-neutral-400" />
          </Button>
        ))}

        <button className="flex w-full text-white items-center justify-between px-2 h-9 my-2 rounded-md mt-5 hover:bg-neutral-700/70 transition-colors cursor-pointer">
          <span className="font-medium">My Projects</span>

          <div className="flex items-center gap-1">
            <div className="p-0.5 rounded flex items-center justify-center">
              <Plus className="size-6 hover:text-white/80" strokeWidth={1} />
            </div>
            <div
              onClick={() => {
                setHide(!hide);
              }}
              className="p-0.5 rounded flex items-center justify-center"
            >
              <ChevronDown
                className={twMerge(
                  "size-6 hover:text-white/80 transition-transform",
                  hide ? "rotate-0" : "-rotate-90"
                )}
                strokeWidth={1}
              />
            </div>
          </div>
        </button>

        {hide && (
          <div>
            {sidebarProjects.map(({ title, index }) => (
              <ProjectsButton key={title} title={title} index={index} />
            ))}
          </div>
        )}
      </div>
      <button className="flex w-full text-neutral-100 items-center gap-2 px-2 h-9 mb-2 rounded-md mt-5 hover:bg-neutral-700/70 transition-colors cursor-pointer">
        <SwatchBook strokeWidth={1} className="size-5" />
        <span className="font-normal">Browse templates</span>
      </button>
    </aside>
  );
}
