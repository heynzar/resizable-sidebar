"use client";

import { Ellipsis, Hash } from "lucide-react";
import { ButtonHTMLAttributes, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

import {
  ArrowUpFromLine,
  ArrowDownFromLine,
  Pencil,
  Star,
  CopyPlus,
  UserRoundPlus,
  Archive,
  Trash2,
} from "lucide-react";
import Link from "next/link";

const ProjectsSettings = [
  { Icon: ArrowUpFromLine, title: "Add project above" },
  { Icon: ArrowDownFromLine, title: "Add project below" },
  { Icon: Pencil, title: "Edit" },
  { Icon: Star, title: "Add to favorites" },
  { Icon: CopyPlus, title: "Duplicate" },
  { Icon: UserRoundPlus, title: "Share" },
  { Icon: Archive, title: "Archive" },
  { Icon: Trash2, title: "Delete" },
];

export default function ProjectsButton(
  props: {
    title: string;
    width: string;
    index?: string;
    link: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { className, title, width, link, index, ...others } = props;
  const [hideProjectsSettings, setHideProjectsSettings] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setHideProjectsSettings(false);
      }
    };

    if (hideProjectsSettings) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hideProjectsSettings]);

  return (
    <div>
      {hideProjectsSettings && (
        <div
          className="fixed inset-0 bg-black/20 z-10"
          onClick={() => setHideProjectsSettings(false)}
        />
      )}
      <button
        className={twMerge(
          "flex w-full text-white rounded-md items-center gap-1 hover:bg-neutral-700  transition-colors cursor-pointer parent",
          className
        )}
        {...others}
      >
        <Link
          href={link}
          className=" flex rounded-md w-full pl-3 h-9  items-center justify-between "
        >
          <div className="flex items-center gap-2">
            <Hash strokeWidth={1} className="size-5 text-red-500" />
            <span className="font-light">{title}</span>
          </div>

          <span className="text-neutral-400 text-xs pr-3 font-light child2">
            {index}
          </span>
        </Link>
        <div
          id="ellipsis"
          onClick={() => setHideProjectsSettings(!hideProjectsSettings)}
          className="hover:bg-neutral-600/70  transition-colors p-0.5 mr-1 rounded flex items-center justify-center child"
        >
          <Ellipsis strokeWidth={1} className="size-6 text-white" />
        </div>
      </button>
      {hideProjectsSettings && (
        <div
          id="projects-settings"
          ref={settingsRef}
          className={twMerge(
            "rounded-xl absolute bottom-10 md:bottom-[-40px] left-10 border border-white/15 w-[280px] bg-neutral-800 z-20",
            `md:left-[${width}]`
          )}
          style={{ left: `${width}` }}
        >
          <div className=" p-1.5">
            {ProjectsSettings.slice(0, 2).map(({ title, Icon }) => (
              <Button key={title} title={title}>
                <Icon strokeWidth={1} className="size-5 text-neutral-400" />
              </Button>
            ))}
          </div>
          <div className="border-t border-white/15 p-1.5">
            {ProjectsSettings.slice(2, 5).map(({ title, Icon }) => (
              <Button key={title} title={title}>
                <Icon strokeWidth={1} className="size-5 text-neutral-400" />
              </Button>
            ))}
          </div>
          <div className="border-t border-white/15 p-1.5">
            <Button key={"archive"} title={"Archive"}>
              <Archive strokeWidth={1} className="size-5 text-neutral-400" />
            </Button>

            <Button key={"delete"} title={"Delete"} className="text-red-400">
              <Trash2 strokeWidth={1} className="size-5 " />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
