"use client";

import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import {
  Calendar,
  CalendarDays,
  CirclePlus,
  Inbox,
  LayoutGrid,
  PanelRight,
  Search,
} from "lucide-react";
import Button from "@/components/Button";
import SideBarHeader from "@/sections/SideBarHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Projects from "@/sections/Projects";
import SideBarFooter from "@/sections/SideBarFooter";

const sidebarMainBtn = [
  { Icon: Inbox, title: "Inbox", index: 3, link: "inbox" },
  { Icon: Calendar, title: "Today", index: 5, link: "today" },
  { Icon: CalendarDays, title: "Upcoming", index: "", link: "upcoming" },
  {
    Icon: LayoutGrid,
    title: "Filters & Labels",
    index: "",
    link: "filters-labels",
  },
];

export default function SideBar() {
  const pathname = usePathname().split("/").pop();
  const [close, setClose] = useState(true);
  const [track, setTrack] = useState(false);
  const [width, setWidth] = useState(320);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (track) {
        const newWidth = Math.min(Math.max(e.clientX, 220), 410);
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
    <aside
      style={{
        marginRight: `${close ? 0 : -width + 40}px`,
        transition: "0.5s ease",
      }}
      className="select-none absolute shadow-md md:static md:shadow-none"
    >
      <div
        className={twMerge("absolute inset-0 size-9 m-4", close && "hidden")}
      >
        <div
          onClick={() => setClose(!close)}
          id="open-close-side-bar"
          className="rounded-md size-8 p-1 flex items-center justify-center hover:bg-neutral-700/70 transition-colors cursor-pointer"
        >
          <PanelRight strokeWidth={1} className="rotate-180 size-6" />
        </div>
      </div>

      {
        <div
          className={twMerge(
            "flex transition-all duration-500",
            close ? "min-w-[220px]  max-w-[410px]" : "-translate-x-[100%]"
          )}
        >
          <div
            style={{ width: `${width}px` }}
            className={twMerge(
              "min-w-[220px]  max-w-[410px] max-h-[100dvh] flex flex-col justify-between text-sm bg-neutral-800 border-r border-white/10 p-3 pb-1"
            )}
          >
            <div>
              <SideBarHeader close={close} setClose={setClose} />
              <button className="flex w-full text-red-400 items-center gap-2 px-2 h-9 mb-2 rounded-md mt-5 hover:bg-neutral-700/70 transition-colors cursor-pointer">
                <CirclePlus strokeWidth={1} />
                <span className="font-medium">Add task</span>
              </button>

              <Button title="Search">
                <Search strokeWidth={1} className="size-5 text-neutral-400" />
              </Button>

              {sidebarMainBtn.map(({ title, Icon, index, link }) => (
                <Link href={`/${link}`} key={title}>
                  <Button
                    title={title}
                    index={String(index)}
                    className={`${
                      pathname === link
                        ? "text-red-300  bg-red-600/30 hover:bg-red-600/30"
                        : "text-white  "
                    }`}
                  >
                    <Icon
                      strokeWidth={`${pathname === link ? 2 : 1}`}
                      color={`${pathname === link ? "#f87171" : "#a1a1aa"}`}
                      className="size-5"
                    />
                  </Button>
                </Link>
              ))}
              <Projects width={`${width}px`} />
            </div>

            <SideBarFooter />
          </div>
          <div
            onMouseDown={() => setTrack(true)}
            className="w-1.5  h-screen bg-transparent  hover:bg-neutral-600/80 transition-colors cursor-col-resize"
          ></div>
        </div>
      }
    </aside>
  );
}
