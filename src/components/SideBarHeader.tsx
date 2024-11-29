import { Bell, ChevronDown, PanelRight } from "lucide-react";
import Image from "next/image";
import profile from "@/assets/profile.jpg";
import Link from "next/link";

export default function SideBarHeader() {
  return (
    <div id="header" className="flex justify-between items-center">
      <div
        id="profile"
        className="rounded-md h-8 pl-2 p-1 flex items-center gap-2 hover:bg-neutral-700/70 transition-colors cursor-pointer"
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
      <div className="flex items-center gap-2">
        <Link href="/notifications">
          <div
            id="notifications"
            className="rounded-md size-8 p-1 flex items-center justify-center hover:bg-neutral-700/70 transition-colors cursor-pointer"
          >
            <Bell strokeWidth={1} />
          </div>
        </Link>
        <div
          id="open-close-side-bar"
          className="rounded-md size-8 p-1 flex items-center justify-center hover:bg-neutral-700/70 transition-colors cursor-pointer"
        >
          <PanelRight strokeWidth={1} className="rotate-180" />
        </div>
      </div>
    </div>
  );
}
