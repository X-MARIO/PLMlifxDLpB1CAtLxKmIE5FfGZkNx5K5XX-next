"use client";

import React from "react";
import { Header } from "@/components/header";
import { GameTitle } from "@/components/game";

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="mx-auto max-w-[616px] pt-6">
        <GameTitle />
      </main>
    </div>
  );
}
