"use client";

import {
  BadgeCheck,
  Bell,
  BookOpen,
  ChartPie,
  ChevronDown,
  Gift,
  LogOut,
  PanelRight,
  Plus,
  Printer,
  RefreshCcw,
  Settings,
  SquareActivity,
} from "lucide-react";
import Image from "next/image";
import profile from "@/assets/profile.jpg";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

interface SideBarHeaderProps {
  close: boolean;
  setClose: (value: boolean) => void;
}

const profileSettings = [
  { Icon: Settings, title: "Settings", index: "O then S" },
  { Icon: Plus, title: "Add A team", index: "" },
  { Icon: SquareActivity, title: "Activity log", index: "G then A" },
  { Icon: Printer, title: "Print", index: "Ctrl P" },
  { Icon: BookOpen, title: "Resources", index: ">" },
  { Icon: Gift, title: "What's new", index: "" },
  { Icon: BadgeCheck, title: "Upgrade to Pro", index: "" },
  { Icon: RefreshCcw, title: "Sync", index: "1 minutes ago" },
  { Icon: LogOut, title: "Log out", index: "" },
];

const SideBarHeader: React.FC<SideBarHeaderProps> = ({ close, setClose }) => {
  const [openProfileSettings, setOpenProfileSettings] = useState(false);
  return (
    <div id="header" className="flex justify-between items-center">
      <div
        onClick={() => setOpenProfileSettings(!openProfileSettings)}
        id="profile"
        className="relative rounded-md h-8 pl-2 p-1 flex items-center gap-2 hover:bg-neutral-700/70 active:scale-95 transition-all  cursor-pointer"
      >
        <Image
          src={profile}
          alt="Account profile picture"
          width={30}
          height={30}
          className="rounded-full aspect-square size-6"
        />
        <p className="text-sm font-medium">Nzar</p>
        <ChevronDown strokeWidth={1} className="size-4" />
      </div>

      {openProfileSettings && (
        <div
          className="absolute top-12 left-3 rounded-xl border border-white/15 w-[280px]  bg-neutral-800"
          id="profile-settings"
        >
          <div className="p-1.5 ">
            <button className="flex w-full text-white items-center justify-between gap-2 p-2 rounded-md  hover:bg-neutral-700/70 transition-colors cursor-pointer">
              <div className="flex items-center gap-2">
                <ChartPie strokeWidth={1} className="size-5 text-neutral-400" />
                <div className="flex flex-col items-start">
                  <span className="font-medium">Nzar.dev</span>
                  <span className="font-thin text-xs">0/12 tasks</span>
                </div>
              </div>
              <span className="text-neutral-400 text-xs font-light pr-1">
                O then P
              </span>
            </button>
          </div>

          <div className="border-t border-white/15 p-1.5">
            {profileSettings.slice(0, 2).map(({ title, Icon, index }) => (
              <Button key={title} title={title} index={index}>
                <Icon strokeWidth={1} className="size-5 text-neutral-400" />
              </Button>
            ))}
          </div>

          <div className="border-t border-white/15 p-1.5">
            {profileSettings.slice(2, 5).map(({ title, Icon, index }) => (
              <Button key={title} title={title} index={index}>
                <Icon strokeWidth={1} className="size-5 text-neutral-400" />
              </Button>
            ))}
          </div>
          <div className="border-t border-white/15 p-1.5">
            {profileSettings.slice(5, 6).map(({ title, Icon, index }) => (
              <Button key={title} title={title} index={index}>
                <Icon strokeWidth={1} className="size-5 text-neutral-400" />
              </Button>
            ))}
          </div>
          <div className="border-t border-white/15 p-1.5">
            {profileSettings.slice(6, 7).map(({ title, Icon, index }) => (
              <Button key={title} title={title} index={index}>
                <Icon strokeWidth={1} className="size-5 text-neutral-400" />
              </Button>
            ))}
          </div>
          <div className="border-t border-white/15 p-1.5">
            {profileSettings.slice(7, 8).map(({ title, Icon, index }) => (
              <Button key={title} title={title} index={index}>
                <Icon strokeWidth={1} className="size-5 text-neutral-400" />
              </Button>
            ))}
          </div>
          <div className="border-t border-white/15 p-1.5">
            {profileSettings.slice(8, 9).map(({ title, Icon, index }) => (
              <Button key={title} title={title} index={index}>
                <Icon strokeWidth={1} className="size-5 text-neutral-400" />
              </Button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        <Link href="/notifications">
          <div
            id="notifications"
            className="rounded-md size-8 p-1 flex items-center justify-center hover:bg-neutral-700/70 active:scale-95 transition-all cursor-pointer"
          >
            <Bell strokeWidth={1} className="size-6" />
          </div>
        </Link>
        <div
          onClick={() => setClose(!close)}
          id="open-close-side-bar"
          className="rounded-md size-8 p-1 flex items-center justify-center hover:bg-neutral-700/70 active:scale-95 transition-all transition-colors cursor-pointer"
        >
          <PanelRight strokeWidth={1} className="rotate-180 size-6" />
        </div>
      </div>
    </div>
  );
};

export default SideBarHeader;
