import React from "react";
import Image from "next/image";

import logoSrc from "./logo.svg";
import { Profile } from "../profile";
import { ArrowDownIcon } from "@/components/header/icons";
import { UiButton } from "@/components/uikit";

export const Header = () => {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt={"logo"} />
      <div className="w-px h-8 bg-slate-200 mx-6"></div>
      <UiButton className="w-44" size="lg" variant="primary">
        Играть
      </UiButton>
      <button className="ml-auto flex items-center gap-2 text-teal-600">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
};
