import { CirclePlus } from "lucide-react";

export default function AddButton() {
  return (
    <button className="flex w-full text-red-400 items-center gap-2 px-2 h-9 mb-2 rounded-md mt-5 hover:bg-neutral-700/70 transition-colors cursor-pointer">
      <CirclePlus strokeWidth={1} />
      <span className="font-medium">Add task</span>
    </button>
  );
}
