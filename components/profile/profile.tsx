import Image from "next/image";
import avatarSrc from "./avatar.png";
import React from "react";

export const Profile = () => {
  return (
    <div className="flex items-center gap-2 text-start text-teal-600">
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
