"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";
import {
  Calendar,
  CalendarDays,
  Inbox,
  LayoutGrid,
  Search,
} from "lucide-react";

import Button from "@/components/Button";

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

export default function Nav(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...others } = props;
  const pathname = usePathname().split("/").pop();
  return (
    <nav className={className} {...others}>
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
    </nav>
  );
}
