"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { ChevronDown, Plus } from "lucide-react";

import ProjectsButton from "@/components/ProjectsButton";

const sidebarProjects = [
  { title: "Financial", index: 4, link: "financial" },
  { title: "Academic", index: 3, link: "academic" },
  { title: "Daily Challenges", index: 5, link: "daily-challenges" },
];

export default function Projects({ width }: { width: string }) {
  const pathname = usePathname().split("/").pop();
  const [hide, setHide] = useState(true);
  const [hover, setHover] = useState(false);

  return (
    <div className="relative">
      <button
        className={`flex w-full text-white items-center justify-between px-2 h-9 my-2 rounded-md mt-5 hover:bg-neutral-700/70 transition-colors cursor-pointer ${
          pathname === "active" && "bg-red-600/30 hover:bg-red-600/30"
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link href={"/projects/active"}>
          <span className="font-medium">My Projects</span>
        </Link>
        {hover && (
          <div className="flex items-center gap-1 transition">
            <div className="p-0.5 rounded flex items-center justify-center">
              <Plus className="size-6 hover:text-white/80" strokeWidth={1} />
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
        <div className="">
          {sidebarProjects.map(({ title, index, link }) => (
            <ProjectsButton
              key={title}
              className={`${
                pathname === link
                  ? "text-red-300  bg-red-600/30 hover:bg-red-600/30"
                  : "text-white  "
              }`}
              title={title}
              index={String(index)}
              width={width}
              link={`/projects/${link}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
