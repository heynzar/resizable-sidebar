import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Plus,
  ArrowUpFromLine,
  ArrowDownFromLine,
  Pencil,
  Star,
  CopyPlus,
  UserRoundPlus,
  Link2,
  Copy,
  SwatchBook,
  Upload,
  Download,
  Mail,
  List,
  SquareActivity,
  Puzzle,
  Archive,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import ProjectsButton from "@/components/ProjectsButton";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

const sidebarProjects = [
  { title: "Financial", index: 4, link: "financial" },
  { title: "Academic", index: 3, link: "academic" },
  { title: "Daily Challenges", index: 5, link: "daily-challenges" },
];

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

export default function Projects() {
  const [hideProjectsSettings, setHideProjectsSettings] = useState(false);
  const [hide, setHide] = useState(true);
  const [hover, setHover] = useState(false);
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
    <div className="relative">
      {/* Overlay to block interactions when hideProjectsSettings is true */}
      {hideProjectsSettings && (
        <div
          className="fixed inset-0 bg-black/20 z-10"
          onClick={() => setHideProjectsSettings(false)}
        />
      )}

      <Link href={"/projects/active"}>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="flex w-full text-white items-center justify-between px-2 h-9 my-2 rounded-md mt-5 hover:bg-neutral-700/70 transition-colors cursor-pointer"
        >
          <span className="font-medium">My Projects</span>

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
      </Link>

      {hide && (
        <div className="">
          {sidebarProjects.map(({ title, index, link }) => (
            <Link href={`/projects/${link}`} key={title}>
              <ProjectsButton
                title={title}
                index={String(index)}
                hideProjectsSettings={hideProjectsSettings}
                setHideProjectsSettings={setHideProjectsSettings}
              />
            </Link>
          ))}
        </div>
      )}

      {hideProjectsSettings && (
        <div
          ref={settingsRef}
          style={{
            position: "absolute",
            top: "-110px",
            left: "310px",
          }}
          className="rounded-xl  border border-white/15 w-[280px] bg-neutral-800 z-20"
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
