import { HTMLAttributes } from "react";

export default function SidebarContent(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...others } = props;
  return <div className={className} {...others} />;
}
