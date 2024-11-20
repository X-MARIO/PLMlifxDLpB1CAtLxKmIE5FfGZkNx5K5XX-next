import Image from "next/image";
import avatarSrc from "./avatar.png";
import React from "react";
import { clsx } from "clsx";

export const Profile = ({ className }: { className: string }) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-2 text-start text-teal-600",
        className,
      )}
    >
      <Image
        src={avatarSrc}
        alt={"avatar"}
        unoptimized
        width={48}
        height={48}
      />
      <div>
        <div className="text-lg leading-tight">Paromovevg</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: 1230
        </div>
      </div>
    </div>
  );
};
