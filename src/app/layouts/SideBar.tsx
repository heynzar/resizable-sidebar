"use client";

import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import {
  Calendar,
  CalendarDays,
  ChevronDown,
  CirclePlus,
  Inbox,
  LayoutGrid,
  PanelRight,
  Plus,
  Search,
  SwatchBook,
} from "lucide-react";
import Button from "@/components/Button";
import ProjectsButton from "@/components/ProjectsButton";
import SideBarHeader from "@/components/SideBarHeader";

const sidebarMainBtn = [
  { Icon: Search, title: "Search", index: "" },
  { Icon: Inbox, title: "Inbox", index: 3 },
  { Icon: Calendar, title: "Today", index: 5 },
  { Icon: CalendarDays, title: "Upcoming", index: "" },
  { Icon: LayoutGrid, title: "Filters & Labels", index: "" },
];

const sidebarProjects = [
  { title: "Financial", index: 4 },
  { title: "Academic", index: 3 },
  { title: "Daily Challenges", index: 5 },
];

export default function SideBar() {
  const [hide, setHide] = useState(true);
  const [close, setClose] = useState(true);
  const [track, setTrack] = useState(false);
  const [hover, setHover] = useState(false);

  const [width, setWidth] = useState("320px");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (track) {
        const newWidth = `${Math.min(Math.max(e.clientX, 220), 410)}px`;
        setWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      if (track) setTrack(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [track]);

  return (
    <aside className="select-none">
      {!close && (
        <div className="m-4 mr-0">
          <div
            onClick={() => setClose(!close)}
            id="open-close-side-bar"
            className="rounded-md size-8 p-1 flex items-center justify-center hover:bg-neutral-700/70 transition-colors cursor-pointer"
          >
            <PanelRight strokeWidth={1} className="rotate-180 size-6" />
          </div>
        </div>
      )}
      {close && (
        <div className="flex">
          <div
            style={{ width }}
            className={twMerge(
              "min-w-[220px] max-w-[410px] flex flex-col justify-between text-sm bg-neutral-800 border-r border-white/10 p-3 pb-1"
            )}
          >
            <div>
              <SideBarHeader close={close} setClose={setClose} />
              <button className="flex w-full text-red-400 items-center gap-2 px-2 h-9 mb-2 rounded-md mt-5 hover:bg-neutral-700/70 transition-colors cursor-pointer">
                <CirclePlus strokeWidth={1} />
                <span className="font-medium">Add task</span>
              </button>

              {sidebarMainBtn.map(({ title, Icon, index }) => (
                <Button key={title} title={title} index={String(index)}>
                  <Icon strokeWidth={1} className="size-5 text-neutral-400" />
                </Button>
              ))}

              <button
                onMouseEnter={() => {
                  setHover(!hover);
                }}
                onMouseLeave={() => {
                  setHover(!hover);
                }}
                className="flex w-full text-white items-center justify-between px-2 h-9 my-2 rounded-md mt-5 hover:bg-neutral-700/70 transition-colors cursor-pointer"
              >
                <span className="font-medium">My Projects</span>

                {hover && (
                  <div className="flex items-center gap-1">
                    <div className="p-0.5 rounded flex items-center justify-center">
                      <Plus
                        className="size-6 hover:text-white/80"
                        strokeWidth={1}
                      />
                    </div>
                    <div
                      onClick={() => setHide(!hide)}
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
                )}
              </button>

              {hide && (
                <div>
                  {sidebarProjects.map(({ title, index }) => (
                    <ProjectsButton
                      key={title}
                      title={title}
                      index={String(index)}
                    />
                  ))}
                </div>
              )}
            </div>
            <button className="flex w-full text-neutral-100 items-center gap-2 px-2 h-9 mb-2 rounded-md mt-5 hover:bg-neutral-700/70 transition-colors cursor-pointer">
              <SwatchBook strokeWidth={1} className="size-5" />
              <span className="font-normal">Browse templates</span>
            </button>
          </div>
          <div
            onMouseDown={() => setTrack(true)}
            className="w-1 h-screen bg-transparent hover:bg-neutral-600 transition-colors cursor-col-resize"
          ></div>
        </div>
      )}
    </aside>
  );
}
