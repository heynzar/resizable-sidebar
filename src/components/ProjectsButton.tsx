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
    index?: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const {
    className,
    title,
    index,

    ...others
  } = props;

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
          "relative flex w-full text-white items-center justify-between pl-3 h-9 rounded-md  hover:bg-neutral-700/70 transition-colors cursor-pointer parent",
          className
        )}
        {...others}
      >
        <div className="flex items-center gap-2">
          <Hash strokeWidth={1} className="size-5 text-neutral-400" />
          <span className="font-light">{title}</span>
        </div>

        <span className="text-neutral-400 text-xs pr-3 font-light child2">
          {index}
        </span>

        <div
          onClick={() => setHideProjectsSettings(!hideProjectsSettings)}
          className="hover:bg-neutral-600/70 transition-colors p-0.5 mr-1 rounded flex items-center justify-center child"
        >
          <Ellipsis strokeWidth={1} className="size-6 text-white" />
        </div>

        {hideProjectsSettings && (
          <div
            ref={settingsRef}
            className="rounded-xl absolute bottom-10 md:bottom-[-80px] left-[50px] md:right-[-300px]  border border-white/15 w-[280px] bg-neutral-800 z-20"
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
      </button>
    </div>
  );
}
