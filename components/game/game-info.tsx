import { clsx } from "clsx";
import { Profile } from "@/components/profile";
import { CrossIcon } from "@/components/game/icons";

export const GameInfo = ({ className }: { className: string }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 flex justify-between",
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="relative">
          <Profile className="w-44" />
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
            <CrossIcon />
          </div>
        </div>
        <div className="h-6 w-px bg-slate-200" />
        <div className="text-slate-900 textl-lg font-semibold">01:08</div>
      </div>

      <div className="flex gap-3 items-center">
        <div className="text-orange-600 textl-lg font-semibold">01:08</div>
        <div className="h-6 w-px bg-slate-200" />
        <div className="relative">
          <Profile className="w-44" />
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
            <CrossIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
