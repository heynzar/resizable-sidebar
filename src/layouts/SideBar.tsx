"use client";

import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { PanelRight } from "lucide-react";
import SideBarHeader from "@/sections/SidebarHeader";

import Projects from "@/sections/Projects";
import SideBarFooter from "@/sections/SidebarFooter";
import AddButton from "@/components/AddButton";
import Nav from "@/sections/Nav";

export default function SideBar() {
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
              <AddButton />
              <Nav />
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
